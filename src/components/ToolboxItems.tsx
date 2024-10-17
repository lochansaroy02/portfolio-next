import { twMerge } from "tailwind-merge"
import TechIcon from "./TechIcon"


const ToolboxItems = ({ items, className, itemWrapperClassName }: {
    items: { title: string, iconType: React.ElementType, }[],
    className?: string,
    itemWrapperClassName?: string
}) => {
    return (
        <div className={twMerge(
            " flex  [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_90%,_transparent)]",
            className
        )}>
            <div className={twMerge(itemWrapperClassName, "flex-none  flex py-0.5 gap-6  pr-6 ")}>


                {
                    items.map((item, index) => (
                        <div key={index} className="inline-flex  items-center  gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg  ">

                            <TechIcon component={item.iconType} />
                            <span className="font-semibold ">{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ToolboxItems