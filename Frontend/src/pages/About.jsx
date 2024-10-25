import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import Libraries from '../components/Libraries';
import Aboutus from '../components/About';


function About() {
  return (
    <>
              <Libraries/>
       
            {/* <Headers/> */}
            <Banner/>
            <Aboutus/>
            <Footer/>
            <Outlet />
     
    </>
  );
}

export default About;
