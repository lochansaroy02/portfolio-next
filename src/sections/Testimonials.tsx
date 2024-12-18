import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Card from "@/components/Card";
import { SectionHeaders } from "@/components/SectionHeaders";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

const sectionHeaders = {
  title: "Testimonials",
  eyebrow: "What People Say",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
};

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeaders
          title={sectionHeaders.title}
          eyebrow={sectionHeaders.eyebrow}
          description={sectionHeaders.description}
        />

        <div
          className="mt-12 lg:mt-24 flex overflow-x-hidden py-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >

          <div className="flex gap-8 pr-8 animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]  " >

            {[...Array(2).fill(0)].map((_, idx) => (
              <div key={idx} className="flex  gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className=" md:w-[450px]  w-[300px] p-4  h-[300px] md:h-[300px]   hover:-rotate-3 transition duration-300"
                  >
                    <div className="p-4 md:pb-0  flex flex-col items-center lg:items-start md:items-start   ">
                      <div className="flex gap-4 ">
                        <div className="size-14 bg-neutral-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className=""
                          />
                        </div>
                        <div >
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm  text-white/40 ">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>


                      <div className=" py-4 mt-6    ">

                        <p className="  text-sm md:text-base ">
                          {testimonial.text}
                        </p>
                      </div>


                    </div>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
