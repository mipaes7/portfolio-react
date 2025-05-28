import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const myRepo = 'portfolio-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `${myRepo}`
})
