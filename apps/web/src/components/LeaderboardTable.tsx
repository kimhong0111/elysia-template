'use client'
import { Leaderboard } from "@api/db/schema/schema"

interface LeaderboardTableProps {
  data: Leaderboard[]
  rd: 'rd1' | 'rd2' | 'rd3' | 'total'
}

export function LeaderboardTable({ data, rd }: LeaderboardTableProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800 border-b border-slate-700">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                   Score
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={entry.userId} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <span className="text-slate-600 font-medium">{index + 1}</span>
                  </td>
                  <td className="px-6 py-4">
                    <h1 className="font-medium text-slate-800">{entry.fullname}</h1>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center justify-center bg-slate-800 text-white px-4 py-2 rounded-lg border-b-4 border-slate-900">
                      <span className="text-orange-500 text-xl font-bold">{entry[rd]}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-8 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span>Auto-refreshing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <span>Total Contestant: {data.length}</span>
        </div>
      </div>
    </div>
  )
}