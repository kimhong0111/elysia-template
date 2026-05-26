
import { api } from '@libs'
import { LeaderboardHeader } from '@web/components/LeaderboardHeader'
import { UseRoundTab } from '@web/components/useRoundTab'

export default async function Landing() {
    
  
  
  const { data } = await api.get()
    

    return (
            
            
           <div className="min-h-screen">
      <LeaderboardHeader />
      <main className="container mx-auto p-4 py-8">
        <UseRoundTab />
      </main>
    </div>

    )
}
