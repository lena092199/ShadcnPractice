import path from 'node:path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import RekaResolver from 'reka-ui/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss(), svgLoader(),
  Components({
    resolvers: [RekaResolver()],
  }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
