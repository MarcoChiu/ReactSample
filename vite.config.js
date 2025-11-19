import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  //辨識本地端或是github page上
  base: process.env.NODE_ENV === 'production' ? '/20251226_1/' : '/',
  plugins: [react()],
  //https 需搭配 mkcert localhost
  server: {
    port: 3000,
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem')
    }
  }
})
