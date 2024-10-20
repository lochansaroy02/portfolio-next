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

      {/* 
          shouldOrbit?: boolean;
          shouldSpin?: boolean;
          spinDuration?: string;
          orbitDuration?: string;
        */}



      <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' spinDuration='6s' shouldSpin>
        <Sparkle className="size-8 text-neutral-200" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='7s'>
        <Sparkle className="size-5 text-neutral-300" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
        <div className="size-2 rounded-full bg-neutral-300/ 20" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='6s'>
        <Sparkle className="size-10 text-neutral-300/20" /> </HeroOrbit>
      <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='7s'>
        <StarIcon className="size-12 text-neutral-300" /> </HeroOrbit>
      <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
        <StarIcon className="size-8 text-neutral-300" /> </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
        <div className="size-2 rounded-full bg-neutral-300/20" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='7s'>
        <Sparkle className="size-14 text-neutral-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
        <div className="size-3 rounded-full bg-neutral-300/
20" /> </HeroOrbit>
      <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='7s'>
        <StarIcon className="size-28 text-neutral-300" /> </HeroOrbit>


    </div>



    <div className="container">
      <div className='flex flex-col items-center '>

        <Image src={memojiIMage} className='size-[200px]' alt="Picture of the author" />
        <div className='bg-neutral-950 border border-neutral-800 px-4 py-1.5 inline-flex gap-4 rounded-xl  items-center'>
          <div className='bg-green-500   size-2.5 rounded-full relative'>
            <div className='bg-green-500   inset-0 rounded-full absolute animate-ping-large'>

            </div>
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

  </div >;
};
