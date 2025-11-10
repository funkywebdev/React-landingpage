import React from 'react'
import { motion } from 'framer-motion'
import { AvailableCoursesData } from '../Mockdata/Availablecoursesdata'

const AvailableCourses = () => {
  return (
    <div className="py-12 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ x: -100, opacity: 0 }} // slide from left
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="max-w-[800px] px-4 mx-auto mb-10 text-center"
      >
        <p className="text-[20px] uppercase text-[#163156] font-bold">Available Courses</p>
        <p className="text-[#163156] font-light mt-2">
          Explore our open tracks and start your journey toward a career in tech. Choose the path that excites you and gain the skills to succeed.
        </p>
      </motion.div>

      {/* Course Cards */}
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto cursor-pointer sm:grid-cols-2 md:grid-cols-3 place-items-center">
        {AvailableCoursesData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ x: -150, opacity: 0 }} // slide in from left
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: index * 0.7,
              ease: 'easeInOut',
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center justify-between p-5 w-full max-w-[300px] h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="object-cover w-full h-[180px] rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            <div className="flex flex-col justify-between flex-1 mt-4 space-y-2">
              <p className="text-lg font-semibold text-[#163156]">{item.title}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <a
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full py-2 text-sm font-medium text-white bg-[#163156] rounded-xl hover:bg-[#1e4476] transition-colors duration-300 cursor-pointer"
              >
                Register Now
              </motion.button>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AvailableCourses
