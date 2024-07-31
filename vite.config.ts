import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    base: "/",
    plugins: [vue()],
    preview: {
      port: 8081,
      strictPort: true,
    },
    server: {
      port: 8081,
      strictPort: true,
      host: true,
      origin: "http://0.0.0.0:8081",
      hmr:false
    },
  });
}