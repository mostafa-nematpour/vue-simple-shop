<template>
  <div class="d-flex gap-10 flex-w-wrap justify-c-center">
    <span v-for="i in pageCount">
      <span v-if="i == initialPage" class="active">
        {{ i }}
      </span>
      <router-link v-else :to="'/product-list?page=' + i"> {{ i }}</router-link>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    pageCount: {
      type: Number,
    },
    initialPage: {
      type: Number,
    },
  },
};
</script>
<style scoped>
.active {
  font-weight: bold;
}
</style>
