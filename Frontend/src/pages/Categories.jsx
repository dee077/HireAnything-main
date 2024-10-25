import { Outlet } from 'react-router-dom';
import Libraries from '../components/Libraries';
import Banner from '../components/Banner';
import Category from '../components/Categories';

import Footer from '../components/Footer';


function Categories() {
  return (
    <>
              <Libraries/>
           
            <Banner/>
            <Category/>
            <Footer/>
            <Outlet />
     
    </>
  );
}

export default Categories;
