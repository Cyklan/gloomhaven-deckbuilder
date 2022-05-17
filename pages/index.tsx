import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
const Hero = dynamic(() => import("../components/Hero"), { ssr: false})

const Home: NextPage = () => {

  return (
    <div>
      <Hero />
    </div>
  )
}

export default Home;
