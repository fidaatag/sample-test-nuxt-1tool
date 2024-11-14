// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    // '@sidebase/nuxt-auth',
  ],


  // auth: {
  //   globalAppMiddleware: true,
  //   baseURL: process.env.NUXT_PUBLIC_API_URL + '/auth',
  //   provider: {
  //     type: 'local',
  //     endpoints: {
  //       signIn: { path: '/user', method: 'post' },
  //     },
  //     token: {
  //       signInResponseTokenPointer: '/api_token',
  //       type: 'Bearer',
  //       cookieName: 'auth.token',
  //       headerName: 'Authorization',
  //       maxAgeInSeconds: 1800,
  //     },
  //     pages: {
  //       login: '/login'
  //     },
  //   },
  // },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    }
  }

})