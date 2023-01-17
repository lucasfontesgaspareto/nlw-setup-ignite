import { PrismaClient } from '@prisma/client'
import Fastify from 'fastify'
import cors from '@fastify/cors'

const server = Fastify()
const prisma = new PrismaClient()

server.register(cors, {
  origin: ['http://127.0.0.1:5173', 'https://habitto.life']
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