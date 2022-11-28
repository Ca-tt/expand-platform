import vitePugPlugin from 'vite-plugin-pug-transformer';
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePugPlugin(), vue()],
})
