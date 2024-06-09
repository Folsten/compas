<template>
  <div class="pageWrapper" id="pageWrapper">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  .pageWrapper {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
  }
</style>