'use client';

import { redirect } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [petType, setPetType] = useState("dragon");
  // navigates to /view/index.tsx

  const handlePetSelect = (petType: string) => {
    setPetType(petType);
    redirect(`/view/${petType}`);
  };
  
  return (
    <>
    {/* beautiful pet selecter (dragon, owl, pheonix) if selected, then enter handle fn */}
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to the magical pet shop
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
      </main>
    </div>
    
    </>
  );
}
