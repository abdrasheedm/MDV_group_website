import React from "react";
import FirstView from "../../components/Home/FirstView";
import ContactForm from "../../components/SideForm/SideForm";
import AccountingImage from "../../assets/paperwork.jpg";
import SecondView from "../../components/Home/SecondView";
import Services from "../../components/Home/Services";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div
      className=""
      
    >
      <div className="bg-blue-950 bg-opacity-50" style={{ backgroundImage: `url(${AccountingImage})`}}>
        <div className="container mx-auto">
          <div className="grid grid-cols-3">
            <FirstView />
            <ContactForm />
          </div>
        </div>
      </div>
      <SecondView />
      <Services />
      <Footer />

    </div>
  );
}

export default Home;
