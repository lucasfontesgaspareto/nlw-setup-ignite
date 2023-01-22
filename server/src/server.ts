declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: number
      JWT_SECRET_KEY: string
      FRONTEND_URL: string
    }
  }
}

import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import env from '@fastify/env'
import { appRoutes } from './routes'

const schema = {
  type: 'object',
  required: ['PORT', 'JWT_SECRET_KEY', 'FRONTEND_URL'],
  properties: {
    PORT: {
      type: 'number',
      default: 3000
    },
    JWT_SECRET_KEY: {
      type: 'string',
      default: 'e33a6e7a-2682-42a3-bf63-c55b4f9daaec'
    },
    FRONTEND_URL: {
      type: 'string',
      default: 'http://127.0.0.1:5173'
    }
  }
}

const options = {
  schema: schema
}

const server = Fastify()

server.register(env, options).then(() => {
  server.register(cors, {
    origin: [server.config.FRONTEND_URL]
  })

  server.register(jwt, {
    secret: server.config.JWT_SECRET_KEY
  })

  server.register(appRoutes)

  server
    .listen({
      host: '0.0.0.0',
      port: server.config.PORT
    })
    .then(() => {
      console.log(`Server running in ${server.config.PORT}`)
    })
})
