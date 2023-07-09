import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@store': path.resolve(__dirname, './src/store'),
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  },
  plugins: [react()]
})
