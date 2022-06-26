<template>
  <div>product-list</div>
  <!-- {{ product.getProductList }} -->
  <ul class="margin-a w-95 product-list">
    <li v-for="(product, index) in product.getProductList" :key="index">
      <!-- {{ product }} -->
      <ProductCard :product="product" />
      <hr />
    </li>
  </ul>
</template>
<script>
import { useProductStore } from "../stores/product";
import ProductCard from "@/components/productList/ProductCard.vue";
export default {
  components: { ProductCard },
  setup() {
    const product = useProductStore();
    action();
    function action() {
      product.getProductFromServer();
    }

    return { product };
  },
};
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}
</style>
