import { Outlet } from 'react-router-dom';
import Libraries from '../components/Libraries';
import Banner from '../components/Banner';
import Vendorcon from '../components/Vendor';
import Footer from '../components/Footer';





function Vendors() {
  return (
    <>
            <Libraries/>
            {/* <Headers/> */}
            <Banner/>
            
            <Vendorcon/>
            <Footer/>

            <Outlet />
     
    </>
  );
}

export default Vendors;
