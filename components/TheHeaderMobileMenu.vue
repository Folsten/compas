<template>
  <div v-if="isMobileMenuActive" class="blackout"></div>
  <div class="mobileMenu" :class="{ mobileMenu_active: isMobileMenuActive }">
    <SvgoCrossBlack
        @click="emit('closeMobileMenu')"
        class="mobileMenu__cross"
    />
    <div class="mobileMenu__container">
      <nav class="mobileMenu__list">
        <NuxtLink to="tariffs" @click="emit('closeMobileMenu')">Тарифы</NuxtLink>
        <NuxtLink to="contacts" @click="emit('closeMobileMenu')">Контакты</NuxtLink>
        <a href="#">Вход</a>
        <a href="#">Регистрация</a>
        <a href="#">+7 495 118-44-22</a>
      </nav>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['isMobileMenuActive']);
const emit = defineEmits(['closeMobileMenu'])
</script>

<style>
.mobileMenu {
  z-index: 10;
  position: fixed;
  display: flex;
  width: 250px;
  right: -250px;
  background-color: white;
  height: 100vh;
  transition: 0.3s;
}

.mobileMenu__container {
  margin: 60px 20px 20px 20px;
}

.mobileMenu__cross {
  position: absolute;
  cursor: pointer;
  top: 12px;
  right: 20px;
  width: 28px;
  height: 28px;
}

.mobileMenu__list {
  list-style: none;
  display: flex;
  flex-direction: column;

  & > * {
    padding-top: 10px;
  }
}

.mobileMenu_active {
  right: 0;
}

.blackout {
  z-index: 5;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.79);
  transition: 0.1s;
}
</style>
