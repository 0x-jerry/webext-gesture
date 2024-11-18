import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-vue'],
  runner: {
    chromiumProfile: '.profile/chrome',
    keepProfileChanges: true,
    startUrls: ['https://example.com']
  },
  manifest: {
    name: 'User Gesture'
  }
})
