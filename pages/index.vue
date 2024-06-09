<template>
  <WelcomeSection class="welcomeSection" />
  <BenefitsSection class="benefitsSection" />
  <DocumentsSection class="documentsSection" />
</template>

<style scoped lang="scss">
  .welcomeSection {
    margin-top: 79px;
  }
  .benefitsSection {
    margin-top: 100px;
  }
  .documentsSection {
    margin-top: 85px;
  }

  @media screen and (max-width: $media-md) {
    .welcomeSection {
      margin-top: 30px;
    }
    .benefitsSection {
      margin-top: 30px;
    }
    .documentsSection {
      margin-top: 30px;
    }
  }
</style>
<script setup lang="ts">
import DocumentsSection from "~/components/DocumentsSection.vue";
</script>