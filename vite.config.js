import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON=="true" ? './' : "",
  plugins: [vue()],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      "buffer": path.resolve(__dirname, './node_modules/buffer')
    }
  }
})

