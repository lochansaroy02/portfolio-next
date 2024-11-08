'use client';

import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import { SectionHeaders } from "@/components/SectionHeaders";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaEthereum, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
const toolboxItem = [
  {
    title: 'javascript',
    iconType: JavascriptIcon
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon
  },
  {
    title: 'CSS3',
    iconType: CssIcon
  },
  {
    title: 'Github',
    iconType: GithubIcon
  },
  {
    title: 'React',
    iconType: FaReact
  },
  {
    title: 'Next.js',
    iconType: SiNextdotjs
  },
  {
    title: 'Node.js',
    iconType: FaNodeJs
  },
  {
    title: 'Ethereum',
    iconType: FaEthereum
  }
]

const hobbies = [
  {
    title: "Music",
    emoji: '🎧',
  },
  {
    title: "Art",
    emoji: '🎨',
  },
  {
    title: "Reading",
    emoji: '📖',
  },
  {
    title: "Fitness",
    emoji: '🏋️‍♂️',
  },
  {
    title: "Travel",
    emoji: '✈️',
  }, {
    title: "Gaming",
    emoji: "🎮",
  }, {
    title: "Cooking",
    emoji: "🍳",
  }


]


export const AboutSection = ({ id }: { id: string }) => {
  

  const ref = useRef(null);



  return (
    <div id={id} className="py-20  lg:py-28  ">
      <div className="container">

        <SectionHeaders eyebrow="About Me" title="A Glimpse into my world" description="Learn more about who I am, What I do" />

        <div className="mt-20  flex-col flex gap-8 ">

          <div className="md:grid md:grid-cols-1  md:w-auto md:gap-8 grid grid-cols-1  gap-8">

            {/* <Card className="h-[320px] md:col-span-1 ">
              <CardHeader
                title="My Reads"
                description="Explore what book I'm reading" />
              <div className="w-40 mx-auto mt-2">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card> */}

            <Card className="h-[320px] md:col-span-2">
              <CardHeader title="Tech Toolbox" description="My favorite tools" />
              <ToolboxItems className="mt-6" items={toolboxItem} itemWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems className="mt-6" items={toolboxItem} itemWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]" />
            </Card>
          </div>
 

          <div className="md:grid-cols-2  md:grid grid grid-cols-1 gap-8  ">
            <Card className="h-[320px] p-0  flex flex-col md:col-span-2 ">
              <CardHeader title="Hobbies" description="My favorite hobbies" className="px-6 py-6  " />
              <div ref={ref} className=" grid grid-cols-3 gap-1  px-6  py-8 ">
                {
                  hobbies.map(item => (
                    <motion.div key={item.title} className=" inline-flex items-center px-4 text-sm bg-gradient-to-r w-fit from-emerald-300 to-sky-400  my-1  rounded-full py-1.5 "
                      drag
                      dragConstraints={ref}
                    >
                      <div className="flex  items-center ">

                        <span className="text-neutral-950 font-medium  ">{item.title}</span>

                        <span>{item.emoji}</span>
                      </div>

                    </motion.div>
                  ))
                }
              </div>
            </Card>
            <Card className="h-[320px]  relative p-0  md:col-span-3 lg:col-span-1">
              <Image className="h-full w-full object-cover object-left-top" src={mapImage} alt="map" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-full size-20  after:content-['']  after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-full after:outline-neutral-950/40 ">

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping  [animation-duration:2s]">

                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 ">

                </div>

                <Image className="size-20 " src={smileMemoji} alt="smile" />
              </div>

            </Card>
          </div>

        </div>


      </div>
    </div>
  );
};
