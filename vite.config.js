import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// SINGLE=1 npm run build  -> gộp thành 1 file HTML (dùng để xem thử / gửi demo)
// npm run build           -> build bình thường cho Netlify
export default defineConfig({
  plugins: [react(), ...(process.env.SINGLE ? [viteSingleFile()] : [])],
})
