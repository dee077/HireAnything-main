import { Outlet } from 'react-router-dom';
import Libraries from '../components/Libraries';
import Banner from '../components/Banner';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import Partnersignup from '../components/Booking';




function Partner() {
  return (
    <>
            <Libraries/>
            {/* <Headers/> */}
            <Banner/>
            
            <Partnersignup/>
            <Footer/>

            <Outlet />
     
    </>
  );
}

export default Partner;
