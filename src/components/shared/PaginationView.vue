<template>
  <div class="d-flex gap-10 flex-w-wrap justify-c-center">
    <span v-for="i in pageCount">
      <span v-if="i == initialPage" class="active">
        {{ i }}
      </span>
      <span v-else class="c-pointer" @click="$emit('increaseBy', 1)"> {{ i }}</span>
    </span>
  </div>
</template>
<script>
import { useProductStore } from "@/stores/product";
let self;
export default {
  props: {
    pageCount: {
      type: Number,
    },
    initialPage: {
      type: Number,
    },
  },
  created() {
    self = this;
  },
  setup() {
    const productData = useProductStore();
    function setPage(i) {
      productData.filter.page = i;
    }
    function numberUpdate(i) {
      self.$emit("page", i);
    }
    return { setPage, numberUpdate };
  },
};
</script>
<style scoped>
.active {
  font-weight: bold;
}
</style>
