import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";

const PeakLoad = () => {
  // State to manage multiple field sets
  const [fieldSets, setFieldSets] = useState([{ id: Date.now() }]); // Initialize with one set

  // Function to handle adding a new set of fields
  const addFieldSet = () => {
    if (fieldSets.length < 6) {
      // Limit to 6 sets
      setFieldSets([
        ...fieldSets,
        { id: Date.now() }, // Use a unique id for each set
      ]);
    }
  };

  // Function to handle changes in input fields
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setFieldSets(
      fieldSets.map((fieldSet) =>
        fieldSet.id === id ? { ...fieldSet, [name]: value } : fieldSet
      )
    );
  };

  return (
    <div className="relative">
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
        Peak Load
      </h2>
      {fieldSets.map((fieldSet) => (
        <div
          key={fieldSet.id}
          className="flex gap-5 w-full max-[1000px]:flex-col mb-5"
        >
          <div className="flex-grow">
            <div className="flex gap-5 w-full max-[1000px]:flex-col">
              <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                <div className="border-r border-r-[#8A6112] p-2">
                  <FaRegUser className="text-[#8A6112] ml-3" />
                </div>
                <input
                  type="text"
                  name="equipmentName"
                  value={fieldSet.equipmentName || ""}
                  onChange={(e) => handleChange(e, fieldSet.id)}
                  placeholder="Equipment Name"
                  className="w-full px-4 py-5 font-[400] rounded-md text-[16px] shadow-lg placeholder-[#8A6112] outline-none"
                />
              </div>

              <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                <div className="border-r border-r-[#8A6112] p-2">
                  <FaRegUser className="text-[#8A6112] ml-3" />
                </div>
                <input
                  type="number"
                  name="capacity"
                  value={fieldSet.capacity || ""}
                  onChange={(e) => handleChange(e, fieldSet.id)}
                  placeholder="Watt Capacity of"
                  className="px-4 py-5 text-[16px] font-[400] w-full rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-5 w-full max-[1000px]:flex-col mt-5">
              <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                <div className="border-r border-r-[#8A6112] p-2">
                  <FaRegUser className="text-[#8A6112] ml-3" />
                </div>
                <input
                  type="number"
                  name="operation"
                  value={fieldSet.operation || ""}
                  onChange={(e) => handleChange(e, fieldSet.id)}
                  placeholder="Hours of Operation/Day"
                  className="px-4 py-5 text-[16px] font-[400] w-full rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
                />
              </div>

              <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                <div className="border-r border-r-[#8A6112] p-2">
                  <FaRegUser className="text-[#8A6112] ml-3" />
                </div>
                <input
                  type="number"
                  name="equipments"
                  value={fieldSet.equipments || ""}
                  onChange={(e) => handleChange(e, fieldSet.id)}
                  placeholder="No. of Equipment"
                  className="px-4 py-5 text-[16px] font-[400] w-full rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Add Button */}
          {fieldSets.length < 6 && (
            <button
              onClick={addFieldSet}
              className="flex items-center justify-center w-12 h-12 bg-[#004A9C] text-white rounded-full text-2xl"
              style={{ marginTop: "auto" }}
            >
              +
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PeakLoad;
