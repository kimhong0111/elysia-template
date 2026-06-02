'use client'
import { useWebSocket } from '@web/hooks/useWebSocket'
import { LeaderboardTable } from '@web/components/LeaderboardTable'
import { Podium } from '@web/components/Podium'

export default function Total() {
  const { leaderboardTotal } = useWebSocket()

  return (
    <>
      <Podium data={leaderboardTotal} rd="total" />
      <LeaderboardTable data={leaderboardTotal} rd="total" />
    </>
  )
}