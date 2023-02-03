// vite.config.ts
import { defineConfig } from "file:///D:/muxihuakai/react-about/demo3/node_modules/.pnpm/vite@4.0.4_@types+node@18.11.18/node_modules/vite/dist/node/index.js";
import react from "file:///D:/muxihuakai/react-about/demo3/node_modules/.pnpm/@vitejs+plugin-react@3.0.1_vite@4.0.4/node_modules/@vitejs/plugin-react/dist/index.mjs";
import UnoCSS from "file:///D:/muxihuakai/react-about/demo3/node_modules/.pnpm/unocss@0.48.4_vite@4.0.4/node_modules/unocss/dist/vite.mjs";
import { presetAttributify, presetUno } from "file:///D:/muxihuakai/react-about/demo3/node_modules/.pnpm/unocss@0.48.4_vite@4.0.4/node_modules/unocss/dist/index.mjs";
import transformerAttributifyJsx from "file:///D:/muxihuakai/react-about/demo3/node_modules/.pnpm/@unocss+transformer-attributify-jsx@0.48.4/node_modules/@unocss/transformer-attributify-jsx/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\muxihuakai\\react-about\\demo3";
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__vite_injected_original_dirname, "src") },
      { find: "components", replacement: resolve(__vite_injected_original_dirname, "src/components") }
    ]
  },
  plugins: [
    UnoCSS({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno()
      ],
      transformers: [
        transformerAttributifyJsx()
        // <--
      ],
      rules: [
        // ['text-e']
      ]
    }),
    react()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxtdXhpaHVha2FpXFxcXHJlYWN0LWFib3V0XFxcXGRlbW8zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxtdXhpaHVha2FpXFxcXHJlYWN0LWFib3V0XFxcXGRlbW8zXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9tdXhpaHVha2FpL3JlYWN0LWFib3V0L2RlbW8zL3ZpdGUuY29uZmlnLnRzXCI7LyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xuLypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiB6aGFvaGFvaHVhQGJ5dGVncmVlbi5jblxuICogQERhdGU6IDIwMjMtMDEtMTYgMTY6NTI6MzdcbiAqIEBMYXN0RWRpdG9yczogemhhb2hhb2h1YUBieXRlZ3JlZW4uY25cbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjMtMDEtMzEgMDk6MjA6MDVcbiAqL1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgeyBwcmVzZXRBdHRyaWJ1dGlmeSxwcmVzZXRVbm8gfSBmcm9tIFwidW5vY3NzXCJcbmltcG9ydCB0cmFuc2Zvcm1lckF0dHJpYnV0aWZ5SnN4IGZyb20gJ0B1bm9jc3MvdHJhbnNmb3JtZXItYXR0cmlidXRpZnktanN4J1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICByZXNvbHZlOntcbiAgICAgICAgYWxpYXM6W1xuICAgICAgICAgICAgeyBmaW5kOiAnQCcsIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpIH0sXG4gICAgICAgICAgICB7IGZpbmQ6ICdjb21wb25lbnRzJywgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMnKX1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgICBVbm9DU1Moe1xuICAgICAgICAgICAgcHJlc2V0czogW1xuICAgICAgICAgICAgICAgIHByZXNldEF0dHJpYnV0aWZ5KHsgLyogcHJlc2V0IG9wdGlvbnMgKi99KSxcbiAgICAgICAgICAgICAgICBwcmVzZXRVbm8oKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0cmFuc2Zvcm1lcnM6IFtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lckF0dHJpYnV0aWZ5SnN4KCksIC8vIDwtLVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgLy8gWyd0ZXh0LWUnXVxuICAgICAgICAgICAgXVxuICAgICAgICB9KSxcbiAgICAgICAgcmVhY3QoKSxcbiAgICBdXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQVFBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFDbkIsU0FBUyxtQkFBa0IsaUJBQWlCO0FBQzVDLE9BQU8sK0JBQStCO0FBQ3RDLFNBQVMsZUFBZTtBQWJ4QixJQUFNLG1DQUFtQztBQWdCekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUTtBQUFBLElBQ0osT0FBTTtBQUFBLE1BQ0YsRUFBRSxNQUFNLEtBQUssYUFBYSxRQUFRLGtDQUFXLEtBQUssRUFBRTtBQUFBLE1BQ3BELEVBQUUsTUFBTSxjQUFjLGFBQWEsUUFBUSxrQ0FBVyxnQkFBZ0IsRUFBQztBQUFBLElBQzNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsU0FBUztBQUFBLFFBQ0wsa0JBQWtCO0FBQUE7QUFBQSxRQUFzQixDQUFDO0FBQUEsUUFDekMsVUFBVTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLGNBQWM7QUFBQSxRQUNWLDBCQUEwQjtBQUFBO0FBQUEsTUFDOUI7QUFBQSxNQUNBLE9BQU87QUFBQTtBQUFBLE1BRVA7QUFBQSxJQUNKLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxFQUNWO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
