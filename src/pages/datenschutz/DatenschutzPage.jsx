import React from "react";
import NavBarContact from "../../components/NavBar/NavBarContact";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/Contact/ContactForm";

const DatenschutzPage = () => {
  return (
    <div className="contact-page">
      <NavBarContact />
      <div className="contact-form">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default DatenschutzPage;
