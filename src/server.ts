import { randomUUID } from 'node:crypto'
import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const server = fastify()

server.get('/hello', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: randomUUID(),
      transaction: 'Transação de teste',
      amount: 1000,
    })
    .returning('*')

  return transaction
})

server
  .listen({ port: env.PORT })
  .then(() => {
    console.log(`Server running on port: ${env.PORT}`)
  })
  .catch((error) => {
    console.error('Server error', error)
  })
