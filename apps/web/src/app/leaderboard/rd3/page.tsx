
'use client'
import { useWebSocket } from '@web/hooks/useWebSocket'
import { LeaderboardTable } from '@web/components/LeaderboardTable'




export default function Rd3() {
  const { leaderboardRd3 } = useWebSocket()

  return (
           <LeaderboardTable data={leaderboardRd3} rd={'rd3'}></LeaderboardTable>
  )
}