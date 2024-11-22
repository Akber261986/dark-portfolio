'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [message, setMessage] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
  
      if (response.ok) {
        setMessage(`Your Message sent successfully`)
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setMessage("")
        }, 4000);
      } else {
        setError('Failed to send message');
        setTimeout(() => {
          setError("");
        }, 4000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting the form');
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };
  console.log('Message State:', message);
  console.log('Error State:', error);
  

  return (
    <div className='page-transition md:px-20 mb-28'>
      <div className='px-10 animate-slide-up opacity-0 translate-y-10'>
        {/* heading  */}
        <div className="relative">
          <div className='w-full text-[#666] dark:text-[#FFF] uppercase font-extrabold text-3xl py-16 mb-4
          sm:text-center sm:text-4xl 
          md:text-5xl
          lg:text-6xl
          '>
            <h1>get in <span className='text-[#ffb400]'>touch</span></h1>
            <h1 className=' text-5xl text-[#77777720] absolute left-0 right-0 top-1/2 font-extrabold -translate-y-1/2
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            '>Contact us</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-1/3 flex flex-col gap-8 text-[#666] dark:text-white font-bold px-4'>
          <div>
            <h1 className="uppercase text-2xl mb-4 ">Don&apos;t be shy</h1>
            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          </div>
          <div className="flex items-start gap-4">
            <Image 
            src={"/icons/map-solid.svg"}
            alt="icon"
            width={40}
            height={40}
            />
            <div>
              <h1 className="uppercase">Address point</h1>
              <p>U/C Tando Hafiz Shah, P/O Ongar Thatta city, Sindh Pakistan</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image 
            src={"/icons/envelope-open-solid.svg"}
            alt="icon"
            width={40}
            height={40}
            />
            <div>
              <h1 className="uppercase">Mail me</h1>
              <p>akbarghulam47@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex justify-center w-10 h-10 bg-[#ffb400] rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className= "fill-current text-white dark:text-[#252525] w-6 "><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              </div>
            <div>
              <h1 className="uppercase">Call me</h1>
              <p>+923213011912</p>
            </div>
          </div>
          <div className="flex gap-6">
          <Link href= "https://web.facebook.com/ghulam.dal/" className="group">
            <div className="w-10 h-10 rounded-full bg-[#eee] dark:bg-[#252525] flex items-center justify-center group-hover:bg-[#ffb400]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
            className="fill-current h-5 group-hover:text-white"
            ><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
            </div>
          </Link>
          <Link href= "https://github.com/Akber261986" className="group">
            <div className="w-10 h-10 rounded-full bg-[#eee] dark:bg-[#252525] flex items-center justify-center group-hover:bg-[#ffb400]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            className="fill-current w-6 group-hover:text-white"
            ><path d="M216.3 158.4H137C97 147.9 6.5 150.6 6.5 233.2c0 30.1 15 51.2 35 61-25.1 23-37 33.9-37 49.2 0 11 4.5 21.1 17.9 26.8C8.1 383.6 0 393.4 0 411.7c0 32.1 28.1 50.8 101.6 50.8 70.8 0 111.8-26.4 111.8-73.2 0-58.7-45.2-56.5-151.6-63l13.4-21.6c27.3 7.6 118.7 10 118.7-67.9 0-18.7-7.7-31.7-15-41.1l37.4-2.8zm-63.4 241.9c0 32.1-104.9 32.1-104.9 2.4 0-8.1 5.3-15 10.6-21.5 77.7 5.3 94.3 3.4 94.3 19.1zm-50.8-134.6c-52.8 0-50.5-71.2 1.2-71.2 49.5 0 50.8 71.2-1.2 71.2zm133.3 100.5v-32.1c26.8-3.7 27.2-2 27.2-11V203.6c0-8.5-2.1-7.4-27.2-16.3l4.5-32.9H324v168.7c0 6.5 .4 7.3 6.5 8.1l20.7 2.8v32.1zm52.5-244.3c-23.2 0-36.6-13.4-36.6-36.6s13.4-35.8 36.6-35.8c23.6 0 37 12.6 37 35.8s-13.4 36.6-37 36.6zM512 350.5c-17.5 8.5-43.1 16.3-66.3 16.3-48.4 0-66.7-19.5-66.7-65.5V194.8c0-5.4 1.1-4.1-31.7-4.1V154.5c35.8-4.1 50-22 54.5-66.3h38.6c0 65.8-1.3 61.8 3.3 61.8H501v40.7h-60.6v97.2c0 6.9-4.9 51.4 60.6 26.8z"/></svg>
            </div>
          </Link>
          <Link href= "https://www.linkedin.com/in/ghulam-akber-8221052bb/" className="group">
            <div className="w-10 h-10 rounded-full bg-[#eee] dark:bg-[#252525] flex items-center justify-center group-hover:bg-[#ffb400]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            className="fill-current h-6 group-hover:text-white"
            ><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
            </div>
          </Link>
          </div>
        </div>
        <div className='lg:w-4/6' id="contact">
          <form action="contact" onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 px-4 my-6">
            <div className="col-span-2 md:col-span-1">
              <input 
              type="text" 
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required placeholder="YOUR NAME"
              className="w-full border-[1px] border-[#ccc] dark:border-[#111] bg-[#eee] dark:bg-[#252525] dark:text-white py-3 px-7 rounded-3xl duration-300 outline-none focus:border-[#ffb400] dark:focus:border-[#ffb400]"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="YOUR EMAIL" 
              required
              className="w-full border-[1px] border-[#ccc] dark:border-[#111] bg-[#eee] dark:bg-[#252525] dark:text-white py-3 px-7 rounded-3xl duration-300 outline-none focus:border-[#ffb400] dark:focus:border-[#ffb400]"
              />
            </div>
            <div className="col-span-2">
              <input 
              type="text" 
              name="subject" 
              id="subject"
              onChange={handleChange}
              value={formData.subject}
              placeholder="YOUR SUBJECT" 
              required
              className="w-full border-[1px] border-[#ccc] dark:border-[#111] bg-[#eee] dark:bg-[#252525] dark:text-white py-3 px-7 rounded-3xl duration-300 outline-none focus:border-[#ffb400] dark:focus:border-[#ffb400]"
              />
            </div>
            <div className=" col-span-2">
              <textarea 
              name="message" 
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={7}
              required
              className="w-full h-[200px] border-[1px] border-[#ccc] dark:border-[#111] bg-[#eee] dark:bg-[#252525] dark:text-white py-3 px-7 rounded-3xl duration-300 outline-none focus:border-[#ffb400] dark:focus:border-[#ffb400]"
              ></textarea>
            </div>
            
           {error && <div className={`text-center text-red-500 bg-[#f8e0e0] dark:bg-[#2e2222] fixed right-4 top-20 transform duration-500 origin-right ${error ? "scale-100": ""} rounded-lg shadow-md dark:shadow-[#db8080] font-bold px-10 py-5 z-10 flex gap-4`}>
              <Image 
              src={"/icons/circle-exclamation-solid.svg"}
              alt="check"
              width={20}
              height={20}
              />
              <p className="scrolLineRed">{error}</p>
            </div>}

            {message &&<div className={`text-center text-green-500 bg-[#cef5ce] dark:bg-[#363333] fixed right-4 top-20 transform duration-500 origin-right ${message ? "scale-100": ""} rounded-lg shadow-md dark:shadow-[#a6ff95] font-bold px-10 py-5 z-10 flex gap-4`}>
              <Image 
              src={"/icons/circle-check-solid.svg"}
              alt="check"
              width={20}
              height={20}
              />
              <p className="scrolLineGreen">{message}</p>
            </div>}
            
            <div className="col-span-1">
              <button className="relative group flex items-center border border-[#ffb400] rounded-[56px] gap-2 ml-4" type="submit">
                    <p className="pl-8 text-[#666] dark:text-[#FFF] font-bold font-[sans|sarif] uppercase group-hover:text-[#FFF] group-hover:opacity-0 whitespace-nowrap">
                    send message
                    </p>
                    <span
                        className={`absolute top-0 left-0  transform scale-x-0 origin-right opacity-0 text-center bg-[#ffb400] uppercase font-bold text-white rounded-3xl  py-4 pl-7 pr-14 duration-500 ease-in-out z-[-1]
                        group-hover:opacity-100 group-hover:scale-x-100`}
                        >
                    send message
                    </span>
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#ffb400] ">
                    <Image
                        src={"/icons/paper-plane-solid.svg"}
                        alt="icon"
                        width={15}
                        height={15}
                    />
                    </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
