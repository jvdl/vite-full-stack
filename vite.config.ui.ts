import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "APP_");

  return {
    server: {
      port: env.APP_UI_PORT,
      proxy: {
        '/api': {
          target: `http://localhost:${env.APP_API_PORT}`,
          changeOrigin: true,
        },
      },
    },

    plugins: [react()],
  }
});
