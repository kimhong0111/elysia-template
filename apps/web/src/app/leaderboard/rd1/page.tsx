'use client'
import { useWebSocket } from '@web/hooks/useWebSocket'
import { LeaderboardTable } from '@web/components/LeaderboardTable'

export default function Rd1() {
  const { leaderboardRd1 } = useWebSocket()

  return (
    <LeaderboardTable data={leaderboardRd1} rd={'rd1'} />
  )
}