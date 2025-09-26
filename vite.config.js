// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/Personal-Profile/',   // ← REQUIRED for GitHub Pages (project repo)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})


