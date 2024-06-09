// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;'
        }
      }
    }
  },
  devtools: { enabled: true },
  modules: ["nuxt-svgo", "nuxt-swiper"],
  css: ["~/assets/scss/normalize.scss", "~/assets/scss/basic.scss"],
  ssr: false,
  pages: true,
});
