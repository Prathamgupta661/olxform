import { useState } from "react";
import PhotoUploadGrid from "./PhotoUploadGrid";


const options = {
  types: [
    "Flats / Apartments",
    "Independent / Builder Floors",
    "Farm House",
    "House & Villa",
  ],
  bhk: ["1", "2", "3", "4", "4+"],
  bathrooms: ["1", "2", "3", "4", "4+"],
  furnishing: ["Furnished", "Semi-Furnished", "Unfurnished"],
  status: ["New Launch", "Ready to Move", "Under Construction"],
  listby: ["Builder", "Owner", "Dealer"],
  carparking: ["1", "2", "3", "4", "4+"],
};

export default function PropertyForm() {
  const [selected, setSelected] = useState({
    type: "Farm House",
    bhk: "3",
    bathrooms: "4+",
    furnishing: "Semi-Furnished",
    status: "Under Construction",
  });
  const [state, setState] = useState("");
  const [name, setName] = useState("User");
  const [phone, setPhone] = useState();

  const handleSelect = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  const isFormValid = () => {
    return (
      selected.bhk &&
      selected.status &&
      state &&
      name &&
      phone
      
    );
  };

  const renderOptions = (key, label, values) => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <button
            key={value}
            className={`px-4 py-2 border rounded ${
              selected[key] === value
                ? "bg-blue-100 border-blue-500"
                : "bg-white"
            }`}
            onClick={() => handleSelect(key, value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className="m-2">
        <h1 className="font-bold text-[24px] text-center">POST YOUR AD</h1>
      </div>
      <div className="p-6 lg:w-4xl mx-auto bg-white border border-slate-200 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Include Some Details</h2>
        {renderOptions("type", "Type *", options.types)}
        {renderOptions("bhk", "BHK", options.bhk)}
        {renderOptions("bathrooms", "Bathrooms", options.bathrooms)}
        {renderOptions("furnishing", "Furnishing", options.furnishing)}
        {renderOptions("status", "Project Status", options.status)}
        {renderOptions("listby", "Listed By", options.listby)}
        <div className="mb-4 flex flex-col">
          <label htmlFor="" className="font-semibold mb-2">
            Super Builtup area sqft *
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border border-black mr-[35%] px-[12px] h-[48px] font-[16px]"
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="" className="font-semibold mb-2">
            Carpet Area sqft *
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border border-black mr-[35%] px-[12px] h-[48px] font-[16px]"
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="" className="font-semibold mb-2">
            Maintenance (Monthly)
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border border-black mr-[35%] px-[12px] h-[48px] font-[16px]"
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="" className="font-semibold mb-2">
            Total Floors

          </label>
          <input
            type="text"
            name=""
            id=""
            className="border border-black mr-[35%] px-[12px] h-[48px] font-[16px]"
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="" className="font-semibold mb-2">
            Floor No.

          </label>
          <input
            type="text"
            name=""
            id=""
            className="border border-black mr-[35%] px-[12px] h-[48px] font-[16px]"
            required
          />
        </div>
        {renderOptions("carparking", "Car Parking", options.carparking)}

        <div>
            <label htmlFor="" className="font-semibold mb-4">
                Facing
            </label>
        </div>
        <select name="" id="" className="border border-black w-[70%] py-[10px] px-[12px] h-[48px] font-[16px]" required>
            <option value="">Select a value</option>
            <option value="East">East</option>
            <option value="West">West</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="North-East">North-East</option>
            <option value="North-West">North-West</option>
            <option value="South-East">South-East</option>
            <option value="South-West">South-West</option>
        </select>
        <PhotoUploadGrid/>
         <hr className="my-6" />
        <h1 className="font-bold text-2xl mb-4">Confirm Your Location</h1>
        <div className="mb-4">
          <label htmlFor="state" className="font-semibold mb-2 block">
            State *
          </label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border border-black w-full py-[10px] px-[12px] h-[48px] font-[16px]"
            required
          >
            <option value="">Select a state</option>
            <option value="Delhi">Delhi</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </select>
          {!state && (
            <p className="text-red-500 text-sm mt-1">This field is mandatory</p>
          )}
        </div>

        <hr className="my-6" />
        <h1 className="font-bold text-2xl mb-4">Review Your Details</h1>
        <div className="mb-4 flex items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <div className="ml-4">
            <label htmlFor="name" className="font-semibold mb-2 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-black px-[12px] h-[48px] font-[16px] w-full"
              maxLength={30}
            />
            <p className="text-gray-500 text-sm mt-1">
              {name.length} / 30 characters
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="font-semibold mb-2 block">
            Mobile Phone Number *
          </label>
          <div className="flex">
            <span className="border border-black px-4 py-2 bg-gray-100">+91</span>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-black px-[12px] h-[48px] font-[16px] flex-1"
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          className={`mt-4 px-6 py-2 rounded ${
            isFormValid() ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isFormValid()}
        >
          POST
        </button>

      </div>
    </div>
  );
}
