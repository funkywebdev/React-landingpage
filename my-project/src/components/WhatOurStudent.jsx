import React from "react";
import { StudentSayData } from "../Mockdata/studentsay";

const WhatOurStudent = () => {
  return (
    <div className="px-6 py-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="font-bold text-[#163156] text-[20px] uppercase">
          WHAT OUR STUDENTS SAY
        </p>
        <p className="text-[#163156] text-sm sm:text-base mt-2">
          Real stories from learners who transformed their careers with TechPro
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {StudentSayData.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[350px] border border-dashed border-[#163156] rounded-2xl p-6 bg-white flex flex-col sm:flex-row sm:items-center gap-5 text-left transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
          
            <div className="flex justify-center flex-shrink-0 sm:justify-start">
              <img
                src={item.img}
                alt={item.name}
                className="object-cover w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#163156]/20"
              />
            </div>

          
            <div className="flex-1 text-center sm:text-left">
              <p className="font-semibold text-lg text-[#163156]">
                {item.name}
              </p>
              <p className="mb-2 text-sm text-gray-500">{item.courses}</p>

              <div className="flex justify-center sm:justify-start">
                <img
                  src={item.img2}
                  alt="iconpack"
                  className="w-5 h-5 my-2"
                />
              </div>

              <p className="text-sm italic leading-relaxed text-gray-700">
                “{item.description}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatOurStudent;
