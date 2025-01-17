import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Pages from 'vite-plugin-pages';
import SVGR from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), Pages(), SVGR()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
