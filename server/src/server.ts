import Fastify from 'fastify'

const server = Fastify()

server.get('/', () => {
  return 'Make your habits to reality'
})

server.listen({
  port: 4000
}).then(() => {
  console.log('Server running')
})