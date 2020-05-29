require('dotenv').config()
console.log(process.env)
export default {
  mode: 'spa',
  env: {
    baseKey: process.env.baseKey,
    baseUrl: process.env.baseUrl
  }
}