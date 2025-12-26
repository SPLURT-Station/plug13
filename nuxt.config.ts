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
    // Private keys (server-side only)
    jwtSecret: process.env.JWT_SECRET || 'super-secret',
    byondSecret: process.env.BYOND_SECRET || 'very-secret',
    discordClientSecret: process.env.DISCORD_CLIENT_SECRET || 'super-secret',
    public: {
      // Public keys (exposed to client)
      version,
      discordClientId: process.env.NUXT_PUBLIC_DISCORD_CLIENT_ID || '1197984072862007417',
      origin: process.env.NUXT_PUBLIC_ORIGIN || 'http://localhost:3000'
    }
  }
})
