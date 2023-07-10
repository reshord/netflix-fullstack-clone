import type { NextPage, NextPageContext } from 'next'
import { getSession, signOut, useSession } from 'next-auth/react'
import useCurrentUser from '../hooks/useCurrentUser'
import { message } from 'antd'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {useEffect} from 'react' 
import Navbar from '../components/Navbar'
import Billboard from '../components/Billboard'
import MovieList from '../components/MovieList'
import useMovieList from '../hooks/useMovieList'
import useFavorites from '../hooks/useFavorites'

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

  const router = useRouter()

  const {data: movies = []} = useMovieList()
  const {data: favorites = []} = useFavorites()

  return (
    <div className="">
      <Head>
        <title>Main</title>
      </Head>
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <MovieList data={movies} title='Trending Now'/>
        <MovieList data={favorites} title='My List'/>
      </div>
    </div>
  )
}

export default Home
