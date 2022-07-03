<template>
  <div class="d-flex gap-10 flex-w-wrap justify-c-center">
    <span v-for="i in pageCount">
      <span v-if="i == initialPage" class="active">
        {{ i }}
      </span>
      <span v-else class="c-pointer" @click="setPage(i)"> {{ i }}</span>
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
    function setPage(i) {
      productData.filter.page = i;
    }
    return { setPage };
  },
};
</script>
<style scoped>
.active {
  font-weight: bold;
}
</style>
