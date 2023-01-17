import { FastifyInstance } from 'fastify'
import { prisma } from './lib/prisma'

export async function appRoutes(server: FastifyInstance) {
  server.get('/habits', async () => {
    const habits = await prisma.habit.findMany()
    return habits
  })

  server.get('*', () => {
    return 'Make your habits to reality'
  })
}
