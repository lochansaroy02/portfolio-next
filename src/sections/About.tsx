import bookImage from "@/assets/images/book-cover.png";
import Card from "@/components/Card";
import { SectionHeaders } from "@/components/SectionHeaders";
import Image from "next/image";

import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

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

export const AboutSection = () => {
  return (
    <div className="py-20  lg:py-28  ">
      <div className="container">

        <SectionHeaders eyebrow="About Me" title="A Glimpse into my world" description="Learn more about who I am, What I do" />

        <div className="mt-20 flex-col flex gap-8 ">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="explore that what book I'm reading" />
              <div className="w-40 mx-auto mt-2">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>

            <Card className="h-[320px]   md:col-span-3 lg:col-span-2">
              <CardHeader title="Tech Toolbox" description="My favorite tools" />
              <ToolboxItems className="mt-6" items={toolboxItem} />
              <ToolboxItems className="mt-6" items={toolboxItem} itemWrapperClassName="-translate-x-1/2" />
            </Card>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 lg:grid-cols-3 ">
            <Card  className="h-[320px] p-0  flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Hobbies" description="My favorite hobbies" className="px-6 py-6  " />
              <div className=" grid grid-cols-3 gap-1  px-6  py-8 ">
                {
                  hobbies.map(item => (
                    <div key={item.title} className=" inline-flex items-center px-4 text-sm bg-gradient-to-r w-fit from-emerald-300 to-sky-400  my-1  rounded-full py-1.5  " >
                      <div className="flex  items-center ">

                        <span className="text-neutral-950 font-medium  ">{item.title}</span>

                        <span>{item.emoji}</span>
                      </div>

                    </div>
                  ))
                }
              </div>
            </Card>
            <Card className="h-[320px]  relative p-0  md:col-span-2 lg:col-span-1">
              <Image className="h-full w-full object-cover object-left-top" src={mapImage} alt="map" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-300 to-sky-400  rounded-full size-20  after:content-['']  after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-full after:outline-neutral-950/40 ">

                <Image className="size-20 " src={smileMemoji} alt="smile" />
              </div>

            </Card>
          </div>


        </div>
      </div>
    </div>
  );
};
