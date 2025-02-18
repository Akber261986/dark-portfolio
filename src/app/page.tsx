import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="page-transition ">
      <div className="p-8 overflow-hidden animate-slide-up opacity-0 translate-y-10">
        <div className="hidden lg:block fixed left-[-83%] -top-1/2 w-full h-[200%] transform rotate-[-15deg] bg-[#ffb400] shadow-lg shadow-yellow-600">
        </div>
        <div
          className="flex flex-col items-center
      lg:flex-row lg:items-start
      "
        >
          <div
            className="w-60 h-60 bg-[url('/images/profile-pic.png')] bg-cover bg-top bg-no-repeat z-[11] rounded-full shadow-lg shadow-black
          sm:w-[300px] sm:h-[300px]
          lg:rounded-3xl lg:w-[1000px] lg:h-[calc(100vh-85px)]
          "
          ></div>
          <div
            className="w-[85%] h-[37rem] flex flex-col items-center px-8 gap-2
          md:justify-center
          "
          >
            <div>
              <h1
                className="text-[#ffb400] text-center text-3xl font-sans font-bold py-2 uppercase whitespace-nowrap
                sm:text-4xl
                lg:text-5xl 
                "
              >
                _i am ghulam akber.
              </h1>
              <p
                className="text-center text-3xl text-[#666666] dark:text-[#FFFFFF] font-sans font-bold uppercase
                sm:text-4xl
                lg:text-5xl
                "
              >
                web designer
              </p>
            </div>
            <div className="sm:p-8">
              <p className="open-sans-font text-center text-[#666666] pb-8 leading-10 dark:text-[#FFFFFF] md:text-start">
                I&apos;m a web designer &amp; front‑end developer focused on
                crafting clean &amp; user‑friendly experiences, I am passionate
                about building excellent software that improves the lives of
                those around me.
              </p>
              <Button
                label="more about me"
                link="/About"
                logo="/icons/arrow-right-solid.svg"
                className="whitespace-nowrap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
