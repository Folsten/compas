<template>
  <TheHeaderMobileMenu @closeMobileMenu="closeMobileMenu" :isMobileMenuActive="isMobileMenuActive"/>
  <header class="appHeader">
    <div class="container">
      <div class="leftWrapper">
        <NuxtLink to="/">
          <SvgoLogo class="logo" filled/>
        </NuxtLink>
        <nav class="menu">
          <NuxtLink to="/tariffs" class="menuItem">Тарифы</NuxtLink>
          <NuxtLink to="/contacts" class="menuItem">Контакты</NuxtLink>
        </nav>
      </div>
      <div class="rightWrapper">
        <div class="phoneNumber">+7 495 118-44-22</div>
        <div class="loginButton">Вход</div>
        <BaseButton class="registerButton" :tag="'button'">Регистрация</BaseButton>
        <SvgoBurgerMenu @click="isMobileMenuActive = true" class="burgerMenu"/>
      </div>
    </div>
  </header>
</template>

<script setup>
let isMobileMenuActive = ref(false);

function closeMobileMenu() {
  isMobileMenuActive.value = false;
}
</script>

<style scoped lang="scss">
.appHeader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: linear-gradient(90deg, #000000 30%, #1c2734 73%);
}

.container {
  display: flex;
  justify-content: space-between;
}

.leftWrapper {
  display: flex;
  align-items: center;
}

.logo {
  width: 119px;
  height: 26px;
  margin-bottom: 0;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0 0 1px 0;
  padding: 0;
}

.menuItem {
  color: white;
  margin-left: 30px;
  font-size: 18px;

  &:hover {
    color: rgb(245, 245, 245);
  }
}

.rightWrapper {
  display: flex;
  align-items: center;
}

.phoneNumber {
  color: white;
  font-size: 18px;
  font-weight: 700;
  padding-right: 30px;
}

.loginButton {
  color: white;
  padding-right: 30px;
  cursor: pointer;

  &:hover {
    color: rgb(245, 245, 245);
  }
}

.burgerMenu {
  display: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
}

@media screen and (max-width: $media-md) {
  .menu {
    display: none;
  }
  .phoneNumber {
    display: none;
  }
  .loginButton {
    display: none;
  }
  .registerButton {
    display: none;
  }
  .burgerMenu {
    display: flex;
  }
}
</style>
