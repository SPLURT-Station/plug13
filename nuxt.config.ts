import { version } from './package.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2023-12-19',
  devtools: { enabled: true },
  css: ['~/assets/css/global.scss'],
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  runtimeConfig: {
    jwtSecret: 'super-secret',
    byondSecret: 'very-secret',
    discordClientSecret: 'SLf5JaMDnmALHS6dEv2HyfuKvYYO7ytb',
    public: {
      version,
      discordClientId: '913199226173947966',
      origin: 'http://localhost:3000'
    }
  }
})
