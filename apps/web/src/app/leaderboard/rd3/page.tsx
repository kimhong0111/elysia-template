'use client'
import { useWebSocket } from '@web/hooks/useWebSocket'
import { LeaderboardTable } from '@web/components/LeaderboardTable'
import { Podium } from '@web/components/Podium'

export default function Rd3() {
  const { leaderboardRd3 } = useWebSocket()

  return (
    <>
      <Podium data={leaderboardRd3} rd="rd3" />
      <LeaderboardTable data={leaderboardRd3} rd="rd3" />
    </>
  )
}