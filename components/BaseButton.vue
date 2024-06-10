<template>
  <component :is="tag" class="baseButton">
    <slot></slot>
  </component>
</template>

<script setup>
  const props = defineProps(['tag']);
</script>

<style scoped lang="scss">
.baseButton {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $primaryColor;
  color: white;
  border-radius: 5px;
  padding: 9px 18px 9px 18px;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: $primaryColorSemiDark;
  }
}
</style>