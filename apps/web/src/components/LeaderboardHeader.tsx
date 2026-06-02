'use client'
import { useState, useEffect } from 'react'

export function LeaderboardHeader() {
  const totalSeconds = 2 * 3600 + 45 * 60 + 30
  const [timeLeft, setTimeLeft] = useState(totalSeconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60
  const formatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  const elapsed = totalSeconds - timeLeft
  const progress = (elapsed / totalSeconds) * 100

  return (
    <header className="bg-orange-500 border-b border-orange-600 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-white text-3xl font-extrabold flex items-center gap-2">
                <span>🏆</span>
                <span>CFCC competition leaderboard</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white text-orange-500 px-2 py-0.5 rounded animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  LIVE
                </span>
              </h1>
              <p className="text-orange-100 text-sm mt-1">Live Rankings • Updates every 30 seconds</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white text-2xl font-bold font-mono">{formatted}</div>
            <div className="text-orange-100 text-sm">Time Remaining</div>
          </div>
        </div>
        <div className="mt-2 h-1 bg-orange-400/30 rounded">
          <div
            className="h-full bg-white rounded transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  )
}
