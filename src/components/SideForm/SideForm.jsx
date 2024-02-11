import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { faL } from "@fortawesome/free-solid-svg-icons";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


function ContactForm() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isvalidMobile, setValidMobile] = useState(true);
  const [selectOption, setSelectOption] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false)


  const services = [
    "Accounting",
    "Corporate Tax",
    "VAT",
    "Bussiness Startup Services",
    "Software Solutions",
    "Excise Tax",
    "Other Services",
  ];

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };


  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    setFormSubmitted(true)
    if (!form.current) {
      console.error("Form is not available");
      return;
    }
    // Check if all fields are filled
    const formData = new FormData(form.current);
    const formEntries = Array.from(formData.entries());
    const isFormFilled = formEntries.every(([name, value]) => value.trim() !== "");

    if (!isFormFilled || formEntries[3][1] === "Please Choose one option") {
      console.error("Please fill out all fields");
      return;
    }
    const mobileInput = document.querySelector(".react-tel-input input[type='tel']");
    const mobileNumber = mobileInput ? mobileInput.value : "";
    const mobileInputElement = document.createElement("input");
    mobileInputElement.setAttribute("type", "hidden");
    mobileInputElement.setAttribute("name", "mobile");
    mobileInputElement.setAttribute("value", mobileNumber);

    // Append the mobile number input element to the form
    form.current.appendChild(mobileInputElement);

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-3 py-2 border border-white bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary ${formSubmitted && name.trim() === "" && 'border-red-500'}`}
            />
            {formSubmitted && name.trim() === "" && <p className="text-red-500">Please enter your name</p>}

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
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className={`w-full px-3 py-2 border border-white bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary ${formSubmitted && companyName.trim() === "" && 'border-red-500'}`}
            />
            {formSubmitted && companyName.trim() === "" && <p className="text-red-500">Please enter your company name</p>}

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 border border-white bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary ${formSubmitted && email.trim() === "" && 'border-red-500'}`}
            />
            {formSubmitted && email.trim() === "" && <p className="text-red-500">Please enter your email</p>}

          </div>
          <div className="mb-6">
            <label className="block text-white font-medium mb-2">
              Phone Number

            </label>
            <PhoneInput
              className={`w-full px-3 py-2 border border-white bg-transparent text-black rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary ${formSubmitted && mobile.trim() === "" && 'border-red-500'}`}
              country={"ae"}

              value={mobile}
              onChange={(value) => {
                setMobile(value)
                setValidMobile(validatePhoneNumber(value))
              }}
              inputStyle={{
                background: "transparent",
                border: "none",
                color: "white"
              }}
              buttonStyle={{
                background: "white",
                border: "none",
                marginLeft: "-11px",
                width: "50px"
              }}
              inputProps={{
                required: true,
              }}
            />
            {!isvalidMobile && <p className="text-red-500">Please enter a valid phone number.</p>}
          </div>

          <div className="mb-6">
            <label
              htmlFor="service"
              className="block text-white font-medium mb-2"
            >
              Service
            </label>
            <select
              className={`container p-2 my-1 rounded-md bg-transparent text-white border border-white ${formSubmitted && selectOption.trim() === "Please Choose one option" && 'border-red-500'}`}
              name="service"
              value={selectOption}
              onChange={(e) => {
                const selectedService = e.target.value;
                setSelectOption(selectedService);
              }}
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
            {formSubmitted && (selectOption.trim() === "Please Choose one option" || selectOption.trim() === "") && <p className="text-red-500">Please choose your service</p>}

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
