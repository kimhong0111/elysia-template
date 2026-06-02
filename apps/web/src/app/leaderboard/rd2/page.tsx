'use client'
import { useWebSocket } from '@web/hooks/useWebSocket'
import { LeaderboardTable } from '@web/components/LeaderboardTable'
import { Podium } from '@web/components/Podium'

export default function Rd2() {
  const { leaderboardRd2 } = useWebSocket()

  return (
    <>
      <Podium data={leaderboardRd2} rd="rd2" />
      <LeaderboardTable data={leaderboardRd2} rd="rd2" />
    </>
  )
}