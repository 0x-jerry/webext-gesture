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
    key: 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCE6y8dU7nMQ9gmEboygkgSAJ9N3Hdfzxn2lXDTWKkJyRmvtrNYn/VMcklOtMLxE7Hp6eO9wEIfqQyP7KwhZrZNuUaezBwKiyw6Cn0AiR+SOezHNkr1EenmnFohqbOeYp0R2QqhtImr+gc/i/1AVGlGN/phAvIka33PywE1SR5SW9nZvzQvlFqH2CTMcJBY6vCjfZy+Xul4+3GIFW6Q9oZIMSs+0CINk9OC906Rse/ZgMLAY1KezLFyza0X5q1Jxs7tu16KjTT2xtY6um3rY5DA1SmUtMIVWqst2UA6D1uqRpevQ85TX+HZgGGOGYWP8GTsmmhoIHdn5avO2H7E0b5z'
  }
})
