import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User/org GitHub Pages site (chenchugokuljangam13.github.io) is served from the
// domain root, so base stays '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
