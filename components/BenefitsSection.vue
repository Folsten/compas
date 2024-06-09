<template>
  <section class="benefitsSection">
    <div class="container">
      <BaseH2Title class="h2">Плюсы использования сервиса «Компас» для анализа штрафов</BaseH2Title>
      <div class="benefitsWrapper">
        <BenefitsSectionBenefit v-for="benefit in benefits" :key="benefit.title" :icon-src="benefit.iconSrc"
                                :title="benefit.title" :text="benefit.text"></BenefitsSectionBenefit>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
const benefits = ref([
  {
    iconSrc: getIconSrc('infinity'),
    title: 'Неограниченый автопарк',
    text: 'Можно добавить неограниченное кол-во машин и водителей',
  },
  {
    iconSrc: getIconSrc('map'),
    title: 'Сокращение затрат до 50%',
    text: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке',
  },
  {
    iconSrc: getIconSrc('shield'),
    title: 'Безопасность',
    text: 'Данные передаются в зашифрованном виде, они доступны только получателю',
  },
  {
    iconSrc: getIconSrc('bell'),
    title: 'Уведомление о погашении',
    text: 'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП',
  },
  {
    iconSrc: getIconSrc('receipt'),
    title: 'Квитанция об оплате',
    text: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.',
  },
  {
    iconSrc: getIconSrc('timer'),
    title: 'Все история сохраняется по каждой машине',
    text: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам'
  },
]);

function getIconSrc(iconName) {
  return new URL(`../assets/icons/${iconName}.svg`, import.meta.url).href;
}
</script>

<style scoped lang="scss">
.benefitsSection {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.h2 {
  text-align: center;
}

.benefitsWrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 151px 174px;
  grid-column-gap: 35px;
  grid-row-gap: 35px;
  margin-top: 33px;
}

@media screen and (max-width: $media-xl) {
  .benefitsWrapper {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 151px);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}

@media screen and (max-width: $media-md) {
  .benefitsWrapper {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 151px);
    grid-column-gap: 20px;
  }
}
</style>