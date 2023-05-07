import React from "react";
import image1 from "../../assets/37531.jpg";
import AccountingService from '../../assets/AccountingService.png'
import TaxService from '../../assets/TaxService.png'
import AuditingService from '../../assets/AuditingService.png'
import StartupService from '../../assets/StartupService.png'
import SoftwareSolution from '../../assets/SofwareSolution.png'
import ComplianceService from '../../assets/CompilianceService.png'

function Services() {
  return (
    <div
      style={{ backgroundImage: `url(${image1})`, backgroundSize: "cover" }}
      className="min-h-screen"
    >
      <div className="container mx-auto text-white py-20 ">
        <div className="bg-gray-400 bg-opacity-30 px-10 py-20">
          <h1 className="text-4xl">
            <span className="border-b-4 border-secondary">Our Services</span>
          </h1>
          <div className="grid grid-cols-3 ">
            <div className="col-span-1 bg-white text-gray-900 bg-opacity-80 border-2">
              <img src={AccountingService} alt="" className="h-16"/>
              <h2>Accounting Services</h2>
              <p>Expert accounting services for accurate bookkeeping, financial reporting, and regulatory compliance. Make informed decisions with ease... <span>Read More</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
