import { createMemoryClient } from '@tevm/memory-client'
import { createExpressMiddleware } from '@tevm/server'
import express from 'express'
import { createPublicClient, http } from 'viem'

const server = express()

server.use('/', createExpressMiddleware(
  createMemoryClient({})
))

server.listen(7300, () => {
  console.log('Server is running on http://localhost:7300/')
  // testing it's running
  createPublicClient({ transport: http('http://localhost:7300') })
    .getChainId()
    .then(console.log)
    .catch(console.error)
})

