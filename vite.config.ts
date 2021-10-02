import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default {
  plugins: [vue()],
  optimizeDeps: {
    include: [
//      '@apollo/client/core',
 //     '@apollo/client/cache'
    ]
  },
  rollupInputOptions: {
    external: [
  //    'react'
    ]
  }
}
