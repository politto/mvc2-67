'use client'

import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type Props = {}

export default function page({}: Props) {
  const [petType, setPetType] = useState("dragon");
    const [candidateCount, setCandidateCount] = useState(0);
    const [dragonCount, setDragonCount] = useState(0);
    const [owlCount, setOwlCount] = useState(0);
    const [pheonixCount, setPheonixCount] = useState(0);
    // navigates to /view/index.tsx
    const handlePetSelect = (petType: string) => {
      setPetType(petType);
      redirect(`view/${petType}`);
    };
  
    const getCounts = async () => {
      const response  = await fetch("/api/validation", {
        method: "GET"
      });
      const data = await response.json();
      setCandidateCount(data.all);
      setDragonCount(data.dragon);
      setOwlCount(data.owl);
      setPheonixCount(data.pheonix);
    };
  
    useEffect(() => {
      getCounts();
      return () => {
        
      };
    }, []);
    
    return (
      <>
      {/* beautiful pet selecter (dragon, owl, pheonix) if selected, then enter handle fn */}
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to the magical pet school
          </h1>
          <p className="mt-3 text-2xl">
            Select your magical pet
          </p>
          <div className="flex flex-row items-center justify-center space-x-4 mt-6 bg-slate-400 p-5 gap-4">
            <button onClick={() => handlePetSelect("dragon")}>
              dragon
            </button>
            <button onClick={() => handlePetSelect("owl")}>
              owl
            </button>
            <button onClick={() => handlePetSelect("pheonix")}>
             pheonix
            </button>
          </div>
  
          {/* display counts */}
          <div className="flex flex-row items-center justify-center space-x-4 mt-6 bg-slate-400 p-5 gap-4">
            <div>
              <h1 className="text-6xl font-bold">
                {candidateCount}
              </h1>
              <p className="mt-3 text-2xl">
                candidates
              </p>
            </div>
            <div>
              <h1 className="text-6xl font-bold">
                {dragonCount}
              </h1>
              <p className="mt-3 text-2xl">
                dragons
              </p>
            </div>
            <div>
              <h1 className="text-6xl font-bold">
                {owlCount}
              </h1>
              <p className="mt-3 text-2xl">
                owls
              </p>
            </div>
            <div>
              <h1 className="text-6xl font-bold">
                {pheonixCount}
              </h1>
              <p className="mt-3 text-2xl">
                pheonixes
              </p>
  
              
  
  
            </div>
  
            <div>
            <h1 className="text-6xl font-bold">
                {candidateCount - dragonCount - owlCount - pheonixCount}
              </h1>
              <p className="mt-3 text-2xl">
                rejected
              </p>
            </div>
          </div>
        </main>
      </div>
      
      </>
    );
}