<template>
  <div class="slide">
    <div class="wrapper">
      <div class="title">
        {{ title }}
      </div>
      <div class="text">
        {{ text }}
      </div>
      <BaseButton class="redirectButton" :tag="NuxtLink" :to="url">Перейти</BaseButton>
    </div>
  </div>
</template>

<script setup lang="js">
import NuxtLink from "#app/components/nuxt-link.js";
const props = defineProps(['title', 'text', 'url'])
</script>

<style scoped lang="scss">
.slide {
  margin: 22px;
  display: flex;
  justify-content: center;
  height: 450px;
  border: 1px solid rgba(238, 239, 241, 1);
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
}

.wrapper {
  margin: 25px;
  position: relative;
}

.title {
  color: $primaryColorDark;
  font-size: 31px;
  font-weight: 700;
  line-height: 37.2px;
}

.text {
  margin-top: 15px;
  font-size: 18px;
  line-height: 21.6px;
}

.redirectButton {
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
}
</style>