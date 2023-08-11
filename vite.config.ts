import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config()

//const { REACT_APP_SERVER_URL } = process.env

const server = 'https://project-management-server-rose.vercel.app'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/server': {
        target: server,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, ''),
      },
    },
  },
})
