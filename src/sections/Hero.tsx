import DownArrow from '@/assets/icons/arrow-down.svg';
import Sparkle from '@/assets/icons/sparkle.svg';
import StarIcon from '@/assets/icons/star.svg';

import grainImage from '@/assets/images/grain.jpg';
import memojiIMage from '@/assets/images/memoji-computer.png';
import HeroOrbit from '@/components/HeroOrbit';
import Image from 'next/image';
export const HeroSection = () => {
  return <div className='py-28 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)"
      }}>
      <div className='absolute inset-0 -z-30 opacity-5' style={{
        backgroundImage: `url(${grainImage.src})`,
      }}>
      </div>

      <div className=' size-[620px]  hero-ring'></div>
      <div className=' size-[820px]  hero-ring'></div>
      <div className=' size-[1020px]  hero-ring'></div>
      <div className=' size-[1220px]  hero-ring'></div>
      <div className=' size-[1420px]  hero-ring'></div>


      <HeroOrbit size={850} rotation={180}>

        <StarIcon className="size-28 text-neutral-300" />
      </HeroOrbit>

      <HeroOrbit size={630} rotation={30}>
        <StarIcon className="size-12 text-neutral-300" />
      </HeroOrbit>
      <HeroOrbit size={630} rotation={-50}>
        <StarIcon className="size-8 text-green-300" />
      </HeroOrbit>

      <HeroOrbit size={500} rotation={-90}>
        <Sparkle className="size-7 text-neutral-300/20" />
      </HeroOrbit>
      <HeroOrbit size={670} rotation={-270}>
        <Sparkle className="size-6 text-neutral-300/20" />
      </HeroOrbit>
      <HeroOrbit size={510} rotation={79}>
        <Sparkle className="size-9 text-neutral-300/20" />
      </HeroOrbit>
      <HeroOrbit size={510} rotation={33}>
        <div className="size-9 rounded-full bg-neutral-300/20" ></div>
      </HeroOrbit>
      <HeroOrbit size={510} rotation={33}>
        <div className="size-9 rounded-full bg-neutral-300/20" ></div>
      </HeroOrbit>
      <HeroOrbit size={210} rotation={90}>
        <div className="size-4 rounded-full bg-neutral-300/20" ></div>
      </HeroOrbit>
      <HeroOrbit size={400} rotation={70}>
        <div className="size-3 rounded-full bg-neutral-300/20" ></div>
      </HeroOrbit>


    </div>



    <div className="container">
      <div className='flex flex-col items-center '>

        <Image src={memojiIMage} className='size-[200px]' alt="Picture of the author" />
        <div className='bg-neutral-950 border border-neutral-800 px-4 py-1.5 inline-flex gap-4 rounded-xl  items-center'>
          <div className='bg-green-500 size-2.5 rounded-full'>

          </div>
          <div className='text-sm font-medium'>
            Availble for project
          </div>
        </div>
      </div>

      <div className='max-w-lg mx-auto'>

        <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Lochan</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus exercitationem veritatis inventore quas totam. Ex fuga nesciunt suscipit unde aliquid in consectetur tempora illum consequatur, ea commodi temporibus et a?</p>

      </div>

      <div className='flex flex-col items-center mt-8  gap-4 md:flex-row  md:justify-center '>
        <button className='inline-flex items-center gap-2 border rounded-xl border-white/15 px-6 h-12  '>
          <span className='font-semibold'>Click Here </span>
          <DownArrow className="size-4 " />
        </button >
        <button className='inline-flex items-center gap-2 border border-white bg-white text-neutral-900 font-semibold h-12 px-6 rounded-xl '>
          <span>👋</span>
          <span>Hy there!</span>
        </button>
      </div>
    </div>

  </div>;
};
