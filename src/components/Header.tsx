'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { icon, iconLabels, Links } from "../../data/icon";

const Header = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
      const theme = localStorage.getItem("theme")
      if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect (() => {
      if (darkMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
      }
    }, [darkMode])

    const handleClick = (index: number) => {
      setActiveIndex(index);
    };

    return (
      <div className="relative ">
        <div>
          <div 
            className="flex items-center justify-center w-12 h-12 fixed top-4 right-4 z-10 rounded-full bg-[#eee] dark:bg-[#4b4b4b] cursor-pointer "
            onClick={()=> setDarkMode(!darkMode)}
          >
              <Image 
                src={"/icons/sun-w.svg"}
                alt="sun"
                width={20}
                height={20}
                className={`${darkMode ? "block" : "hidden"} `}
              />
              <Image 
                src={"/icons/moon-regular.svg"}
                alt="moon"
                width={20}
                height={20}
                className={`${darkMode ? "hidden" : "block"}`}
              />
          </div>
        </div>
        <div className="max-md:w-full flex justify-evenly fixed bottom-0 md:top-16 bg-[#FFF] max-md:dark:bg-[#2b2a2a] py-2
        md:right-4 md:flex-col md:justify-center md:gap-6 md:bg-transparent z-10">
          {icon.map((Icon, index) => (
            <Link href={Links[index]} key={index}>
              <div
                onClick={() => handleClick(index)}
                className={`relative group flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all p-3 hover:bg-[#ffb400] dark:hover:bg-[#ffb400]
                  ${activeIndex === index ? 'bg-[#ffb400]' : 'bg-[#eee] dark:bg-[#444]'}`}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 540" 
                  fill={activeIndex === index || darkMode ? 'white' : '#444'}
                >
                  {Icon}
                </svg>
                
                <h2
                  className={`absolute bottom-0 right-2 transform scale-x-0 origin-right opacity-0
                              text-center bg-[#ffb400] text-white rounded-3xl px-12 py-2
                             duration-500 ease-in-out z-[-1]
                              group-hover:opacity-100 md:group-hover:scale-x-100`}
                >
                  {iconLabels[index]}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
}

export default Header;
