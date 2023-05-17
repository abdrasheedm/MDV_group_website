import React from "react";
import footerImage from "../../assets/6379114.jpg";
import AccountingImage from "../../assets/paperwork.jpg";

function Footer() {
  return (
    <div
      className="mt-1"
      style={{
        backgroundImage: `url(${AccountingImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="bg-gray-950 bg-opacity-70">
        <div className="container mx-auto px-20 py-10">
          <div className="grid grid-cols-6 bg-white bg-opacity-30 text-white">
            <div className="col-span-6 md:col-span-3 lg:col-span-2  m-5 px-2">
              <h3 className="text-2xl text-secondary">About Us</h3>
              <p>
                Bestax Chartered Accountants is a leading financial consultancy
                and business advisory firm in the heart of Dubai, Business Bay.
                We strive to deliver a hundred percent on every tax advisory,
                auditing, accounting & bookkeeping, and other financial service.{" "}
              </p>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-1 m-5 px-2">
              <h3 className="text-2xl text-secondary">Useful Links</h3>
              <p className="pb-3">About Us</p>
              <p className="pb-3">Career</p>
              <p className="pb-3">Insights</p>
              <p className="pb-3">Services</p>
              <p className="pb-3">Contact Us</p>
              <p className="pb-3">Privacy Policy</p>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-1 m-5 px-2"></div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2 m-5 px-2">
              <h3 className="text-2xl text-secondary">Office Address</h3>
              <div className="mb-3">
                <div className="flex">
                <i class="fa-solid fa-location-dot m-3 text-secondary"></i>
                  <p>Office 804, Park Lane Tower, Business Bay Dubai, UAE</p>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex">
                <i class="fa-solid fa-phone mx-3 mt-1 text-secondary"></i>
                  <p>Mobile : <span>+91 7306 600 306</span></p>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex">
                <i class="fa-sharp fa-solid fa-envelope mx-3 mt-1 text-secondary"></i>
                  <p>rasheed@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white text-center p-5">
        <p>© 2023 Bestaxca, All Rights are Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
