"use client";

import Image from "next/image";
import { blogPost, Posts } from "../../../data/posts";
import { useState } from "react";

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Posts | null>(null);

  // Open modal with selected project details
  const openModal = (post: Posts) => {
    setSelectedProject(post);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="page-transition px-6 sm:px-20">
      <div className="px-10 animate-slide-up opacity-0 translate-y-10">
        {/* heading  */}
        <div className="relative">
          <div
            className="w-full text-[#666] dark:text-[#FFF] uppercase font-extrabold text-3xl py-16 mb-4 
          sm:text-center sm:text-4xl 
          md:text-5xl
          lg:text-6xl
          "
          >
            <h1 className="tracking-tight">
              my <span className="text-[#ffb400]">blog</span>
            </h1>
            <h1
              className=" text-5xl text-[#77777720] absolute left-0 right-0 top-1/2 font-extrabold -translate-y-1/2 tracking-widest
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            "
            >
              posts
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPost.map((post, index) => (
          <article
            key={index}
            className="group cursor-pointer rounded-md dark:text-white"
            onClick={() => openModal(post)}
          >
            <div className="border-[#ffb400] border-b-[5px] overflow-hidden">
              <div className="relative ">
                <Image
                  src={post.image}
                  alt="blog1"
                  width={895}
                  height={552}
                  className="max-w-full h-auto rounded-tl-md rounded-tr-md tranform scale-100 duration-300 group-hover:scale-125"
                />
              </div>
            </div>
            <div className="dark:bg-[#252525] py-5 px-6 rounded-b-md rounded-br-md">
              <h1 className="text-xl font-semibold group-hover:text-[#ffb400]">
                {post.heading}
              </h1>
              <p className="my-4">{post.para}</p>
            </div>
          </article>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center gap-4 z-50">
          <article className="relative p-2">
            <button
              className="w-10 h-10 md:w-14 md:h-14 rounded-full absolute top-4 md:top-0 right-8 md:-right-16 border-4 border-[#aaa] dark:border-white  md:text-2xl font-bold text-center content-center text-[#aaa] dark:text-white hover:text-gray-300"
              onClick={closeModal}
            >
              ✖
            </button>
            <div className="flex flex-col text-[#666] dark:text-white bg-white dark:bg-gray-800 p-6 w-ful rounded-lg h-[calc(95vh-5vh)] overflow-y-auto ">
              <div className="relative mt-6">
                <div
                  className="w-full text-3xl text-[#666] text-center dark:text-[#FFF] uppercase font-extrabold py-12 mb-4 
                  sm:text-4xl
                  md:text-5xl
                  "
                >
                  <h1 className="tracking-tighter">
                    Post <span className="text-[#ffb400]">detail</span>
                  </h1>
                  <h1
                    className="text-6xl text-[#77777720] absolute left-0 right-0 top-1/2 font-extrabold -translate-y-1/2 tracking-widest
                    sm:text-7xl
                    md:text-8xl
                    "
                  >
                    posts
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-start md:flex-row gap-4 text-sm font-semibold mb-6">
                  <div className="flex gap-2 items-center justify-center">
                    <Image
                      src={"/icons/user-solid.svg"}
                      alt="Img"
                      width={13}
                      height={10}
                    />
                    <p>{selectedProject.bloger}</p>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <Image
                      src={"/icons/calendar-days-solid.svg"}
                      alt="Img"
                      width={13}
                      height={10}
                    />
                    <p>{selectedProject.date}</p>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <Image
                      src={"/icons/tags-solid.svg"}
                      alt="Img"
                      width={13}
                      height={10}
                    />
                    <p>{selectedProject.tag}</p>
                  </div>
                </div>
                <h1 className="text-2xl font-bold font-sans mb-6">
                  {selectedProject.heading}
                </h1>
              </div>
              <div className="w-full flex justify-center self-center">
                <Image
                  src={selectedProject.image}
                  alt="Img"
                  width={650}
                  height={552}
                  className="rounded-lg"
                />
              </div>
              <div className="max-w-[42rem] flex flex-col gap-4 mt-6 ">
                <p> {selectedProject.p1}</p>
                <div className="flex gap-6">
                  <Image
                    src={"/blog/qout.png"}
                    alt="Img"
                    width={70}
                    height={40}
                    className="rounded-lg h-16"
                  />
                  <p>
                    <i>{selectedProject.highlight}</i>
                  </p>
                </div>
                <p>{selectedProject.p2}</p>
                <p>{selectedProject.p3}</p>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
};

export default Blog;
