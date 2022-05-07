import Card from "../cards/components/Card";

export default function BottomCardContainer() {
  return <div className="border-t-4 max-h-16 bg-white border-slate-500 w-screen fixed bottom-0 grid grid-cols-5 overflow-hidden">
    <Card />
    <Card />
    <Card />
    
  </div>
}