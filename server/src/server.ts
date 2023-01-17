import { PrismaClient } from '@prisma/client'
import Fastify from 'fastify'
import cors from '@fastify/cors'

const server = Fastify()
const prisma = new PrismaClient()

server.register(cors, {
  origin: ['http://localhost:3000', 'https://habitto.life']
})

server.get('/', () => {
  return 'Make your habits to reality'
})

server.get('/habits', async () => {
  const habits = await prisma.habit.findMany()
  
  return habits
})

server.listen({
  port: 4000
}).then(() => {
  console.log('Server running')
})