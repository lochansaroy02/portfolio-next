export const Header = () => {
  return <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border bg-white/10  backdrop-blur border-white/15 rounded-full">
      <a href="#" className="nav-item">Home</a>
      <a href="#" className="nav-item">Project</a>
      <a href="#" className="nav-item">About</a>
      <a href="#" className=" px-4 py-1.5 rounded-full bg-white/90 text-neutral-900 text-sm font-semibold hover:bg-white/70 hover:text-neutral-900 transition duration-300">Contact</a>
    </nav>
  </div>;
};
