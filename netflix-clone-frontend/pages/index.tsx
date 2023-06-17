import type { NextPage, NextPageContext } from 'next'
import { getSession, signOut, useSession } from 'next-auth/react'
import useCurrentUser from '../hooks/useCurrentUser'
import { message } from 'antd'
import Head from 'next/head'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)
  
  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

const Home: NextPage = () => {

  const {data: user} = useCurrentUser()

  return (
    <div className="">
      <Head>
        <title>Main</title>
      </Head>
      <h1 className='text-white'>Login as {user?.name || user?.email}</h1>
      <button className='h-10 w-20 bg-white ' onClick={() => signOut()}>Logout</button>
    </div>
  )
}

export default Home
