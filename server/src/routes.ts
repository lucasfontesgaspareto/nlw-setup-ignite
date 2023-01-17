import { FastifyInstance } from 'fastify'
import { prisma } from './lib/prisma'
import { z } from 'zod'
import dayjs from 'dayjs'

export async function appRoutes(server: FastifyInstance) {
  server.post('/habits', async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6))
    })

    const { title, weekDays } = createHabitBody.parse(request.body)

    const today = dayjs().startOf('day').toDate()

    await prisma.habit.create({
      data: {
        title,
        weekDays: {
          create: weekDays.map((day) => ({
            week_day: day
          }))
        },
        created_at: today
      }
    })
  })

  server.get('/habits', async () => {
    const habits = await prisma.habit.findMany()
    return habits
  })

  server.get('*', () => {
    return 'Make your habits to reality'
  })
}
