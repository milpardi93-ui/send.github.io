import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for deployed site (GitHub Pages). Replace '/w12/' with your repo name if different.
  base: '/w12/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
