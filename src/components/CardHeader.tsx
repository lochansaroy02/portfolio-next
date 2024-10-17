import StartIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({ title, description, className }: {
    title: string,
    description: string,
    className?: string
}) => {
    return (
        <div>
            <div className={twMerge(className, "flex flex-col p-6 ")}>
                <div className=" inline-flex items-center gap-2  ">
                    <StartIcon className="size-9 text-emerald-300" />
                    <h3 className="font-serif text-3xl "> {title}</h3>
                </div>
                <p className="text-sm text-white/60  mt-1  ">{description}</p>

            </div>

        </div>
    )
}

export default CardHeader