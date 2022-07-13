<template>
  <div class="d-flex gap-10 flex-w-wrap justify-c-center">
    <span v-for="i in pageCount" :key="i">
      <span v-if="i == initialPage" class="active">
        {{ i }}
      </span>
      <span v-else class="c-pointer" @click="pageChange(i)"> {{ i }}</span>
    </span>
  </div>
</template>
<script>
import { useProductStore } from "@/stores/product";
export default {
  props: {
    pageCount: {
      type: Number,
    },
    initialPage: {
      type: Number,
    },
  },

  setup() {
    const productData = useProductStore();

    function pageChange(i) {
      productData.filter.page = i;
      productData.getProductFromServer();
    }

    return { pageChange };
  },
};
</script>
<style scoped>
.active {
  font-weight: bold;
}
</style>
