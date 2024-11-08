import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import VitePluginInjectPreload from 'vite-plugin-inject-preload'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    // https://www.npmjs.com/package/webpack-font-preload-plugin?activeTab=readme -> webpack-font-preload-plugin 패키지 다운
    // https://sanbondeveloper.tistory.com/124 -> 참고하여 폰트 프리로드 설정
    VitePluginInjectPreload({
      files: [
        {
          match: /\b\w+\.woff2\b/,
          attributes: {
            rel: 'preload',
            type: 'font/woff2',
            as: 'font',
            crossorigin: 'anonymous',
          },
        },
      ],
      injectTo: 'head-prepend',
    }),
  ],
})
