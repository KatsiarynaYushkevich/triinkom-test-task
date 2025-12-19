import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
});
