import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteSingleFile(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    proxy: {
      '/lectura': 'http://localhost:1880',
    },
  },
})
