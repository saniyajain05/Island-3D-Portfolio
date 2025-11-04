import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Island-3D-Portfolio/' : '',
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      'react-slick': path.resolve(__dirname, 'node_modules/react-slick'),
      'slick-carousel': path.resolve(__dirname, 'node_modules/slick-carousel'),
    },
  },
  optimizeDeps: {
    include: ['react-slick', 'slick-carousel'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
