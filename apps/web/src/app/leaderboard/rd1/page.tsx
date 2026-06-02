'use client'
import { useWebSocket } from '@web/hooks/useWebSocket'
import { LeaderboardTable } from '@web/components/LeaderboardTable'
import { Podium } from '@web/components/Podium'

export default function Rd1() {
  const { leaderboardRd1 } = useWebSocket()

  return (
    <>
      <Podium data={leaderboardRd1} rd="rd1" />
      <LeaderboardTable data={leaderboardRd1} rd="rd1" />
    </>
  )
}