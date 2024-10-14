import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import GrainImage from "@/assets/images/grain.jpg";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";

import ArrowUpIcon from '@/assets/icons/arrow-up-right.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';



import Image from "next/image";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16  lg:py-24  ">


      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text  ">Real-world Projects</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl  text-center mt-6  ">Featured Projects</h2>
        <p className="text-center md:text-lg max-w-md text-white/60 mt-4 lg:text-xl  mx-auto"> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        {/* card wrappeer */}
        <div className="flex flex-col mt-10 md:mt-20  gap-14 ">
          {
            portfolioProjects.map((projects, index) => (
              <div key={index} className="bg-neutral-800 rounded-3xl relative  z-0 overflow-hidden after:z-10  after:content-[''] after:absolute after:inset-0  after:outline-2  after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20  px-8 pt-8  after:pointer-events-none    lg:pt-16 lg:px-20  ">
                <div className="absolute inset-0 -z-10 opacity-5 md:pt-12  md:px-10   " style={{
                  backgroundImage: `url(${GrainImage.src})`,
                }}>
                </div>


                <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">

                  <div className="lg:pb-16  ">



                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2  font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">

                      <span>{projects.company}</span>
                      <span>&bull;</span>
                      <span>{projects.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl mt-2 md:mt-5   md:text-4xl   ">{projects.title}</h3>
                    <hr className="border-t-2   border-white/5 mt-4  md:mt-5  " />
                    <ul className="flex flex-col gap-2 mt-4 md:mt-5  ">
                      {
                        projects.results.map((result, index) => (
                          <li key={index} className="flex gap-2  text-sm md:text-base   ">
                            <CheckCircleIcon className="size-5 md:size-6 " />
                            <span className="text-sm text-white/50 ">

                              {result.title}
                            </span>
                          </li>
                        ))
                      }

                    </ul>
                    <a href={projects.link}>
                      <button className="bg-white   text-neutral-950 h-12 w-full md:w-auto  px-4  rounded-xl font-semibold  inline-flex items-center justify-center gap-2 mt-8  ">
                        <span>view live </span>
                        <ArrowUpIcon className="size-4 " />
                      </button>
                    </a>
                  </div>

                  <div className="relative">

                    <Image src={projects.image} alt={projects.title} className="-mb-4 mt-8 md:mt  md:-mt-0  lg:mt-4  lg:w-auto lg:absolute lg:h-full lg:max-w-none  " />
                  </div>

                </div>
              </div>
            ))
          }
        </div>
      </div>

    </section>


  );
};
