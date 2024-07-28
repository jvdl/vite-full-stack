import { defineConfig, loadEnv } from 'vite'
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "APP_");

  return {
    server: {
      port: env.APP_API_PORT
    },
    plugins: [
      ...VitePluginNode({
        adapter: 'fastify',
        appPath: './api/app.ts',
        exportName: 'viteNodeApp',
        initAppOnBoot: false,
        tsCompiler: 'esbuild',
        swcOptions: {}
      })
    ],

  }
})
