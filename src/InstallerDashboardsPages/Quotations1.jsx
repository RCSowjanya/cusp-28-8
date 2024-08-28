import React from "react";

const Quotations1 = () => {
  return (
    <div className="border border-gray-400 rounded-md">
      <div className="flex items-center justify-between p-2">
        <div className="space-y-1">
          <h5 className="text-[12px]">Quote No</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">98864</p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Customer Name</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">XXXXX</p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Property Type</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">
            Commercial/Residential
          </p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Date</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">28-8-2024</p>
        </div>
        <div className="">
          <button className="bg-green-500 rounded-md text-white text-[12px] py-2 px-5">
            Preview & Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotations1;
