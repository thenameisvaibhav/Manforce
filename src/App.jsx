import React from 'react'
import Loader from './components/Loader'
import Landing from './components/Landing'
import Page2 from './components/Page2'
import Cursor from './components/Cursor'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import Footer from './components/Footer'
import Age from './components/Age'
import LocomotiveScroll from "locomotive-scroll";


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full bg-[#111] text-[#F1F1F1]'>
      <Age/>
      <Loader />
      <Cursor />
      <Landing />
      <Page2 />
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Footer/>
    </div>
  );
}

export default App