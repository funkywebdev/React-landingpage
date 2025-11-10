import React from 'react'
import { whyTechproData } from '../Mockdata/whytechprodata'


const WhyTechpro = () => {
  return (
    <div className="py-6 text-center">
      <div className="max-w-[700px] mx-auto mb-10 px-4">
        <p className="font-bold text-[#163156] text-xl">WHY TECHPRO</p>
        <p className="mt-2 font-light text-gray-600">
          We provide everything you need to succeed in the tech industry, from expert guidance to real-world experience.
        </p>
      </div>

      <div className="container grid grid-cols-1 gap-10 px-4 mx-auto sm:grid-cols-2 md:grid-cols-4">
        {whyTechproData.map((item) => (
          <div key={item.id} className="flex flex-col items-center space-y-3 text-center">
            <img src={item.img} alt={item.title} className="object-contain w-12 h-12" />
            <p className="font-semibold text-[#163156]">{item.title}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyTechpro
