import Image from "next/image";

export default function Card() {
  return (
      <Image className="rounded-lg lg:rounded-3xl scale-[85%] shrink-0 overflow-hidden max-h-full" src={require("../assets/cragheart/gh-avalanche.png")} width={600} height={800} alt="avalanche" />
  )
}