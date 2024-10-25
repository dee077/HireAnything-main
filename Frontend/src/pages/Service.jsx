import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';

import Footer from '../components/Footer';
import Libraries from '../components/Libraries';
import Service from '../components/servicesStatic';

function MyService() {
  return (
    <>
              <Libraries/>
     
       
            <Banner/>
            <Service/> 
            {/* <Service/> */}
            <Footer/>
            <Outlet />
     
    </>
  );
}

export default MyService;
