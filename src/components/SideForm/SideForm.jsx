import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      name,
      companyName,
      email,
      mobile,
      selectOption,
      message,
      captcha,
    });
    // TODO: Add logic to submit form data to server or API
  };

  return (
    <div className="col-span-3 md:col-span-1">
      <form className="max-w-md" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-gray-700 font-medium mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="companyName"
          className="block text-gray-700 font-medium mb-2"
        >
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">
          Mobile
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      </form>
    </div>
  )
}
export default ContactForm