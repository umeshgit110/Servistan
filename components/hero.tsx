import React from 'react'
import { FaPaintRoller, FaBroom, FaBolt, } from "react-icons/fa";
import { MdOutlinePlumbing } from "react-icons/md";
import { FaUserDoctor, FaDog } from "react-icons/fa6"

interface Service {
  icon: React.ReactNode;
  title: string;
}

const services: Service[] = [
  { icon: <FaBolt className="text-orange-500 text-3xl" />, title: "Electrical"},  
  { icon: <MdOutlinePlumbing className="text-orange-500 text-3xl" />, title: "Plumbing"},
  { icon: <FaBroom className="text-orange-500 text-3xl" />, title: "Cleaning" },
  { icon: <FaPaintRoller className="text-orange-500 text-3xl" />, title: "Painting" }, 
  { icon: <FaDog className="text-orange-500 text-3xl" />, title: "Vets" },
  { icon: <FaUserDoctor className="text-orange-500 text-3xl" />, title: "Doctor" },
   
];

export default function hero() {
  return (
     <section className="p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            {service.icon}
            <p className="mt-3 text-sm font-semibold text-gray-800 text-center">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
