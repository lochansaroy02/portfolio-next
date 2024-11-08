import foodhub from '@/assets/images/foodhub.png';
import netflix from '@/assets/images/netflix.png';
import todo from '@/assets/images/todo.png';

import ArrowUpIcon from '@/assets/icons/arrow-up-right.svg';

import Card from "@/components/Card";
import { SectionHeaders } from "@/components/SectionHeaders";
import Image from "next/image";

const portfolioProjects = [
  {
    year: "2022",
    title: "Todo App",
    results: "TodoHive is a MERN-based to-do application enabling users to create, read, update, and delete tasks. It provides an intuitive interface for efficient task management, helping users stay organized effortlessly.",
    link: "https://todohive-vert.netlify.app/",
    image: todo,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "FoodHub",
    results: "FoodHub is a responsive React app for exploring and ordering food, featuring category filtering, search, an accordion layout, shopping cart, live Swiggy API data, and Redux-based state management.",
    link: "https://food-hub-lochansaroy02.vercel.app/",
    image: foodhub,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "Netflix GPT",
    results: "Netflix GPT is a movie recommendation app using OpenAI’s GPT-3.5. Features include personalized recommendations, Firebase Authentication, Redux state management, and a responsive design with Tailwind CSS. Built with React.",
    link: "https://netflixgpt-vert.vercel.app/",
    image: netflix,
  },
];

const sectionHeaders = {
  title: "Real-world Projects",
  eyebrow: "Featured Projects",
  description: "Explore my work ",
};




export const ProjectsSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="pb-16 lg:py-24 ">
      <div className="container ">
        <SectionHeaders
          title={sectionHeaders.title}
          eyebrow={sectionHeaders.eyebrow}
          description={sectionHeaders.description}
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-14  ">
          {portfolioProjects.map((projects, index) => (
            <Card
              key={index}
              className="px-8 pt-8 sy  pb-0 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:flex lg:gap-16  ">
                <div className="lg:flex-1 lg:pb-16 ">
                  <div className="">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    </div>

                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {projects.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-2 mt-4 md:mt-5">
                      <li
                        className="flex gap-2 text-sm md:text-base"
                      >

                        <span className="text-sm lg:text-lg md:text-base text-white/50">
                          {projects.results}
                        </span>
                      </li>
                    </ul>
                    <a href={projects.link}>
                      <button className="bg-white text-neutral-950 h-12 w-full md:w-auto px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>view live</span>
                        <ArrowUpIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>

                {/* Image Content */}
                <div className="lg:flex-1 rounded-lg md:mt-12 lg:rounded-lg ">
                  <Image
                    src={projects.image}
                    alt={projects.title}
                    className="-mb-4 lg:rounded-xl rounded-lg  md:rounded-lg   mt-8 md:mt md:-mt-0 lg:mt-4 lg:w-auto lg:absolute lg:h-full lg:max-w-none"
                  />
                </div>
              </div>

            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};
