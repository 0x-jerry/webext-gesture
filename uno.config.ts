import {
  defineConfig,
  presetIcons,
  presetMini,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [presetMini(), presetIcons()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
  },
})
