import React from "react";
import image1 from "../../assets/accounting2.jpg";
import image2 from "../../assets/accounting1.jpg";
import image3 from '../../assets/18129.jpg'

function SecondView() {
  return (
    <div className="" style={{backgroundImage: `url(${image3})`, backgroundSize:"cover"}}>
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-5 p-10 my-28 bg-gray-300 bg-opacity-30">
          <div className="col-span-6 md:col-span-3 pb-5">
            <h1 className=""><span className="border-b-4 border-secondary">Welcome to MDV & CO ASSOCIATES</span></h1>
            <p className="text-sm md:text-base">
              A trusted and top-rated financial and business consulting firm
              with a commanding presence in UAE. We
              specialize in a comprehensive range of services, including
              business setup in UAE, tax advisory, auditing, accounting &
              bookkeeping, AML Compliance, VAT registration, VAT return filing,
              excise tax registration, ICV certification, stock audit, and
              corporate tax registration and planning solutions, among other
              essential business services. At MDV & CO Associates, we are dedicated to
              helping both national and international clients unlock their full
              potential by enhancing efficiency, compliance, growth, and
              profitability. Our team of seasoned experts takes immense pride in
              delivering exceptional, timely results, ensuring your business
              stays ahead in today’s competitive landscape. Experience the
              MDV & CO Associates advantage and let us calculate the best opportunities for
              you.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2 mx-10">
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="flex justify-center">
        <div className="grid grid-cols-4 bg-primary my-20">
            <div className="col-span-4 md:col-span-1 mb-5 text-center bg-secondary bg-opacity-30 border-2 border-white shadow-2xl text-yellow-500">
                <h1>500+</h1>
                <h3>Happy Clients</h3>
            </div>
            <div className="col-span-4 md:col-span-1 mb-5 text-center bg-secondary bg-opacity-30 border-2 border-white shadow-2xl text-yellow-500">
                <h1>100%</h1>
                <h3>Commitment</h3>
            </div>
            <div className="col-span-4 md:col-span-1 mb-5 text-center bg-secondary bg-opacity-30 border-2 border-white shadow-2xl text-yellow-500">
              <h1><i class="fa-solid fa-square-check"></i></h1>
                <h3>Timely Response</h3>
            </div>
            <div className="col-span-4 md:col-span-1 mb-5 text-center bg-secondary bg-opacity-30 border-2 border-white shadow-2xl text-yellow-500">
                <h1>10+</h1>
                <h3>Professional</h3>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SecondView;
