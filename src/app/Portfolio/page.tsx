'use client';

import Link from "next/link";
import { useState } from "react";
import { navItems, projects, ProjectPost } from "../../../data/posts";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init ({
  duration:400,
});
AOS.refresh();

const Portfolio = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectPost | null>(null);

  const handleTextColor = (index: number | null) => {
    setActiveItem(index);
  };

  // Open modal with selected project details
  const openModal = (project: ProjectPost) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  // Filter projects based on active category
  const filteredProjects =
    activeItem === null
      ? projects
      : projects.filter((project) =>
          project.category.toLowerCase() === navItems[activeItem]?.toLowerCase()
        );

  return (
    <div className="page-transition">
      {/* Heading */}
      <div className="relative animate-slide-up opacity-0 translate-y-10">
        <div
          className="w-full text-[#666] dark:text-[#FFF] uppercase font-extrabold text-3xl py-16 my-8 px-4
          sm:text-center sm:text-4xl 
          md:text-5xl
          lg:text-6xl"
        >
          <h1>
            my <span className="text-[#ffb400]">portfolio</span>
          </h1>
          <h1
            className="text-6xl text-[#77777720] absolute left-0 right-0 top-1/2 font-extrabold -translate-y-1/2
            sm:text-7xl
            md:text-8xl
            lg:text-9xl"
          >
            works
          </h1>
        </div>
      </div>

      {/* Navbar */}
      <div className="animate-slide-up opacity-0 translate-y-10">
        <ul className="sm:flex sm:justify-center gap-6 transform-cpu translate-x-0 duration-1000 ease-in-out px-4">
          <li
            className={`uppercase font-bold hover:text-[#ffb400] dark:hover:text-[#ffb400] ${
              activeItem === null
                ? "text-[#ffb400] dark:text-[#ffb400]"
                : "text-[#666] dark:text-white"
            }`}
            onClick={() => handleTextColor(null)}
          >
            <Link href="#">All</Link>
          </li>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`uppercase font-bold hover:text-[#ffb400] dark:hover:text-[#ffb400] ${
                activeItem === index
                  ? "text-[#ffb400] dark:text-[#ffb400]"
                  : "text-[#666] dark:text-white"
              }`}
              onClick={() => handleTextColor(index)}
            
            >
              <Link href="#">{item}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-4 sm:px-16 md:px-20">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group w-full h-[200px] relative cursor-pointer flex border rounded-lg shadow hover:shadow-lg"
              onClick={() => openModal(project)}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {/* Hover Effect */}
              <h2 className="absolute w-full h-full top-0 left-0 transform scale-y-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 origin-top transition-scale duration-500 ease-in-out text-white bg-[#ffb400] text-xl font-bold text-center content-center rounded-lg">
                {project.projectName}
              </h2>
              <Image
                src={project.img}
                alt="img"
                width={1200}
                height={800}
                className="rounded-lg w-full"
              />
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No projects found.</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center gap-4 z-50">
          <div className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg w-[70%] relative">
            <button
              className="w-8 sm:w-14 sm:h-14 rounded-full border-4 border-white border-[2px_white] sm:text-2xl font-bold text-center content-center absolute top-0 right-0 sm:-right-16 text-white hover:text-gray-300"
              onClick={closeModal}
            >
              ✖
            </button>
            <h1 className=" text-2xl sm:text-3xl md-text-4xl font-bold mb-6 text-center text-[#ffb400]">{selectedProject.projectName}</h1>
            <div className="self-center max-w-[44rem]">
              <div className="max-w-[768px] grid lg:grid-cols-2 gap-3 mb-6 text-sm">
                <div className="flex gap-2 text-[#666] dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" 
                className="fill-current text-[#666] dark:text-white w-3"
                ><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                  <p>Project: <span className="font-bold">{selectedProject.title}</span></p>
                </div>
                <div className="flex items-center gap-2 text-[#666] dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                className="fill-current text-[#666] dark:text-white w-4"
                ><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                /></svg>
                  <p>Client: <span className="font-bold">{selectedProject.client}</span></p>
                </div>
                <div className="flex items-center gap-2 text-[#666] dark:text-white">
                <div className="w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                  className="fill-current text-[#666] dark:text-white"
                  >
                    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                </div>
                  <p>Language: <span className="font-bold">{selectedProject.language}</span></p>
                </div>
                <div className="flex items-center gap-2 text-[#666] dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                className="fill-current text-[#666] dark:text-white w-4"
                >
                <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                  <p>Preview: <Link href={selectedProject.previewLink} className="font-bold text-[#ffb400]" target="_blank">{selectedProject.label}</Link></p>
                </div>
              </div>
              <div className="w-full flex justify-center">
              <Image 
              src={selectedProject.img}
              alt="Img"
              width={700}
              height={400}
              className="rounded-lg"
              />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
