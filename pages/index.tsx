import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import useLocalStorage from '../hooks/useLocalStorage'
import { Card } from '../model/Card'
import { LocalStorageKeys } from "../model/LocalStorageKeys"

const Hero = dynamic(() => import("../components/Hero"), { ssr: false})

const Home: NextPage = () => {

  return (
    <div>
      <Hero />
    </div>
  )
}

export default Home;
