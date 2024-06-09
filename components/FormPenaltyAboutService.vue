<template>
  <div @click="isModalActive = true" class="aboutService">
    <SvgoYoutube class="youtubeIcon" filled/>
    <span class="buttonText">О сервисе</span>
    <span class="buttonTime">(1 мин. 20 сек)</span>
  </div>
  <LazyFormPenaltyAboutServiceModal :isModalActive="isModalActive" @closeModal="closeModal" />
</template>

<script setup lang="js">
let isModalActive = ref(false)

function closeModal() {
  isModalActive.value = false;
}
</script>

<style lang="scss">
.aboutService {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background: white;
  height: 45px;
  border: 1px solid $primaryColor;
  border-radius: 5px;
  padding: 9px 18px 9px 18px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: rgba(245, 245, 245);
  }
}

.youtubeIcon {
  width: 32.25px;
  height: 23px;
  margin-right: 5.6px;
}

.buttonText {
  font-size: 18px;
  margin-right: 4px;
}

.buttonTime {
  color: rgba(18, 83, 162, 1);
  font-size: 15px;
}

@media screen and (max-width: $media-xl) {
  .aboutService {
    width: 100%;
  }
}

@media screen and (max-width: $media-md) {
  .buttonTime {
    display: none;
  }
}
</style>