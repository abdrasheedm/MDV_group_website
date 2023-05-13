import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import VATRegistrationServices from './pages/Services/VAT Services/VATRegistrationServices'
import Footer from './components/Footer/Footer'
import VATReturnFiling from './pages/Services/VAT Services/VARRuturnFiling'
import VATRefund from './pages/Services/VAT Services/VATRefund'
import VATDeregistration from './pages/Services/VAT Services/VATDeregistration'
import VATPenalty from './pages/Services/VAT Services/VATPenalty'
import VATVolantaryDisclosure from './pages/Services/VAT Services/VATVoluntaryDisclosure'
import VATCompliantBookKeeping from './pages/Services/VAT Services/VATCompliant'
import Nav from './components/Navbar/nav'
import ExsiceTaxRegistration from './pages/Services/Excise Tax/TaxRegistration'
import ExciseTaxRefund from './pages/Services/Excise Tax/TaxRefund'
import ExciseTaxReturnFiling from './pages/Services/Excise Tax/TaxReturnFiling'
import ExciseTaxDeregistration from './pages/Services/Excise Tax/TaxDergistration'
import ExciseStockAudit from './pages/Services/Excise Tax/StockAudit'
import ExciseTaxPenaltyReconsideration from './pages/Services/Excise Tax/TaxPenaltyReconsideration'
import ExciseTaxCompliance from './pages/Services/Excise Tax/TaxCompliance'
import ExcisePreAuditHealthCheck from './pages/Services/Excise Tax/PreAditHealthCheck'
import ExciseTaxImplementation from './pages/Services/Excise Tax/TaxImplementaion'
import CorporateTaxImplementationAndTraining from './pages/Services/CorporateTax/ImplementationAndTraining'
import CorporateTaxServices from './pages/Services/CorporateTax/TaxServices'
import CorporateTaxPlanningServices from './pages/Services/CorporateTax/TaxPlanningServices'
import AccountingAndBookKeeping from './pages/Services/Accounting/BookKeeping'
import BackLogAccountingService from './pages/Services/Accounting/BackLogAccounting'
import IFRSImplementationAndConsultancyService from './pages/Services/Accounting/IFRSImplementation'
import ExpertAccountingSupervisionService from './pages/Services/Accounting/ExpertAccountingSuperVision'



function App() {

  return (
    <>
      <Navbar />
      {/* <Nav /> */}
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='service/vat-registration-service/' element={<VATRegistrationServices />} />
      <Route path='service/vat-return-filing-service/' element={<VATReturnFiling />} />
      <Route path='service/vat-refund-service/' element={<VATRefund />} />
      <Route path='service/vat-deregistration-service/' element={<VATDeregistration />} />
      <Route path='service/vat-penalty-reconsideration/' element={<VATPenalty />} />
      <Route path='service/vat-voluntary-disclosure/' element={<VATVolantaryDisclosure />} />
      <Route path='service/vat-compliant-bookkeeping/' element={<VATCompliantBookKeeping />} />


      <Route path='service/excise-tax-registration/' element={<ExsiceTaxRegistration />} />
      <Route path='service/excise-tax-return-filing/' element={<ExciseTaxReturnFiling />} />
      <Route path='service/excise-tax-refund/' element={<ExciseTaxRefund />} />
      <Route path='service/excise-tax-deregistration/' element={<ExciseTaxDeregistration />} />
      <Route path='service/excise-stock-audit/' element={<ExciseStockAudit />} />
      <Route path='service/excise-tax-penalty-reconsideration/' element={<ExciseTaxPenaltyReconsideration />} />
      <Route path='service/excise-tax-compliance/' element={<ExciseTaxCompliance />} />
      <Route path='service/excise-pre-audit-health-check/' element={<ExcisePreAuditHealthCheck />} />
      <Route path='service/excise-tax-implementation-and-training/' element={<ExciseTaxImplementation />} />


      <Route path='service/corporate-tax-implementation-and-training/' element={<CorporateTaxImplementationAndTraining />} />
      <Route path='service/corporate-tax-services/' element={<CorporateTaxServices />} />
      <Route path='service/corporate-tax-planning-services/' element={<CorporateTaxPlanningServices />} />
      
      
      <Route path='service/accounting-service-bookkeeping-firm/' element={<AccountingAndBookKeeping />} />
      <Route path='service/backlog-accounting-service/' element={<BackLogAccountingService />} />
      <Route path='service/ifrs-implementation-consultancy-service/' element={<IFRSImplementationAndConsultancyService />} />
      <Route path='service/expert-accounting-supervision-service/' element={<ExpertAccountingSupervisionService />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
