import { NextPage } from "next";
import dynamic from "next/dynamic";

const Decks: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex items-center justify-center pt-4">
        <h1 className="text-5xl font-bold">
          Decks
        </h1>
      </div>
      <div className="flex-auto grid grid-cols-2 gap-4">
        
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Decks), { ssr: false });