import React, { useState } from 'react';
import toast from 'react-hot-toast';
// import { Bars } from 'react-loader-spinner';
import axios from 'axios';

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

  const districts = ["Other", "Ludhiana", "Mumbai", "Hyderabad", "Kolkata", "Bengaluru", "Jaipur", "Kanpur", "Ghaziabad", "Visakhapatnam", "Bhopal", "Patna", "Agra", "Meerut", "Jamshedpur", "Nashik", "Faridabad", "Kollam", "Rajkot", "Jabalpur", "Thane", "Varanasi", "Gwalior", "Ranchi", "Pimpri-Chinchwad", "Howrah", "Allahabad", "Trichy", "Gurgaon", "Jalandhar", "Aurangabad", "Vijayawada", "Guwahati", "Hubli", "Patiala", "Mysore", "Mangalore", "Navi Mumbai", "Bhubaneswar", "Guntur", "Noida", "Cuttack", "Bhiwandi", "Bhilai", "Nagercoil", "Agartala", "Mira-Bhayandar", "Jhansi", "Mumbra", "Durgapur", "Asansol", "Ulhasnagar", "Jalgaon", "Kurnool", "Junagadh", "Bhatpara", "Sangli", "Gulbarga", "Malegaon", "Belgaum", "Jalna", "South Dumdum", "Maheshtala", "Nellore", "Davangere", "Sikar", "Sasaram", "Panihati", "Kadapa", "Rajpur Sonarpur", "Muzaffarpur", "Tharad", "Satara", "Thrissur", "Rajamahendravaram", "Kamarhati", "Nizamabad", "Ambattur", "Purnia", "Kakinada", "Siliguri", "Kulti", "Hugli-Chinsurah", "Bardhaman", "Satna", "Rajarhat", "Ananthapuram", "Bally", "Ichalkaranji", "Rapar", "Baranagar", "Hassan", "Ramagundam", "Barasat", "Pali", "Avadi", "Miryalaguda", "Vizianagaram", "Farrukhabad", "Tirupathi", "Others"];

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
    type: "receiver",
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
        () => {
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
        return;
      }

      if (!formData.latitude || !formData.longitude) {
        toast.error("Location is required. Please grant location access.");
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
        pincode: formData.pinCode,
        latitude: formData.latitude,
        longitude: formData.longitude,
        password: formData.password,
        role: formData.type,
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
    <div className="p-4">
      <div className="p-4 shadow-lg">
        <div className="text-white font-[500] text-[29px] py-5 px-4 md:text-[36px] w-full bg-gradient-to-r from-[#B32346] via-[#610834] to-[#46052D]">
          Register As User
        </div>

        <div className="p-8">
          <form className="gap-4" onSubmit={handleSubmit}>
            {/* -- Keep all your input fields here, as you already have them well structured -- */}

            {/* Consent */}
            <div className="mt-10">
              <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mr-2" />
              I agree to the terms and conditions.
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 mt-10 text-white px-[12px] py-3 rounded"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonorRegister;
