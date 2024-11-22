'use client';

import Button from '@/components/Button';
import Image from "next/image";
import { experiences, skillsData } from "../../../data/posts";
import SkillIndicator from '@/components/SkillIndicator';

const About = () => {
  return (
    <div className='page-transition'>
      <div className='px-8 animate-slide-up opacity-0 translate-y-10'>
        {/* heading  */}
        <div className="relative">
          <div className='w-full text-[#666] dark:text-[#FFF] uppercase font-extrabold text-3xl py-16 mb-4
          sm:text-center sm:text-4xl 
          md:text-5xl
          lg:text-6xl
          '>
            <h1>about <span className='text-[#ffb400]'>me</span></h1>
            <h1 className=' text-5xl text-[#77777720] absolute left-0 right-0 top-1/2 font-extrabold -translate-y-1/2
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            '>resume</h1>
          </div>
        </div>

        <div className='flex flex-col gap-8 md:gap-0 justify-evenly
        md:flex-row
        '>
                {/* personal info  */}
          <div>
            <div className='flex flex-col text-[#666] dark:text-[#FFF] uppercase text-xl font-[sans-serif,Poppins] font-bold'>
              <h1>personal Infos</h1>
              <div className='w-52 h-52 rounded-full bg-[url("/images/Profile-Pic-2.png")] bg-cover bg-no-repeat bg-center self-center mt-4 sm:hidden'>
              </div>
            </div>
            <div className='my-8'>
              <ul className='text-[#666] dark:text-[#FFF] grid grid-cols-2 gap-4'>
                <li className="flex flex-col sm:flex-row">
                  <h1>First Name:</h1>
                  <p className='font-bold'>Ghulam</p>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <h1>Second Name:</h1>
                  <p className='font-bold'>Akber</p>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <h1>Age:</h1>
                  <p className='font-bold'>32 Years</p>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <h1>Nationality:</h1>
                  <p className='font-bold'>Pakistani</p>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <h1>Freelance:</h1>
                  <p className='font-bold text-[#2bc42b]'>Available</p>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <h1>Address:</h1>
                  <p className='font-bold'>Hyderabad</p>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <h1>Phone:</h1>
                  <p className='font-bold'>+923213011912</p>
                </li>
                <li className="flex flex-col lg:flex-row">
                  <h1>Email:</h1>
                  <p className='font-bold'>akbarghulam47<span> @gmail.com</span></p>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <h1>Linkedin:</h1>
                  <p className='font-bold'>linkedin/akber</p>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <h1>Languages:</h1>
                  <p className='font-bold'>Sindhi, Urdu, English</p>
                </li>
              </ul>
            </div>
            <Button 
            label='download cv'
            link='/resume.pdf'
            logo='/icons/download-solid.svg'
            />
          </div>
          {/* rating  */}
          <div className='grid grid-cols-2 gap-4 h-5/6'>
            <div className='h-44 border-[1px] border-[#ddd] rounded-lg pr-12 pl-5'>
                <div className='relative p-8'>
                  <h1 className='text-[#ffb400] text-4xl font-bold font-sans mb-4 
                  sm:text-5xl
                  '>2<sup>+</sup> </h1>
                  <p className='lines text-[#666] dark:text-[#FFF] sm:pl-11'>Year <br />Experience</p>
                </div>
            </div>
            <div className='h-44 border-[1px] border-[#ddd] rounded-lg pr-12 pl-5'>
                <div className='relative p-8'>
                  <h1 className='text-[#ffb400] text-4xl font-bold font-sans mb-4 
                  sm:text-5xl
                  '>20<sup>+</sup> </h1>
                  <p className='lines text-[#666] dark:text-[#FFF] sm:pl-11'>Compeleted<br />Projects</p>
                </div>
            </div>
            <div className='h-44 border-[1px] border-[#ddd] rounded-lg pr-12 pl-5'>
                <div className='relative p-8'>
                  <h1 className='text-[#ffb400] text-4xl font-bold font-sans mb-4 
                  sm:text-5xl
                  '>43<sup>+</sup> </h1>
                  <p className='lines text-[#666] dark:text-[#FFF] sm:pl-11'>Happy <br />Customers</p>
                </div>
            </div>
            <div className='h-44 border-[1px] border-[#ddd] rounded-lg pr-12 pl-5'>
                <div className='relative p-8'>
                  <h1 className='text-[#ffb400] text-4xl font-bold font-sans mb-4 
                  sm:text-5xl
                  '>13<sup>+</sup> </h1>
                  <p className='lines text-[#666] dark:text-[#FFF] sm:pl-11'>Award<br />Won</p>
                </div>
            </div>
          </div>
        </div>
        <hr 
        className='border-t bg-[#eee] dark:border-[#252525] mx-auto mt-[70px] mb-14 max-w-[40%]'
        />
        <div className="skills">
        <div className='text-2xl text-[#666] dark:text-white text-center font-bold mb-4
        md:text-3xl
        '>My Skills</div>
        <div
        className='grid justify-center grid-cols-2 md:grid-cols-4 gap-10 p-5 dark:bg-[#111]'
      >
        {skillsData.map((skill, index) => (
        <div key={index} className='w-full flex justify-center items-center'>
          <SkillIndicator
            percentage={skill.percentage}
            skillName={skill.skillName}
            color={'#ffb400'}
          />
        </div>
        ))}
      </div>
        </div>
        <hr 
        className='border-t bg-[#eee] dark:border-[#252525] mx-auto mt-[70px] mb-14 max-w-[40%]'
        />
    <div className='experience'>
      <div className="text-[#666] dark:text-white text-2xl font-bold text-center pb-12 uppercase font-[Poppins,sans-serif]">Experience & Education</div>
     <div className="grid md:grid-cols-2 gap-10 md:gap-6">
      {experiences.map((item) => (
        <div key={"index"} className="line flex ">
          <div >
          <div className="icon-container w-9 h-9 flex justify-center items-center bg-[#ffb400] rounded-full">  
            <Image 
            src={"/icons/briefcase-solid.svg"}
            alt="icon"
            width={15}
            height={15}
            />
          </div>
          </div>
          <div className="mx-4 text-[#666] dark:text-white">
            <span className="bg-[#eee] dark:bg-[#252525] text-sm py-0.5 px-3 rounded-full">
            {item.date}
            </span>
            <h3 className="title text-lg font-bold py-2">
              {item.title} <span>– {item.company}</span>
            </h3>
            <p className="overflow-auto">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  )
}

export default About
