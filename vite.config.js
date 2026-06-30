import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      // Esta é a linha mágica que libera o popup do Google falar com o seu localhost
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups"
    }
  }
})