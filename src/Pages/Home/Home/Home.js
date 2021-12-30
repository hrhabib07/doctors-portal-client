import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Info from "../Info/Info";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Treatment from "../Treatment/Treatment";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Info></Info>
      <Services> </Services>
      <Treatment></Treatment>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
