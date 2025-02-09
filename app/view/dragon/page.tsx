'use client'
import { PetForFrontend } from '@/app/model/petType'
import React, { useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const [foodCode, setFoodCode] = useState<string>('')
    const [lastCheckedDT, setLastCheckedDT] = useState<Date>(new Date())
    const [dustLevel, setDustLevel] = useState<number>(0)
    const [vaccinatedCnt, setVaccinatedCnt] = useState<number>(0)
    // when submitted, will send a POST request to the server
    const handleSubmit = async () => {
        console.log(foodCode, lastCheckedDT, dustLevel, vaccinatedCnt);
        
        const res = await fetch('/api/validation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                petType: "Dragon",
                lastCheckedDT,
                dustLevel,
                vaccinatedCnt
                
            }),
        })
    }
  return (
    // beautiful modern form that will set current dragon
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div>
            <h1 className="text-6xl font-bold">
            Dragon
            </h1>
            <p className="mt-3 text-2xl">
            Set your dragon's food code, last checked date, and dust level
            </p>
            </div>
            <div className="flex flex-col items-center justify-center space-x-4 mt-6 bg-slate-400 p-5 gap-4">
            
            last checked date
            <input
                type="date"
                placeholder="last checked date"
                value={lastCheckedDT.toISOString().split('T')[0]}
                onChange={(e) => setLastCheckedDT(new Date(e.target.value))}
            />
            dust level
            <input
                type="number"
                placeholder="dust level"
                value={dustLevel}
                onChange={(e) => setDustLevel(parseInt(e.target.value))}
            />
            vaccinated count
            <input
                type="number"
                placeholder="vaccinated count"
                value={vaccinatedCnt}
                onChange={(e) => setVaccinatedCnt(parseInt(e.target.value))}
            />
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </main>
    </div>

  )
}