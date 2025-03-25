import React, { useState } from 'react'

const DonorRegister = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    age: "",
    bloodGroup: "",
    district: "",
    state: "",
    pinCode: "",
    lastDonationMonth: "",
    lastDonationYear: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/donors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className='p-4'>
      <div className='p-4 shadow-lg'>
        <div className='text-white font-[500] text-[29px] py-5 px-4 md:text-[36px] w-full bg-gradient-to-r from-[#B32346] via-[#610834] to-[#46052D]'>
          Register As Donor
        </div>

        <div className='p-8 '>
          <form className="gap-4" onSubmit={handleSubmit}>
            <div className='grid grid-cols-7 items-center mt-7 gap-8'>
            <label className="text-[#4D4D4D] text-right">
              First Name
            </label>
            <input placeholder='First' type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="col-span-6 md:col-span-3 border p-2 rounded w-full  bg-inherit border-[#DADADA]" />
            <label className="text-[#4D4D4D] md:hidden text-right">
              Last Name
            </label>
            <input placeholder='Last name' type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="col-span-6 md:col-span-3 border p-2 rounded w-full  bg-inherit border-[#DADADA]" />
            </div>
            <div className='grid grid-cols-7 items-center mt-7 gap-8'>
            <label className="text-[#4D4D4D] text-right ">
              Phone Number
            </label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border col-span-6 p-2 rounded w-full  bg-inherit border-[#DADADA]" />
            </div>
            <div className='grid grid-cols-7 items-center mt-7 gap-8'>
            <label className="text-[#4D4D4D] text-right">
              E-mail
            </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 rounded w-full col-span-6 bg-inherit border-[#DADADA]" />
            </div>
            <div className='grid grid-cols-7 items-center mt-7 gap-8'>
            <label className="text-[#4D4D4D] text-right ">
              Address
            </label>
            <textarea rows={5} name="address" value={formData.address} onChange={handleChange} className="border p-2 rounded w-full col-span-6 md:col-span-3 bg-inherit border-[#DADADA]" />
            <div className='col-span-7 md:col-span-3'>
              <div className='grid gap-3 grid-cols-4'>
            <label>
              Age
            </label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} className="border p-2 col-span-3 rounded w-full  bg-inherit border-[#DADADA]" />
            <label>
              Blood Group
            </label>
            <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="border p-2 col-span-3 rounded w-full  bg-inherit border-[#DADADA]">
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            </div>
            </div>
            </div>
            <div className='grid grid-cols-7 items-center mt-7 gap-8'>
            <label className='text-[#4D4D4D] text-right'> 
              District
            </label>
            <select name="district" value={formData.district} onChange={handleChange} className="border col-span-6 md:col-span-3 p-2 rounded w-full  bg-inherit border-[#DADADA]">
              <option value="">Select</option>
            </select>
            <label className='text-[#4D4D4D] text-right'>
              State
            </label>
            <select name="state" value={formData.state} onChange={handleChange} className="border p-2 col-span-6 md:col-span-2 rounded w-full  bg-inherit border-[#DADADA]">
              <option value="">Select</option>
            </select>
            </div>
            <div className='grid grid-cols-7 items-center mt-7 gap-8'>
            <label className="text-[#4D4D4D] text-right ">
              Pin Code
            </label>
            <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} className="border p-2 col-span-6 md:col-span-3 rounded w-full  bg-inherit border-[#DADADA]" />
            </div>
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mr-2 mt-10" />
            I agree to the terms and conditions.
            <div>
            <button type="submit" className=" bg-blue-500 mt-10 text-white p-2 rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DonorRegister;
