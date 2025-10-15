import React from 'react'
import { FaSearch, FaBars } from "react-icons/fa";

export default function () {
    return (
        <>
            <div  className="p-0 m-0 bg-emerald-800 md:hidden lg:hidden h-50 rounded-b-4xl">
                {/* mobile navbar */}
                <nav>
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-white text-3xl font-semibold ml-3 mt-5">Logo</h1>
                        <button className="text-white text-3xl mr-3">
                            <FaBars />
                        </button>
                    </div>
                    <div className="w-full h-20 flex justify-center items-center">
                        <div className="flex items-center gap-3 bg-white p-4 w-[90%] rounded-3xl">
                            <FaSearch className="text-gray-700 text-xl flex-shrink-0" />
                            <input
                                type="search"
                                placeholder="What service you want?"
                                className="bg-transparent outline-none border-none w-full placeholder:text-gray-500 text-gray-700"
                            />
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}
