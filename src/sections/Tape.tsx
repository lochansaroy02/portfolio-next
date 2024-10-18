import StarIcon from "@/assets/icons/star.svg";

export const TapeSection = () => {
  const words = ["Performant", "Accessible", "Responsive", "Intuitive", "Dynamic", "Secure", "User Friendly", "Search Optimized", "Usable", "Reliable", "Interactive", "Scalable"];
  return (
    <div className="py-16 lg:py-24  overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3  -mx-1 ">


        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">


          <div className="flex-none flex gap-4  py-3 pr-4   animate-move-left [animation-duration:30s]"
          >
            {[...new Array(2).fill(0)].map((_, idx) => (
              <div key={idx} >
                {
                  words.map((word) => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="text-neutral-900 font-extrabold text-sm -rotate-1  ">{word}</span>
                      <StarIcon className="size-6 -rotate-12  text-neutral-900" />
                    </div>

                  ))
                }
              </div>
            ))}

          </div>


        </div>

      </div>
    </div>
  );
};
