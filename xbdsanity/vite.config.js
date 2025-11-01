import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: false, // Disable PostCSS for Sanity
  },
  server: {
    hmr: {
      overlay: false // Disable the error overlay if needed
    }
  }
})