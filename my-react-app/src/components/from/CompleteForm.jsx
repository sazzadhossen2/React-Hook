import React, { useState } from 'react';

export default function CompleteForm() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    contact: '',
    subject: '',
    resume: null,
    url: '',
    about: '',
  };

  const [formData, setFormData] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value, type, files } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === 'file' ? files[0] : value,
  //   }));
  // };
  const handleChange = (e) => {
   setFormData({...formData,[e.target.name]:e.target.value})
  };


  const handleReset = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with API call or further processing
    // const data = new FormData();
    // Object.entries(formData).forEach(([key, val]) => {
    //   data.append(key, val);
    // });
    console.log('Submitting:', formData);
    // // reset after submit
    handleReset();
  };

  return (
    <div className="p-6 md:p-10 shadow-lg rounded-2xl border border-gray-200 max-w-lg mx-auto bg-white">
      <h1 className="text-3xl font-extrabold text-blue-600 text-center mb-6">
        Complete React Form
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Fields */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="block mb-1 font-medium">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="flex-1">
            <label htmlFor="lastName" className="block mb-1 font-medium">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
        </div>

        {/* Contact & Email */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="flex-1">
            <label htmlFor="contact" className="block mb-1 font-medium">
              Contact Number
            </label>
            <input
              id="contact"
              name="contact"
              type="tel"
              placeholder="Enter Contact No."
              value={formData.contact}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <div className="flex items-center gap-4">
            {['Male', 'Female', 'Others'].map((g) => (
              <label key={g} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                  className="form-radio"
                  required
                />
                <span>{g}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block mb-1 font-medium">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            required
          >
            <option value="">Select a Subject</option>
            <option value="math">Math</option>
            <option value="english">English</option>
            <option value="physic">Physics</option>
          </select>
        </div>

        {/* Resume Upload */}
        <div>
          <label htmlFor="resume" className="block mb-1 font-medium">
            Upload Resume
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            onChange={handleChange}
            className="w-full"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>

        {/* URL & About */}
        <label htmlFor="url" className="block mb-1 font-medium">
          Portfolio URL
        </label>
        <input
          id="url"
          name="url"
          type="url"
          placeholder="Enter Portfolio or LinkedIn URL"
          value={formData.url}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />

        <div>
          <label htmlFor="about" className="block mb-1 font-medium">
            About Yourself
          </label>
          <textarea
            id="about"
            name="about"
            placeholder="Tell us something about yourself..."
            value={formData.about}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 h-24 resize-none focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 border rounded-lg hover:bg-gray-100"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
