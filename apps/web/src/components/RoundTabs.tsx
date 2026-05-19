  interface RoundTabsProps {
    activeRound: number;
    onRoundChange: (round: number) => void;
  }

export function RoundTabs({ activeRound, onRoundChange }: RoundTabsProps) {
  const rounds = [
    { number: 1, label: "Round 1", status: "Live" },
    { number: 2, label: "Round 2", status: "Upcoming" },
    { number: 3, label: "Round 3", status: "Upcoming" },
  ];

  return (
    <div className="mb-8">
      <div className="flex gap-3 justify-center">
        {rounds.map((round) => (
          <button
            key={round.number}
            onClick={() => onRoundChange(round.number)}
            className={`relative px-6 py-3 rounded-xl font-bold border-b-4 ${
              activeRound === round.number
                ? 'bg-orange-500 text-white border-orange-600'
                : 'bg-white text-slate-600 border-slate-300 border-2 border-b-4 hover:bg-slate-50'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
                <span className="text-base" style={{ fontFamily: 'Nunito, sans-serif' }} >{round.label} </span>              
                <span className={`text-xs font-normal ${
                activeRound === round.number ? 'text-orange-100' : 'text-slate-400'
              }`}>
                {round.status}
              </span>
            </div>
            {round.status === "Live" && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
