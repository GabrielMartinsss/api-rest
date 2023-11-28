import { server } from './app'
import { env } from './env'

server
  .listen({
    port: env.PORT,
    host: 'RENDER' in process.env ? '0.0.0.0' : 'localhost',
  })
  .then(() => {
    console.log(`Server running on port: ${env.PORT}`)
  })
  .catch((error) => {
    console.error('Server error', error)
  })
