import { Outlet } from 'react-router-dom';
import Libraries from '../components/Libraries';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Contactmy from '../components/Contactus';




function Contact() {
  return (
    <>
            <Libraries/>
            <Banner/>
  

            <Contactmy/>
            <Footer/>

            <Outlet />
     
    </>
  );
}

export default Contact;
