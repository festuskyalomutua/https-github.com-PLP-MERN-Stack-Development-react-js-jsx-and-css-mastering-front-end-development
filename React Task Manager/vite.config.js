import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 VERY IMPORTANT: this must match your GitHub repo name
  base: '/react-js-jsx-and-css-mastering-front-end-development-festuskyalomutua/',
})
