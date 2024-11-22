import Image from "next/image";
import Link from "next/link";

interface Prop {
    label: string;
    link: string;
    logo: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({label, link, logo, className, onClick}:Prop) => {
  return (
    <button
    className={className}
    onClick={onClick}
    >
        <Link href={link} className="relative group flex items-center border border-[#ffb400] rounded-[56px] gap-2">
                <p className="pl-8 text-[#666] dark:text-[#FFF] font-bold font-[sans|sarif] uppercase group-hover:text-[#FFF] group-hover:opacity-0">
                {label}
                </p>
                <span
                    className={`absolute bottom-0  transform scale-x-0 origin-right opacity-0 text-center bg-[#ffb400] uppercase font-bold text-white rounded-3xl  py-4 pl-7 pr-14 duration-500 ease-in-out z-[-1]
                    group-hover:opacity-100 group-hover:scale-x-100`}
                    >
                {label}
                </span>
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#ffb400] ">
                <Image
                    src={logo}
                    alt="icon"
                    width={15}
                    height={15}
                />
                </div>
        </Link>
    </button>
  );
};

export default Button;
