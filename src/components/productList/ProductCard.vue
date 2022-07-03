<template>
  <article v-if="product">

    <img
      v-if="product.major_image && product.major_image.url"
      :src="product.major_image.conversions.sm"
      :alt="product.title ?? 'product image'"
      class="w-100"
    />
    <img
      v-else-if="product.images && product.images[0] && product.images[0].url"
      :src="product.images[0].url"
      :alt="product.title ?? 'product image'"
      class="w-100"
    />

    <img v-else src="/assets/images/siteImages/notfound.png" alt="not found" class="w-100" />

    <br />
    {{ product.title }}
  </article>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style></style>
