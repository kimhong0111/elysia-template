'use client'

import { useEffect, useRef, useState } from 'react'
import { wsSubscribe } from '@libs'
import type { EdenWS } from '@elysiajs/eden'

type WSMessage = {
    type: 'message' | 'history'
    data: {
        id: number
        content: string
        createdAt: string
    } | {
        id: number
        content: string
        createdAt: string
    }[]
}

export function useWebSocket() {
    const [messages, setMessages] = useState<WSMessage['data']>([])
    const [connected, setConnected] = useState(false)
    const wsRef = useRef<EdenWS | null>(null)

    useEffect(() => {
        const websocket = wsSubscribe()

        websocket.on('open', () => {
            setConnected(true)
            console.log('WebSocket connected')
        })

        websocket.on('close', () => {
            setConnected(false)
            console.log('WebSocket disconnected')
        })

        websocket.subscribe((data: WSMessage) => {
            console.log('Received:', data)
            if (data.type === 'history') {
                setMessages(data.data)
            } else if (data.type === 'message') {
                setMessages((prev) => [data.data, ...prev])
            }
        })

        wsRef.current = websocket

        return () => {
            websocket.close()
        }
    }, [])

    const sendMessage = (content: string) => {
        if (wsRef.current && connected) {
            wsRef.current.send(content)
        }
    }

    return { messages, connected, sendMessage }
}