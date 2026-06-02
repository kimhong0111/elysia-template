
'use client'
import { useWebSocket } from '@web/hooks/useWebSocket'
import { LeaderboardTable } from '@web/components/LeaderboardTable'




export default function Total() {
  const { leaderboardTotal } = useWebSocket()

  return (
           <LeaderboardTable data={leaderboardTotal} rd={"total"}></LeaderboardTable>
  )
}