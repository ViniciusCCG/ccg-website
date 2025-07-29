import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { copyFileSync } from 'fs';

// Plugin to copy sitemap.xml from src/static to dist/
function copySitemap() {
  return {
    name: 'copy-sitemap',
    closeBundle() {
      copyFileSync(
        path.resolve(__dirname, 'src/static/sitemap.txt.xml'),
        path.resolve(__dirname, 'dist/sitemap.xml')
      );
    }
  };
}

export default defineConfig({
  plugins: [react(), copySitemap()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
