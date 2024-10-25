import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import Libraries from '../components/Libraries';
import SearchPage from '../components/SearchPage';


function About() {
  return (
    <>
              <Libraries/>
       
            {/* <Headers/> */}
            <Banner/>
            <SearchPage/>
            <Footer/>
            <Outlet />
     
    </>
  );
}

export default About;
