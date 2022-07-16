<template>
  <aside class="list-side" v-if="!homeData.loading">
    <!-- 1 -->
    <template v-for="(item, index) in homeData.getCategories" :key="index">
      <details v-if="item.children && item.children.length > 0">
        <summary>
          <span class="f-link" @click="categoryChange(item.id)">{{
            item.title
          }}</span>
        </summary>
        <!-- 2 -->
        <template v-for="(item1, index) in item.children" :key="index">
          <details v-if="item1.children && item1.children.length > 0">
            <summary>
              <span class="f-link" @click="categoryChange(item1.id)">{{
                item1.title
              }}</span>
            </summary>
            <!-- 3 -->
            <template v-for="(item2, index) in item1.children" :key="index">
              <span class="f-link" @click="categoryChange(item2.id)">{{
                item2.title
              }}</span>
              <br />
            </template>
            <!-- 3 -->
          </details>
          <span class="f-link" @click="categoryChange(item1.id)">{{
            item1.title
          }}</span>
          <br />
        </template>
        <!-- 2 -->
      </details>
      <span v-else @click="categoryChange(item.id)">
        {{ item.title }} <br
      /></span>
      <hr />
    </template>
    <!-- 1 -->
    <hr />
    <form class="w-90 margin-a">
      <div
        v-for="(item, index) in homeData.getSizeList"
        :key="index"
        class="d-inline-block"
      >
        <input
          class="margin-l-10"
          type="checkbox"
          :id="'checkbox' + item.id"
          name="vehicle1"
          value="Bike"
        />
        <label :for="'checkbox' + item.id">{{ item.value }}</label>
      </div>
      <hr />
      <label for="title">عنوان:</label><br />
      <input
        type="text"
        id="title"
        name="title"
        style="border: solid #000 1px"
      /><br />
      <hr />
      <input type="checkbox" id="available" name="available" value="HTML" />
      <label for="available">فقط کالاهای موجود</label><br />
      <hr />

      <label for="price1">شروع از قیمت:</label><br />
      <input type="number" id="price1" name="price1" value="0" /><br />
      <label for="price2">بالاترین قیمت:</label><br />
      <input type="number" id="price2" name="price2" value="790000" max="790000" /><br />
      <hr />
      <button type="submit">اعمال فیلتر</button>
    </form>
  </aside>
</template>
<script>
import { useHomeStore } from "@/stores/home";
import { useProductStore } from "@/stores/product";

export default {
  setup() {
    const homeData = useHomeStore();
    const productData = useProductStore();

    function categoryChange(id) {
      productData.filter.category_id = id;
      getProducts();
    }

    function getProducts() {
      productData.getProductFromServer();
    }
    return { homeData, categoryChange };
  },
};
</script>
<style scoped>
.list-side {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  direction: rtl;
  gap: 10px;
}

.list-side details,
.list-side span {
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
  text-align: right;
  padding-right: 20px;
}
</style>
