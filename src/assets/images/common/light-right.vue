<template>
  <span style="width: 13px; height: 23px; margin-left: 2px">
    <svg
      width="13"
      height="23"
      viewBox="0 0 13 23"
      fill="none"
      :stroke="fill"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L11 11.5L1 22" stroke-width="2" />
    </svg>
  </span>
</template>
<script>
export default {
  props: ["fill"],
};
</script>
