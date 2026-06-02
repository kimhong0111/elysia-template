'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function RoundTabs() {
  const pathname = usePathname();

  const rounds = [
    
    { number: 1, label: "Round 1", status: "Live",     href: "/leaderboard/rd1" },
    { number: 2, label: "Round 2", status: "Upcoming", href: "/leaderboard/rd2" },
    { number: 3, label: "Round 3", status: "Upcoming", href: "/leaderboard/rd3"},
    {number: 4, label: "Total Score", status:"" , href: "/leaderboard/total"}

     
  ];

  return (
    <div className="mb-8">
      <div className="flex gap-3 justify-center">
        {rounds.map((round) => {
          const isActive = pathname === round.href;
          return (
            <Link
              key={round.number}
              href={round.href}
              className={`relative px-6 py-3 rounded-xl font-bold border-b-4 no-underline ${
                isActive
                  ? 'bg-orange-500 text-white border-orange-600'
                  : 'bg-white text-slate-600 border-2 border-slate-300 border-b-4 hover:bg-slate-50'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {round.label}
                </span>
                <span className={`text-xs font-normal ${
                  isActive ? 'text-orange-100' : 'text-slate-400'
                }`}>
                  {round.status}
                </span>
              </div>
              {round.status === "Live" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}