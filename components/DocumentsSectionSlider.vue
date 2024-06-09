<template>
  <Swiper
      :modules="[SwiperNavigation, SwiperPagination]"
      :slides-per-view="slidesOnScreen"
      :slides-per-group="slidesOnScreen"
      :loop="true"
      :pagination="{ clickable: true, dynamicBullets: true }"
      :navigation="true"
  >
    <SwiperSlide v-for="slide in slides" :key="slide">
      <DocumentsSectionSliderSlide :title="slide.title" :text="slide.text"/>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="js">
const slides = [
  {
    title: 'Лицензионный договор',
    text: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.',
    url: '/license',
  },
  {
    title: 'Политика обработки персональных данных',
    text: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
    url: '/policy',
  },
  {
    title: 'Информация об оплате',
    text: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
    url: '/payment'
  },
  {
    title: 'Лицензионный договор',
    text: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.',
    url: '/license',
  },
  {
    title: 'Политика обработки персональных данных',
    text: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
    url: '/policy',
  },
  {
    title: 'Информация об оплате',
    text: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
    url: '/payment'
  },
]

let slidesOnScreen = ref(3);

function handleResize() {
  if (window.innerWidth <= 768) {
    slidesOnScreen.value = 1;
    return;
  }
  if (window.innerWidth <= 1280) {
    slidesOnScreen.value = 2;
    return;
  }
  slidesOnScreen.value = 3;
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
})
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 510px;
}

.swiper-pagination {
  bottom: 0;
}

.swiper-button-prev {
  left: 0;
  z-index: 2;

  &:before {
    content: "";
    left: -30px;
    z-index: 1;
    position: absolute;
    width: 70px;
    height: 70px;
    background-color: #D5DDEB;
    border-radius: 99px;
    opacity: 0.8;
  }

  &:after {
    font-size: 27px;
    color: white;
    z-index: 100;
  }
}

.swiper-button-next {
  right: 0;
  z-index: 2;

  &:before {
    content: "";
    right: -30px;
    z-index: 1;
    position: absolute;
    width: 70px;
    height: 70px;
    background-color: #D5DDEB;
    border-radius: 99px;
    opacity: 0.8;
  }

  &:after {
    font-size: 27px;
    color: white;
    z-index: 100;
  }
}

@media screen and (max-width: $media-xl) {
  .swiper {
    width: 700px;
  }
}

@media screen and (max-width: $media-md) {
  .swiper {
    width: 340px;
  }
}
</style>