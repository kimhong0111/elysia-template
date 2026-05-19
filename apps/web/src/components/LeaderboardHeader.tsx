import logoImage from "../../imports/image.png";

export function LeaderboardHeader() {
  return (
    <header className="bg-orange-500 border-b border-orange-600 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-white text-3xl font-extrabold">
                <span className="text-white">CFCC</span> competition leaderboard
              </h1>
              <p className="text-orange-100 text-sm mt-1">Live Rankings • Updates every 30 seconds</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white text-2xl font-bold">02:45:30</div>
            <div className="text-orange-100 text-sm">Time Remaining</div>
          </div>
        </div>
      </div>
    </header>
  );
}
