'use client'
import { useState } from "react"
import { RoundTabs } from "./RoundTabs"

export  function UseRoundTab(){

const [activeRounds , setActiveRounds]= useState<number>(1);

    return (
    <RoundTabs activeRound={activeRounds} onRoundChange={setActiveRounds} />
)
}

