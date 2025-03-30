import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Bars } from 'react-loader-spinner';
import axios from "axios";

const DonorRegister = () => {
  const statesAndUTs = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
  ];

  const districts = ["Other", "Ludhiana","Mumbai", "Hyderabad", "Kolkata", "Bengaluru", "Jaipur", "Kanpur", "Ghaziabad", "Visakhapatnam", "Bhopal", "Patna", "Agra", "Meerut", "Jamshedpur", "Nashik", "Faridabad", "Kollam", "Rajkot", "Jabalpur", "Thane", "Varanasi", "Gwalior", "Ranchi", "Pimpri-Chinchwad", "Howrah", "Allahabad", "Trichy", "Gurgaon", "Jalandhar", "Aurangabad", "Vijayawada", "Guwahati", "Hubli", "Patiala", "Mysore", "Mangalore", "Navi Mumbai", "Bhubaneswar", "Guntur", "Noida", "Cuttack", "Bhiwandi", "Bhilai", "Nagercoil", "Agartala", "Mira-Bhayandar", "Jhansi", "Mumbra", "Durgapur", "Asansol", "Ulhasnagar", "Jalgaon", "Kurnool", "Junagadh", "Bhatpara", "Sangli", "Gulbarga", "Malegaon", "Belgaum", "Jalna", "South Dumdum", "Maheshtala", "Nellore", "Davangere", "Sikar", "Sasaram", "Panihati", "Kadapa", "Rajpur Sonarpur", "Muzaffarpur", "Tharad", "Satara", "Thrissur", "Rajamahendravaram", "Kamarhati", "Nizamabad", "Ambattur", "Purnia", "Kakinada", "Siliguri", "Kulti", "Hugli-Chinsurah", "Bardhaman", "Satna", "Rajarhat", "Ananthapuram", "Bally", "Ichalkaranji", "Rapar", "Baranagar", "Hassan", "Ramagundam", "Barasat", "Pali", "Avadi", "Miryalaguda", "Vizianagaram", "Farrukhabad", "Tirupathi", "Others"];

  const [isLoading, setIsLoading] = useState(false);

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
    password: "",
    consent: false,
    latitude: "",
    longitude: "",
  });

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          toast.success("Location captured successfully!");
        },
        (error) => {
          toast.error("Location access denied. Please allow location access.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      if (!formData.consent) {
        toast.error("Consent to terms and conditions is required.");
        setIsLoading(false);
        return;
      }
  
      if (!formData.latitude || !formData.longitude) {
        toast.error("Location is required. Please grant location access.");
        setIsLoading(false);
        return;
      }
  
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        age: formData.age,
        bloodGroup: formData.bloodGroup,
        district: formData.district,
        state: formData.state,
        pincode: formData.pinCode, // Matches backend spelling
        latitude: formData.latitude,
        longitude: formData.longitude,
        password: "defaultPassword123", // Replace with actual password input field
        role: "donor",
      };
  
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/registeruser`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Registration successful!");

      console.log(response.data);
    } catch (error) {
      toast.error(error.message || "An error occurred while registering.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className='p-4'>
      <div className='p-4 shadow-lg'>
        <div className='text-white font-[500] text-[29px] py-5 px-4 md:text-[36px] w-full bg-gradient-to-r from-[#B32346] via-[#610834] to-[#46052D]'>
          Register As Donor
        </div>

        <div className='p-8 '>
          <form className="gap-4" type="POST" onSubmit={handleSubmit}>
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
                {districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              <label className='text-[#4D4D4D] text-right'>
                State
              </label>
              <select name="state" value={formData.state} onChange={handleChange} className="border p-2 col-span-6 md:col-span-2 rounded w-full  bg-inherit border-[#DADADA]">
                <option value="">Select</option>
                {statesAndUTs.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div className='grid grid-cols-7 items-center mt-7 gap-8'>
              <label className="text-[#4D4D4D] text-right ">
                Pin Code
              </label>
              <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} className="border p-2 col-span-6 md:col-span-2 rounded w-full  bg-inherit border-[#DADADA]" />
              <label className="text-[#4D4D4D] text-right ">
                Set Password
              </label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="border p-2 col-span-6 md:col-span-2 rounded w-full  bg-inherit border-[#DADADA]" />
            </div>
            <div className='grid grid-cols-7 items-center mt-7 gap-8'>
              <label className="text-[#4D4D4D] text-right">
                Location
              </label>
              <div className="col-span-6">
                <button
                  type="button"
                  onClick={getLocation}
                  className="bg-green-500 text-white p-2 rounded"
                >
                  Get Location
                </button>
                {formData.latitude && formData.longitude && (
                  <p className="mt-2 text-sm text-gray-600">
                    📍 {formData.latitude}, {formData.longitude}
                  </p>
                )}
              </div>
            </div>
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mr-2 mt-10" />
            I agree to the terms and conditions.
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className=" bg-blue-500 mt-10 text-white px-[12px] py-3 rounded">
                {isLoading ?
                  <Bars
                    height="30"
                    width="30"
                    color="#6A0B37"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                  : "Submit"
                }</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DonorRegister;
