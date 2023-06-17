import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { signOut } from 'next-auth/react'

const Home: NextPage = () => {
  return (
    <div className="">
      sdfsdf
      <button className='h-10 w-20 bg-white ' onClick={() => signOut()}>Logout</button>
    </div>
  )
}

export default Home
