import React, { useEffect } from "react";
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Start from '../component/start/Start'
import AdFilms from '../component/AdFilms/Adfilms'
import MultiLayerParallax from '../component/multiparallax/MultiLayerParallax'
import Marqueeupper from '../component/marquee/Marqueeupper'
import Marqueelower from '../component/marquee/Marqueelower'
import PodcastSwiper from '../component/swipper/PodcastSwiper'
import Cards from '../component/cardslider/Cards'
import "./home.scss"
import LogoGrid from '../component/logogrid/LogoGrid'
// import Adfilmmarquee from '../component/AdFilms/Adfilmmarqueeitem'

import Homee from '../component/spline/Homee'
import Adfilmmarqueelower from '../component/AdFilms/Adfilmmarqueelower'
import Adfilm from '../component/AdFilms/Adfilm'
import Homesecond from "../component/Homepage/Homesecond";
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <section>
            {/* <Start/> */}
        <Homee/>
        </section>
      
        <section>
            <Homesecond/>
        </section>
    
        <section>
            {/* <Marqueeupper/> */}
            <Marqueelower/>
            <Cards/>
            {/* <PodcastSwiper/> */}
        </section>
        <section>
          {/* <Adfilmmarquee/> */}
<Adfilmmarqueelower/>
<Adfilm/>
            </section>
        <AdFilms></AdFilms>
      
        <section>
            <LogoGrid/>
        </section>
        <section>
            <Footer/>
            {/* <Footer/> */}
        </section>
        

        

    </div>
  )
}

export default Home
