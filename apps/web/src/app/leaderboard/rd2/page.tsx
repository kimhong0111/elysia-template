
'use client'
import { useWebSocket } from '@web/hooks/useWebSocket'
import { LeaderboardTable } from '@web/components/LeaderboardTable'

export default function Rd2() {
  const { leaderboardRd2 } = useWebSocket()

  return (
       <LeaderboardTable data={leaderboardRd2} rd={'rd2'}></LeaderboardTable>
  )
}