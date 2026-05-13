import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const messages = sqliteTable('messages', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    content: text('content').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .$defaultFn(() => new Date())
})

export type Message = typeof messages.$inferSelect
export type NewMessage = typeof messages.$inferInsert