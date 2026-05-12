import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import AutoImport from 'unplugin-auto-import/vite'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),

    tsconfigPaths(),

    svgr(),

    AutoImport({
      imports: [
        "react",
      ],

      dts: true,
    }),

    compression({
      algorithm: 'gzip',
    })
  ],
})
