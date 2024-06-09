<template>
  <form novalidate @submit.prevent="onSubmit" class="formPenalty">
    <div class="row">
      <div class="inputWrapper">
        <label class="label">Номер автомобиля</label>
        <input type="text" class="input" :class="{'inputError': isCarNumberError}" v-model="carNumberInput" name="carNumber">
      </div>
      <div class="inputWrapper regionWrapper">
        <label class="label">Регион</label>
        <input type="text" class="input" :class="{'inputError': isRegionError}" v-model="regionInput" name="region">
      </div>
    </div>
    <div class="row">
      <div class="inputWrapper">
        <label class="label">Свидетельство о регистрации ТС</label>
        <input type="text" class="input" :class="{'inputError': isTsRegistrationError}" v-model="tsRegistrationInput" name="tsRegistration">
      </div>
    </div>
    <div class="row" v-if="formResponseText">
      <div :class="{'formResponseText_success': isFormDataSent, 'formResponseText_error': !isFormDataSent}">{{formResponseText}}</div>
    </div>
    <div class="row">
      <BaseButton :tag="'button'" class="buttonVerifyPenalties">Проверить штрафы</BaseButton>
      <FormPenaltyAboutService/>
    </div>
    <div class="row policyText">
      Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту
    </div>
  </form>
</template>

<script setup lang="js">
function onSubmit() {
  isCarNumberError.value = carNumberInput.value === '';
  isRegionError.value = regionInput.value === '';
  isTsRegistrationError.value = tsRegistrationInput.value === '';

  if (!(isCarNumberError.value || isRegionError.value || isTsRegistrationError.value)) {
    isFormDataSent.value = true;
    formResponseText.value = 'Данные успешно отправлены!'
  } else {
    isFormDataSent.value = false;
    formResponseText.value = 'Пожалуйста заполните все поля'
  }
}

// Inputs v-model
let carNumberInput = ref('');
let regionInput = ref('');
let tsRegistrationInput = ref('');

// Статусы ошибок
let isCarNumberError = ref(false);
let isRegionError = ref(false);
let isTsRegistrationError = ref(false);

// Переменные состояния ответа формы
let formResponseText = ref('');
let isFormDataSent = ref(false);
</script>

<style scoped lang="scss">
.formPenalty {
  margin-top: 25px;
}

.row {
  display: flex;
  margin-bottom: 16px;
}

.inputWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.label {
  font-size: 12px;
  line-height: 14.4px;
  color: black;
  padding-bottom: 5px;
}

.regionWrapper {
  margin-left: 30px;
}

.input {
  border: 1px solid rgba(188, 188, 188, 1);
  border-radius: 5px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
}

.inputError {
  border: 1px solid red !important;
}

.buttonVerifyPenalties {
  height: 45px;
  margin-right: 21px;
}

.policyText {
  color: rgba(143, 143, 143, 1);
  font-size: 13px;
  line-height: 15.6px;
}

.formResponseText_success {
  color: green;
}

.formResponseText_error {
  color: red;
}

@media screen and (max-width: $media-xl) {
  .buttonVerifyPenalties {
    width: 100%;
    margin-right: 30px;
  }
}

@media screen and (max-width: $media-md) {
  .buttonVerifyPenalties {
    margin-right: 10px;
  }
  .regionWrapper {
    margin-left: 10px;
  }
}

@media screen and (max-width: $media-sm) {
  .row {
    flex-direction: column;
  }

  .regionWrapper {
    margin-top: 16px;
    margin-left: 0;
  }

  .buttonVerifyPenalties {
    margin-right: 0;
    margin-bottom: 16px;
  }
}
</style>