<template>
  <div class="breadCrumbs">
    <span class="text">Главная страница</span>
    <div class="separator"></div>
    <span class="text">Документы</span>
    <div class="separator"></div>
    <span class="text selected">Лицензионный договор</span>
  </div>
</template>

<script setup lang="js">
</script>

<style scoped lang="scss">
.breadCrumbs {
  display: flex;
  align-items: center;
}

.text {
  font-size: 13px;
}

.selected {
  color: rgba(143, 143, 143, 1);
}

.separator {
  background-color: black;
  width: 5px;
  height: 5px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 99px;
}

@media screen and (max-width: $media-sm) {
  .text {
    font-size: 12px;
  }

  .separator {
    margin-left: 5px;
    margin-right: 5px;
    width: 3px;
    height: 3px;
  }
}
</style>