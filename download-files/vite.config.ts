import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cee_hatinators_za/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});