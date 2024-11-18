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
    name: 'User Gesture',
    key: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxUGdAdqcYaNSmRWaNww1hBBH2E4vuIZI92rOPm1PqI+WTHl9090Dyw0VE5W+YvXaoluoQQJ6gI2WenMAJweuzrLrtTydTazSRUtbXIfe1I3oMZ0pRw6hKRJP3emCTgoEiJeG1W+U09jAqCbQYtSLp3Fh4netQ/OcLlqCZN07gmS2zCpZHQc47p+YCzGuaS0z30mx4NqumJPAHh9hRi6fPhNonRvOn+8xxJliXq6ZMnRvUNBMGi6TSNboiXk56O3b8BAsYjK23jk9QcDvrFeDTbMiHj0ohXYZ3idGOx5OrdGnWFzsNXo0ZhdHf+bJ+zU0X6fXDgL6e+6jXUwjrNb/EwIDAQAB',
    update_url:
      'https://github.com/0x-jerry/webext-gesture/releases/latest/download/updates.xml'
  }
})
