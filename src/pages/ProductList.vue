<template>
  <div>product-list</div>
  <h4 v-if="loading()" class="margin-t-50 margin-b-50">loading data</h4>
  <template v-if="productData.mainData">
    <PaginationView
      :page-count="productData.getLastPage"
      :initial-page="productData.getCurrentPage ?? 1"
    />

    <ul class="margin-a w-95 product-list">
      <li v-for="(product, index) in productData.getProductList" :key="index">
        <!-- {{ product }} -->
        <ProductCard :product="product" />
        <hr />
      </li>
    </ul>
  </template>

  
  <!-- {{ product.getProductList }} -->
</template>
<script>
import { useProductStore } from "../stores/product";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import ProductCard from "@/components/productList/ProductCard.vue";
import PaginationView from "@/components/shared/PaginationView.vue";

export default {
  components: { ProductCard, PaginationView },
  setup() {
    const route = useRoute();
    const productData = useProductStore();
    productData.getProductFromServer();

    watch(
      () => route.query.page,
      () => {
        productData.page =route.query.page;
        productData.getProductFromServer( { page: productData.page });
      }
    );

    function loading() {
      return productData.loading;
    }

    return { productData, loading };
  },
};
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
}
</style>
