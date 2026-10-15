// next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none h-full items-end">
    <Image src={'/avatar1.png'} width={1280} height={731} sizes="(min-width: 1200px) 1200px, 1px" alt="Portrait of Anuj Varshney" className="translate-z-0 w-full h-auto" />
  </div>;
};

export default Avatar;
