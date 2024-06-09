<template>
  <div v-if="isModalActive" class="blackout">
    <div class="modal">
      <SvgoCrossWhite @click="emit('closeModal')" class="cross" filled/>
      <iframe class="youtubeVideo"
              src="https://www.youtube.com/embed/kXYiU_JCYtU?si=j78b2lCOArjDV-f1"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script setup lang="js">
const props = defineProps(['isModalActive']);
const emit = defineEmits(['closeModal'])
</script>

<style scoped lang="scss">
.blackout {
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.79);
}

.modal {
  margin: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cross {
  align-self: end;
  width: 17px;
  height: 17px;
  cursor: pointer;
  margin-bottom: 8px;
}

.youtubeVideo {
  width: 960px;
  height: 532px;
}

@media screen and (max-width: $media-lg) {
  .youtubeVideo {
    width: 672px;
    height: 372px;
  }
}

@media screen and (max-width: $media-md) {
  .youtubeVideo {
    width: 470px;
    height: 260px;
  }
}

@media screen and (max-width: $media-sm) {
  .youtubeVideo {
    width: 329px;
    height: 260px;
  }
}
</style>