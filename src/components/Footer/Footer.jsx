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
            <div className="col-span-2 m-5 px-2">
              <h3>About Us</h3>
              <p>
                Bestax Chartered Accountants is a leading financial consultancy
                and business advisory firm in the heart of Dubai, Business Bay.
                We strive to deliver a hundred percent on every tax advisory,
                auditing, accounting & bookkeeping, and other financial service.{" "}
              </p>
            </div>
            <div className="col-span-1 m-5 px-2">
              <h3>Useful Links</h3>
              <p className="pb-3">About Us</p>
              <p className="pb-3">Career</p>
              <p className="pb-3">Insights</p>
              <p className="pb-3">Services</p>
              <p className="pb-3">Contact Us</p>
              <p className="pb-3">Privacy Policy</p>
            </div>
            <div className="col-span-1 m-5 px-2"></div>
            <div className="col-span-2 m-5 px-2">
              <h3>Office Address</h3>
              <div>
                <div className="flex">
                <i class="fa-solid fa-location-dot"></i>
                  <p>Office 804, Park Lane Tower, Business Bay Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
