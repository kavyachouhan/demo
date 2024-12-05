import React ,{ useEffect } from "react";
import Navbar from '../../component/navbar/Navbar'
import Podcastpage from '../../component/About/Podcastpage'
import Aboutstart from '../../component/About/Aboutstart'
import AboutThird from "../../component/About/AboutThird";
import SplitTestingStrategy from "../../component/About/SplitTestingStrategy";
import CaseStudytwo from "../../component/About/CaseStudytwo";
import Footer from "../../component/footer/Footer";
import Services from "../../component/About/Services";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>


      <Aboutstart/>
      

      <Podcastpage/>


      <AboutThird/>
     <SplitTestingStrategy/>

      <CaseStudytwo/>
     

      <Services/>
      

      <Footer/>
      

    </div>
  )
}

export default About
