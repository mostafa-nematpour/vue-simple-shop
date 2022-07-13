<template>
  <div @click="productData.getProductFromServer(filter)">product-list</div>
  <h4 v-if="loading()" class="loading">loading data</h4>
  <template v-if="productData.mainData">
    <div class="d-flex">

      <ul class="margin-t-50 flex-1 margin-b-50 margin-a w-95 product-list">
        <li v-for="(product, index) in productData.getProductList" :key="index">
          <!-- {{ product }} -->
          <ProductCard
            :product="product"
            @increase-by="(n) => console.log(n)"
          />
          <hr />
        </li>
      </ul>

      <Filter/>
   
    </div>

    <PaginationView
      class="margin-t-50 margin-b-50"
      :page-count="productData.getLastPage"
      :initial-page="productData.getCurrentPage ?? 1"
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
import Filter from "../components/productList/Filter.vue";

export default {
  components: { ProductCard, PaginationView, Filter },
  setup() {
    const productData = useProductStore();
    const homeData = useHomeStore();

    productData.getProductFromServer();

    function pageChange(i) {
      console.log(i);
    }

    function loading() {
      return productData.loading;
    }

    return { productData, loading, pageChange, homeData };
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

.loading {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #0000007d;
  padding-top: 100px;
  font-size: 3rem;
  color: #fff;
}
</style>
