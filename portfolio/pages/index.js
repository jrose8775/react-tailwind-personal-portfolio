import Head from 'next/head'
import { useState } from 'react';
import Introductions from './components/introductions';
import Experiences from './components/experiences';
import Projects from './components/projects';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Jordan Rose Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <Introductions />
          <Experiences />
          <Projects />
        </main>
      </div>
    </>
  )
}
