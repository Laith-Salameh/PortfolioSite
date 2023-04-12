import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'
import Intro from '../components/sections/Home/intro'
import NavBar from "../components/navbar"
import About from "../components/sections/Home/about"
import Skills from "../components/sections/Home/skills"
import Journey from "../components/sections/Home/journey"
import Portfolio from "../components/sections/Home/portfolio"
import Connect from "../components/sections/Home/connect"
import apiRequest, { IProject } from '../src/dataprovider'


interface IPageProps {
   projects: IProject[]
}

const Home: NextPage<IPageProps> = ({projects}) => {
  return (
    <>
      <Head>
        <title>Laith Salameh</title>
        <meta name="description" content="I am a Software Engineer who is looking for a job in dubai, I have skills in machine learning, web development, game development, and object oriented programming. programming Languages: c++, C#, java, python, javascript, typescript. frameworks and famous libraries that i use: react, next, node, graphql, rest api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Intro />
      <About />
      <Journey />
      <Skills />
      <Portfolio projects={projects} />
      <Connect />
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const projects = await apiRequest();
  return {
    props: {
      projects
    }
  }
}

export default Home
