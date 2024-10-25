import { Outlet } from 'react-router-dom';
import Libraries from '../components/Libraries';
import Headers from '../components/Headers';
import Banner from '../components/Banner';
import Signup from '../components/Signup';

import Footer from '../components/Footer';


function Categories() {
  return (
    <>
              <Libraries/>
           
            {/* <Headers/> */}
            <Banner/>
            <Signup/>
            <Footer/>
            <Outlet />
     
    </>
  );
}

export default Categories;
