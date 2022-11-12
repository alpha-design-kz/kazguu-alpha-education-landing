<template>
  <star-rating
    :show-rating="false"
    :rating="rating"
    :star-size="starSize"
    :inline="true"
    :rounded-corners="true"
    :star-points="[
      23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31,
      17,
    ]"
    :read-only="readOnly"
  />
</template>
<script>
import starRating from "vue-star-rating";
export default {
  components: {
    starRating,
  },
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    readOnly: {
      type: Boolean,
      default: true,
    },
    starSize: {
      type: Number,
      default: 20,
    },
  },
};
</script>
