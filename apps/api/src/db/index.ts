import { Database } from 'bun:sqlite'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { messages } from './schema'
import { sql, desc } from 'drizzle-orm'

const sqlite = new Database(Bun.env.DATABASE_URL ?? 'sqlite.db')
export const db = drizzle(sqlite)

sqlite.exec(
    'CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT NOT NULL, created_at INTEGER NOT NULL)'
)

export { messages }

export async function insertMessage(content: string) {
    return db.insert(messages).values({ content }).returning()
}

export async function getMessages(limit = 50) {
    return db.select().from(messages).orderBy(desc(messages.createdAt)).limit(limit)
}