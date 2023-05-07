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
            <div className="col-span-1 bg-white bg-opacity-95 text-gray-900 border-2 mx-10 p-10 mb-10">
              <img src={AccountingService} alt="" className="h-16"/>
              <h2>Accounting Services</h2>
              <p className="font-medium">Expert accounting services for accurate bookkeeping, financial reporting, and regulatory compliance. Make informed decisions with ease... <span className="font-bold">Read More</span> </p>
            </div>
            <div className="col-span-1 bg-white bg-opacity-95 text-gray-900 border-2 mx-10 p-10 mb-10">
              <img src={TaxService} alt="" className="h-16"/>
              <h2>Tax Consultancy Services</h2>
              <p className="font-medium">Comprehensive tax consultancy for VAT, corporate tax, and excise tax compliance. Navigate complex regulations with expert guidance... <span className="font-bold">Read More</span> </p>
            </div>
            <div className="col-span-1 bg-white bg-opacity-95 text-gray-900 border-2 mx-10 p-10 mb-10">
              <img src={AuditingService} alt="" className="h-16"/>
              <h2>Auditing Services
</h2>
              <p className="font-medium">Professional auditing services to assess financial statements, internal controls, and risk management. Ensure regulatory compliance and valuable insights... <span className="font-bold">Read More</span> </p>
            </div>
            <div className="col-span-1 bg-white bg-opacity-95 text-gray-900 border-2 mx-10 p-10 mb-10">
              <img src={StartupService} alt="" className="h-16"/>
              <h2>Business Setup Services
</h2>
              <p className="font-medium">Company formation in Dubai/UAE. Expert assistance for company formation, licensing, and regulatory processes... <span className="font-bold">Read More</span> </p>
            </div>
            <div className="col-span-1 bg-white bg-opacity-95 text-gray-900 border-2 mx-10 p-10 mb-10">
              <img src={SoftwareSolution} alt="" className="h-16"/>
              <h2>Software Solutions
</h2>
              <p className="font-medium">Zoho Authorized Partner offering tailored software implementation, customization, and support. Empower your business with cutting-edge technol.. <span className="font-bold">Read More</span> </p>
            </div>
            <div className="col-span-1 bg-white bg-opacity-95 text-gray-900 border-2 mx-10 p-10 mb-10">
              <img src={ComplianceService} alt="" className="h-16"/>
              <h2>Compliance Services
</h2>
              <p className="font-medium">Specialized compliance services for AML, UBO, and ESR regulations. Ensure adherence and minimize risk with expert support... <span className="font-bold">Read More</span> </p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
