import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Island-3D-Portfolio/' : '',
  plugins: [
    react(),
    tailwindcss()
  ],
  assetsInclude: ['**/*.glb'],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
