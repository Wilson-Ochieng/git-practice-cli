import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),


  base:'/git-practice-cli/',
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}