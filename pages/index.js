import Head from 'next/head';

import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import About from '../Components/About';
import Roadmap from '../Components/Roadmap';
import Team from '../Components/Team';
import Footer from '../Components/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>PYYC</title>
        <meta name="description" content="Pepe Y00ts Yacht Club!" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Roadmap/>
      <Team/>
      <Footer/>
    
    
    </div>
  )
}