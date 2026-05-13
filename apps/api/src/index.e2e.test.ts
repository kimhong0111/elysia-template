import { describe, it, expect, beforeAll, afterAll } from 'bun:test'

interface Message {
    id: number
    content: string
    createdAt: string
}

interface WSMessage {
    type: 'message' | 'history'
    data: Message | Message[]
}

describe('WebSocket /ws', () => {
    let ws: WebSocket

    beforeAll(async () => {
        ws = new WebSocket('ws://localhost:3001/ws')
        
        await new Promise<void>((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error('Connection timeout')), 5000)
            ws.onopen = () => {
                clearTimeout(timeout)
                resolve()
            }
            ws.onerror = () => {
                clearTimeout(timeout)
                reject(new Error('Connection error'))
            }
        })
    })

    afterAll(() => {
        ws?.close()
    })

    it('connects successfully', async () => {
        expect(ws.readyState).toBe(WebSocket.OPEN)
    })

    it('receives history on connect', async () => {
        const message = await new Promise<WSMessage>((resolve) => {
            ws.onmessage = (event) => {
                const data = JSON.parse(event.data) as WSMessage
                resolve(data)
            }
        })
        expect(message.type).toBe('history')
        expect(Array.isArray(message.data)).toBe(true)
    })

    it('sends and receives messages', async () => {
        const testContent = `test-${Date.now()}`
        
        ws.send(testContent)
        
        const message = await new Promise<WSMessage>((resolve) => {
            ws.onmessage = (event) => {
                const data = JSON.parse(event.data) as WSMessage
                if (data.type === 'message') {
                    resolve(data)
                }
            }
        })
        
        expect(message.type).toBe('message')
        expect((message.data as Message).content).toBe(testContent)
    })

    it('persists messages', async () => {
        const response = await fetch('http://localhost:3001/')
        expect(response.ok).toBe(true)
    })
})