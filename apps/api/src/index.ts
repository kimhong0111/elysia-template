import { Elysia, t } from 'elysia'
import { openapi, fromTypes } from '@elysiajs/openapi'
import { cors } from '@elysiajs/cors'

import { otel } from '@api/modules'
import { insertMessage, getMessages } from '@api/db'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const clients = new Set<any>()

export const app = new Elysia()
  .use(
    openapi({
      references: fromTypes(
        process.env.NODE_ENV === 'production'
          ? 'dist/src/index.d.ts'
          : 'src/index.ts'
      )
    })
  )
  .use(otel)
  .use(
    cors({
      origin: 'http://localhost:3000'
    })
  )
  .ws('/ws', {
    message(ws, message) {
      const content = String(message)
      insertMessage(content).then(([saved]) => {
        const broadcast = JSON.stringify({ type: 'message', data: saved })
        for (const client of clients) {
          client.send(broadcast)
        }
      })
    },
    open(ws) {
      clients.add(ws)
      getMessages(50).then((history) => {
        ws.send(JSON.stringify({ type: 'history', data: history }))
      })
    },
    close(ws) {
      clients.delete(ws)
    }
  })
  .get('/', () => 'Hello Elysia')
  .listen(Bun.env.PORT ?? 3001)

process.on('beforeExit', app.stop)

export type app = typeof app

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
