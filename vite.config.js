
import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),

  // Change the base path depending on the deployment platform
  base: process.env.GITHUB_ACTIONS ? '/git-practice-cli/' : '/',

  build: {
    outDir: '../dist'
  },

  server: {
    port: 8080
  }
}
