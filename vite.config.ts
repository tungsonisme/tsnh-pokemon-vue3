import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';
import initializeExposes from './configs/remotes.config';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      federation({
        name: 'remote-app',
        filename: 'remoteEntry.js',
        exposes: initializeExposes(),
        shared: ['vue', 'tsnh-macos-kernel'],
      }),
    ],
  };
});
