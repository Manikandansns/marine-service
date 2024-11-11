import React from "react";
// import ContactUs from '../../components/contactPage/contactSection/contactForm'
import ContactPage from "../../components/contactPage/contactSection/ContactMain";
import ContactCard from "../../components/contactPage/cardSection/contactCard";
import Navbar from "../../components/navbar/Navbar";
const ContactMain = () => {
  return (
    <>
    <section className="cta-contact-main">
     <Navbar/>
      <ContactPage/>
      <ContactCard />
      
    </section>
    </>
  );
};

export default ContactMain;
