import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const server = Fastify()

server.register(cors, {
  origin: ['http://127.0.0.1:5173', 'https://habitto.life']
})

server.register(appRoutes)

server
  .listen({
    port: 4000
  })
  .then(() => {
    console.log('Server running')
  })
