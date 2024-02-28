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
                MDV & CO Associates Chartered Accountants is a distinguished financial and business consulting
                firm that maintains a strong presence in UAE and
                beyond. Our unwavering commitment to excellence shines through
                our comprehensive range of services.
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
                  <p className="mt-2">Dubai, United Arab Emirates</p>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex">
                  <i class="fa-solid fa-phone mx-3 mt-1 text-secondary"></i>
                  <p className="">
                    <span>+971 56 453 3568 </span>
                    <br></br>
                    <span>+971 56 746 2132</span>
                  </p>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex">
                  <i class="fa-sharp fa-solid fa-envelope mx-3 mt-1 text-secondary"></i>
                  <p>mdv.associatesae@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white text-center p-5">
        <p>© 2023 MDV & CO Associates, All Rights are Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
