// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/devtools',
  ],
  typescript: {
    typeCheck: true,
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage',
  },
  runtimeConfig: {
    apiSecret: 'your-api-secret',
    public: {
      apiBase: '/api',
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
});
