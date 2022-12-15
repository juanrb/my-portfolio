import Head from 'next/head'
import Canvas from '../components/layout/Canvas'
import SidebarNav from '../components/layout/SidebarNav'
import TopHeader from '../components/layout/TopHeader'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <SidebarNav />
        <div className='flex flex-col w-full'>
          <TopHeader />
          <Canvas />
        </div>
      </div>

    </div>
  )
}
