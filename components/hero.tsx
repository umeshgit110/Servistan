import React from 'react'
import { FaPaintRoller, FaBroom, FaBolt, } from "react-icons/fa";
import { MdOutlinePlumbing } from "react-icons/md";
import { FaUserDoctor, FaDog } from "react-icons/fa6";
import Link from 'next/link';
import Slider  from '@/components/slider';

interface Service {
  icon: React.ReactNode;
  title: string;
}

const services: Service[] = [
  { icon: <FaBolt className="text-blue-500 text-2xl" />, title: "Electrical"},  
  { icon: <MdOutlinePlumbing className="text-blue-500 text-2xl" />, title: "Plumbing"},
  { icon: <FaBroom className="text-blue-500 text-2xl" />, title: "Cleaning" },
  { icon: <FaPaintRoller className="text-blue-500 text-2xl" />, title: "Painting" }, 
  { icon: <FaDog className="text-blue-500 text-3xl" />, title: "Vets" },
  { icon: <FaUserDoctor className="text-blue-500 text-2xl" />, title: "Doctor" },
   
];

export default function hero() {
  return (
     <section className="p-6">
      <div className="grid grid-cols-3 place-items-center sm:grid-cols-6 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-sm h-20 w-20 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            {service.icon}
            <p className="mt-3 text-sm font-semibold text-gray-800 text-center">
              {service.title}
            </p>
          </div>
        ))}
      </div>
       <Link href={"/"} className='flex justify-center p-5 text-blue-500'>
         more services
       </Link>
       <div className="">
        <Slider/>
       </div>
    </section>
    
  )
}
