<template>
  <div>product-list</div>
  <template v-if="loading()">
    {{ product.getLastPage }}
    <PaginationView
      :page-count="product.getLastPage"
      :initial-page="product.getCurrentPage ?? 1"
      :page-range="3"
      :margin-pages="1"
      :click-handler="2"
      :prev-text="'>'"
      :next-text="'<'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    />

    <ul class="margin-a w-95 product-list">
      <li v-for="(product, index) in product.getProductList" :key="index">
        <!-- {{ product }} -->
        <ProductCard :product="product" />
        <hr />
      </li>
    </ul>
  </template>

  <h4 v-else class="margin-t-50">loading data</h4>
  <!-- {{ product.getProductList }} -->
</template>
<script>
import { useProductStore } from "../stores/product";
import ProductCard from "@/components/productList/ProductCard.vue";
import PaginationView from "@/components/shared/PaginationView.vue";

export default {
  components: { ProductCard, PaginationView },
  setup() {
    const product = useProductStore();

    product.getProductFromServer();

    function loading() {
      return product.getProductList ? true : false;
    }

    return { product, loading };
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
