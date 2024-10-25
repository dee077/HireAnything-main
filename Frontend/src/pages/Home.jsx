import { Outlet } from 'react-router-dom';
import Libraries from '../components/Libraries';
import Banner from '../components/Banner';
import Category from '../components/Categories';
import Footer from '../components/Footer';
import Homepage from '../components/Homepage';
import Service from '../components/Services';

function Home() {

  return (
    <>
      <Libraries />
      <Banner />
      <Service />
      <Category />
     
      <Homepage
        title="Did not find your Package?"
        subtitle="Feel free to ask us."
        description="Don’t worry if you haven’t found exactly what you’re looking for on our platform. At HireAnything, we’re dedicated to meeting your unique needs. Simply reach out to us with your specific requirements, and our team will work diligently to create a tailored package just for you. Your satisfaction is our priority, and we’re here to ensure you get the service or equipment you need. Contact us today, and let us help you find the perfect solution!"
        buttonText="Request Custom Price"
        buttonLink="/contact"
        imgSrc="image/about.png"
      />

      <Footer />
      <Outlet />
    </>
  );
}

export default Home;
