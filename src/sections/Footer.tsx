import ArrowUpIcon from '@/assets/icons/arrow-up-right.svg';

export const Footer = () => {

  const linksArr = [{
    title: 'YouTube',
    url: '#'
  }, {
    title: 'Twitter',
    url: '#'
  }, {
    title: 'Instagram',
    url: '#'
  }, {
    title: 'Linkedin',
    url: '#'
  }]
  return <footer className='relative -z-10 overflow-x-clip '>
    <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>

    <div className="container">
      <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center md:justify-between gap-6 '>

        <div className='text-white/40 '>&copy; 2024 All right reversed. </div>
        <nav className='flex flex-col items-center gap-6 md:flex-row '>
          {
            linksArr.map((item, index) => (

              <a key={index} className='inline-flex items-center gap-1.5  ' href={item.url}><span className='font-semibold '>{item.title} </span> <ArrowUpIcon className="size-4 " /></a>

            ))
          }
        </nav>
      </div>
    </div>
  </footer>;
};
