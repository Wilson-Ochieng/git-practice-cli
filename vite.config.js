import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),

//Change the base path to your repository name
  base:'/git-practice-cli/',
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}