
//next image
import Image from "next/image";

const Bulb = () => {
  return <div className="fixed -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px] pointer-events-none hidden md:block" aria-hidden="true">
    <Image src={'/bulb.png'} width={256} height={392} sizes="260px" className="w-full h-auto" alt='' />
  </div>;
};

export default Bulb;
