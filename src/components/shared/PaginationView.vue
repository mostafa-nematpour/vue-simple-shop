<template>
  <div>PaginationView {{ initialPage }}</div>
  <div class="d-flex gap-10 flex-w-wrap justify-c-center">
    <span v-for="i in pageCount">
      {{ i }}
      <div ></div>
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
<style></style>
