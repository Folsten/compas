<template>
  <div class="benefit">
    <div class="localContainer">
      <img :src="iconSrc" alt="benefit present icon">
      <div class="textWrapper">
        <span class="title">{{ title }}</span>
        <p class="paragraph">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
const props = defineProps(['iconSrc', 'title', 'text']);
</script>

<style scoped lang="scss">
.benefit {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(251, 252, 253, 1);
  border: 1px solid rgba(238, 239, 241, 1);
  border-radius: 10px;
}

.localContainer {
  display: flex;
  align-items: center;
  margin: 24px 20px 24px 20px;
}

.textWrapper {
  display: flex;
  margin-left: 16px;
  flex-direction: column;
}

.title {
  color: rgba(18, 83, 162, 1);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.paragraph {
  font-size: 15px;
  line-height: 18px;
}
</style>