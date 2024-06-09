<template>
  <section class="welcomeSection">
    <div class="container">
      <div class="formWrapper">
        <BaseH1Title class="h1">Проверьте штрафы и зарегистрируйтесь в 1 клик</BaseH1Title>
        <FormPenalty/>
      </div>
      <picture class="image">
        <source srcset="~/assets/images/PC.webp" type="image/webp">
        <img src="~/assets/images/PC.png" alt="personal computer">
      </picture>
    </div>
  </section>
</template>

<style scoped lang="scss">
.welcomeSection {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
}

.formWrapper {
  display: flex;
  flex-direction: column;
}

.image {
  margin-right: 21px;
  margin-left: 40px;

  img {
    width: 532px;
    height: 335px;
  }
}

@media screen and (max-width: $media-xl) {
  .image {
    display: none;
  }
  .container {
    justify-content: center;
  }
  .formWrapper h1 {
    text-align: center;
  }
}

@media screen and (max-width: $media-sm) {
  .h1 {
    font-size: 32px;
    line-height: 40px;
  }
}
</style>