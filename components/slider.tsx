"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const discounts = [
  {
    title: "20% Off Electrical Services",
    desc: "Limited time only!",
    img: "/electrician.jpg",
  },
  {
    title: "30% Off Plumbing Fixes",
    desc: "Book before Sunday!",
    img: "/plumbing.jpg",
  },
  {
    title: "15% Off Cleaning Service",
    desc: "For new customers",
    img: "/cleaning.jpg",
  },
  {
    title: "50% Off Painting",
    desc: "Weekend deal!",
    img: "/painting.jpg",
  },
];

export default function DiscountCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % discounts.length);
    }, 3000); // change every 3s

    return () => clearInterval(timer);
  }, []);

  const current = discounts[index];

  return (
    <div className="flex justify-center py-6">
      <div className="relative w-[450px] h-[280px] bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col items-center text-center"
          >
            <Image
              src={current.img}
              alt={current.title}
              width={280}
              height={180}
              className="rounded-t-2xl object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">
                {current.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{current.desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
