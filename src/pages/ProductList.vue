<template>
  <div @click="productData.getProductFromServer(filter)">product-list</div>
  <h4 v-if="loading()" class="margin-t-50 margin-b-50">loading data</h4>
  <template v-if="productData.mainData">
    <div class="d-flex">

      
      <ul class="margin-t-50 flex-1 margin-b-50 margin-a w-95 product-list">
        <li v-for="(product, index) in productData.getProductList" :key="index">
          <!-- {{ product }} -->
          <ProductCard :product="product" @increase-by="(n) => console.log(n)" />
          <hr />
        </li>
      </ul>


      <aside class="list-side" v-if="!homeData.loading">
        <!-- 1 -->
        <template v-for="(item, index) in homeData.getCategories" :key="index">
          <details v-if="item.children && item.children.length > 0">
            <summary>
              <router-link
                class="f-link"
                :to="'product-list?category_id=' + item.id"
                >{{ item.title }}</router-link
              >
            </summary>
            <!-- 2 -->
            <template v-for="(item1, index) in item.children" :key="index">
              <details v-if="item1.children && item1.children.length > 0">
                <summary>{{ item1.title }}</summary>
                <!-- 3 -->
                <template v-for="(item2, index) in item1.children" :key="index">
                  <router-link to="d"> {{ item2.title }} <br /></router-link>
                </template>
                <!-- 3 -->
              </details>
              <router-link v-else to="d"> {{ item1.title }} <br /></router-link>
            </template>
            <!-- 2 -->
          </details>
          <router-link v-else to="d"> {{ item.title }} <br /></router-link>
          <hr />
        </template>
        <!-- 1 -->
      </aside>
    </div>
    <PaginationView
      class="margin-t-50 margin-b-50"
      :page-count="productData.getLastPage"
      :initial-page="productData.getCurrentPage ?? 1"
      v-model="pageNumber"
    />
  </template>
</template>
<script>
import { useProductStore } from "../stores/product";
import { useHomeStore } from "../stores/home";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import ProductCard from "@/components/productList/ProductCard.vue";
import PaginationView from "@/components/shared/PaginationView.vue";

export default {
  components: { ProductCard, PaginationView },
  setup() {
    const route = useRoute();
    const productData = useProductStore();
    const homeData = useHomeStore();

    let filter = ref({
      version: "new",
      sort: "",
      title: "",
      flash_id: "",
      max_price: "",
      min_price: "",
      available: 0,
      category_id: "",
      page: 1,
    });

    productData.getProductFromServer(filter.value);

    // watch(
    //   () => productData.filter.page,
    //   () => {
    //     productData.getProductFromServer();
    //   }
    // );
    function pageChange(i) {
      console.log(i);
    }
    function loading() {
      return productData.loading;
    }
    return { productData, loading, pageChange, homeData, filter };
  },
};
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
}

.list-side {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  direction: rtl;
  gap: 10px;
}

.list-side details,
.list-side a {
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
  text-align: right;
  padding-right: 20px;
}
</style>
