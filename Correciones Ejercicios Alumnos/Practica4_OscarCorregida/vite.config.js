import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslintPlugin from 'vite-plugin-eslint'; // Importar el plugin
import { loadESLint } from 'eslint'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()]
})
