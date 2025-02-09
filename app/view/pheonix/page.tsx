'use client'
import { PetForFrontend } from '@/app/model/petType'
import { Pettype } from 'prisma/prisma-client'
import React, { useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const [foodCode, setFoodCode] = useState<string>('')
    const [lastCheckedDT, setLastCheckedDT] = useState<Date>(new Date())
    const [fireCert, SetFireCert] = useState<boolean>(false)
    const [vaccinatedCnt, setVaccinatedCnt] = useState<number>(0)
    // when submitted, will send a POST request to the server
    const handleSubmit = async () => {
        //fetch from backend (all also code like this in all other animal file)
        const res = await fetch('/api/validation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                foodCode,
                lastCheckedDT,
                fireCert,
                vaccinatedCnt,
                petType: "Pheonix",
            }),
        })
    }
  return (
    // beautiful modern form that will set current dragon
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div>
            <h1 className="text-6xl font-bold">
            Pheonix
            </h1>
            <p className="mt-3 text-2xl">
            Set your Pheonix's food code, last checked date, and fire cert
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
            fire mai lam certificate
            <select value={fireCert.toString()} onChange={(e) => SetFireCert(e.target.value === 'true')}>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
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