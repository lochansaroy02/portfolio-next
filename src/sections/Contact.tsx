import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import Image from "next/image";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12  lg:py-24 lg:pt-20   ">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300/90 to-sky-400/90
        text-neutral-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0 ">

          <div className="absolute inset-0 opacity-5 rounded-3xl -z-10" style={{
            backgroundImage: `url(${grainImage.src})`,
          }}>

          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center ">
            <div>

              <h2 className="font-serif text-2xl md:text-3xl  ">Lets create something amazing togather</h2>
              <p className="text-sm md:text-base  mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsa rerum fuga!</p>

            </div>

            <div >

              <button className="text-neutral-100 bg-neutral-900 inline-flex items-center px-6 h-12 rounded-xl gap-2  mt-8 w-max border border-neutral-950  ">
                <span className="font-semibold ">
                  contact me
                </span>

                <ArrowUpIcon className="size-4 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
