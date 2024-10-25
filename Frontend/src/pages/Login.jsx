import { Outlet } from 'react-router-dom';
import Libraries from '../components/Libraries';

import Banner from '../components/Banner';
import Login  from '../components/Login';

import Footer from '../components/Footer';


function LoginPage() {
  return (
    <>
              <Libraries/>
           
      
            <Banner/>
            <Login/>
            <Footer/>
            <Outlet />
     
    </>
  );
}

export default LoginPage;
