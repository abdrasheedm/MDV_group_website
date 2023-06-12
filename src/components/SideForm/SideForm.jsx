import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectOption, setSelectOption] = useState("");

  const [captcha, setCaptcha] = useState("");

  const services = [
    "Accounting",
    "Corporate Tax",
    "VAT",
    "Bussiness Startup Services",
    "Software Solutions",
    "Excise Tax",
    "Other Services",
  ];

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current)
    
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Message sent successfully!");
          e.target.reset();
        },
        () => {
          console.log("Sorry, This didn't work!");
        }
      );
  };

  return (
    <div className="col-span-3 md:col-span-1">
      <div className="bg-white bg-opacity-10 px-10 py-10 my-10">
        <h4 className="text-secondary">Get Free Consultation (25 Minutes)</h4>
        <form ref={form} className="max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-white bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="companyName"
              className="block text-white font-medium mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="company_name"
              // value={companyName}
              // onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-3 py-2 border border-white bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-white bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="mobile"
              className="block text-white font-medium mb-2"
            >
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              // value={mobile}
              // onChange={(e) => setMobile(e.target.value)}
              className="w-full px-3 py-2 border border-white bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="service"
              className="block text-white font-medium mb-2"
            >
              Service
            </label>
            <select
              className="container p-2 my-1 rounded-md bg-transparent text-white border border-white"
              name="service"
              // value={selectOption}
              // onChange={(e) => {
              //   const selectedService = e.target.value;
              //   setSelectOption(selectedService);
              // }}
            >
              <option className="bg-gray-900 ">Please Choose one option</option>
              {services.map((service, index) => {
                return (
                  <option className="text-white bg-gray-900" value={service} key={index} onClick={() => setSelectOption(service)}>
                    {service}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-secondary bg-opacity-30 text-white px-8 py-3 border-2 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
