import Card from "../cards/components/Card";

export default function DeckBuildingCardContainer() {
  return <div className="border-t-4 max-h-16 lg:max-h-screen lg:min-h-screen bg-white border-slate-500 lg:border-t-0 lg:border-r-2 w-screen lg:w-1/4 fixed bottom-0 lg:bottom-auto grid grid-cols-5 lg:grid-cols-1 overflow-hidden lg:overflow-y-auto z-10">
    <Card />
    <Card />
    <Card />
    
  </div>
}