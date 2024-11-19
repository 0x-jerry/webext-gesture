import App from './App.vue'

export default defineContentScript({
  matches: ['<all_urls>'],
  cssInjectionMode: 'ui',
  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: 'user-gesture',
      position: 'inline',
      anchor: 'body',
      onMount(uiContainer, shadow, shadowHost) {
        shadowHost.style.position = 'fixed'
        shadowHost.style.zIndex = '999999999'

        const rootEl = document.createElement('div')
        uiContainer.appendChild(rootEl)

        const vueApp = createApp(App)

        vueApp.mount(rootEl)
      }
    })

    ui.mount()
  }
})
