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
import AffordableAccountigFirm from './pages/Services/Accounting/AffordabelAccounting'
import ManagementAccounting from './pages/Services/Accounting/ManagementAccounting'
import BankReconciliationStatementService from './pages/Services/Accounting/BankReconciliationStatement'
import ExternalAuditServices from './pages/Services/Audit/ExternalAuditService'
import TaxAudit from './pages/Services/Audit/TaxAudit'
import InternalAduditService from './pages/Services/Audit/InternalAuditServices'
import FinancialAuditService from './pages/Services/Audit/FinancialAuditService'
import StockAuditService from './pages/Services/Audit/StockAuditServices'
import UBOCompliance from './pages/Services/Compliance/UBOCompliance'
import EconomicSubstanceRegulation from './pages/Services/Compliance/EconomicsSubstance'
import AntiMoneyLaundering from './pages/Services/Compliance/AntiMoneyLaundering'
import CompanyFormation from './pages/Services/BussinessStartup/CompanyFormation'
import FinancialFeasibilyStudy from './pages/Services/BussinessStartup/FinancialFeasibiliy'
import ProfessionalBussinessValuation from './pages/Services/BussinessStartup/ProfessionalBussiness'
import ICVCertification from './pages/Services/BussinessStartup/ICVCertification'
import AccountingSoftware from './pages/Services/SoftwareSolution/AccountingSoftware'
import CRMImplementationAndTraining from './pages/Services/SoftwareSolution/CRMImplementation'
import AccountingSystemAnalysis from './pages/Services/SoftwareSolution/AccountingSystemAnalysis'



function App() {

  return (
    <>
      <Navbar />
      {/* <Nav /> */}
      <Routes>
      <Route path='/' element={<Home />} />

      {/* VAT Tax Services */}
      <Route path='service/vat-registration-service/' element={<VATRegistrationServices />} />
      <Route path='service/vat-return-filing-service/' element={<VATReturnFiling />} />
      <Route path='service/vat-refund-service/' element={<VATRefund />} />
      <Route path='service/vat-deregistration-service/' element={<VATDeregistration />} />
      <Route path='service/vat-penalty-reconsideration/' element={<VATPenalty />} />
      <Route path='service/vat-voluntary-disclosure/' element={<VATVolantaryDisclosure />} />
      <Route path='service/vat-compliant-bookkeeping/' element={<VATCompliantBookKeeping />} />

      {/* Excise Tax Services */}

      <Route path='service/excise-tax-registration/' element={<ExsiceTaxRegistration />} />
      <Route path='service/excise-tax-return-filing/' element={<ExciseTaxReturnFiling />} />
      <Route path='service/excise-tax-refund/' element={<ExciseTaxRefund />} />
      <Route path='service/excise-tax-deregistration/' element={<ExciseTaxDeregistration />} />
      <Route path='service/excise-stock-audit/' element={<ExciseStockAudit />} />
      <Route path='service/excise-tax-penalty-reconsideration/' element={<ExciseTaxPenaltyReconsideration />} />
      <Route path='service/excise-tax-compliance/' element={<ExciseTaxCompliance />} />
      <Route path='service/excise-pre-audit-health-check/' element={<ExcisePreAuditHealthCheck />} />
      <Route path='service/excise-tax-implementation-and-training/' element={<ExciseTaxImplementation />} />

      {/* Corporate Tax Services */}

      <Route path='service/corporate-tax-implementation-and-training/' element={<CorporateTaxImplementationAndTraining />} />
      <Route path='service/corporate-tax-services/' element={<CorporateTaxServices />} />
      <Route path='service/corporate-tax-planning-services/' element={<CorporateTaxPlanningServices />} />
      
      {/* Accounting Services */}
      
      <Route path='service/accounting-service-bookkeeping-firm/' element={<AccountingAndBookKeeping />} />
      <Route path='service/backlog-accounting-service/' element={<BackLogAccountingService />} />
      <Route path='service/ifrs-implementation-consultancy-service/' element={<IFRSImplementationAndConsultancyService />} />
      <Route path='service/expert-accounting-supervision-service/' element={<ExpertAccountingSupervisionService />} />
      <Route path='service/affordable-accounting-firm/' element={<AffordableAccountigFirm />} />
      <Route path='service/management-accounting-service/' element={<ManagementAccounting />} />
      <Route path='service/bank-reconciliation-statement-service/' element={<BankReconciliationStatementService />} />

      {/* Audit Services */}

      <Route path='service/external-audit-services-in-dubai/' element={<ExternalAuditServices />} />
      <Route path='service/tax-audit/' element={<TaxAudit />} />
      <Route path='service/internal-audit-services-in-dubai/' element={<InternalAduditService />} />
      <Route path='service/financial-audit-service/' element={<FinancialAuditService />} />
      <Route path='service/stock-audit-service/' element={<StockAuditService />} />

      {/* Compliance Services */}

      <Route path='service/ubo-compliance/' element={<UBOCompliance />} />
      <Route path='service/economic-substance-regulations-services/' element={<EconomicSubstanceRegulation />} />
      <Route path='service/anti-money-laundering/' element={<AntiMoneyLaundering />} />


      {/* Bussiness Startup Services */}

      <Route path='service/company-formation-services/' element={<CompanyFormation />} />
      <Route path='service/financial-feasibility-study-service/' element={<FinancialFeasibilyStudy />} />
      <Route path='service/professional-bussiness-valuation-service/' element={<ProfessionalBussinessValuation />} />
      <Route path='service/icv-certification-service/' element={<ICVCertification />} />


      {/* Software Solutions */}
      <Route path='service/accounting-softwares-erp-implementaion/' element={<AccountingSoftware />} />
      <Route path='service/erm-implementation-and-training/' element={<CRMImplementationAndTraining />} />
      <Route path='service/accounting-system-analysis-and-implementaion/' element={<AccountingSystemAnalysis />} />



      </Routes>
      <Footer />
    </>
  )
}

export default App
