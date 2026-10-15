//next image
import Image from "next/image";

//next link
import Link from "next/link";

// icons
import { HiArrowRight } from 'react-icons/hi2'

const ProjectsBtn = () => {
  return <div className="shrink-0">

    <Link href={'/work'} aria-label="See my projects" className="relative w-[140px] h-[140px] sm:w-[185px] sm:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat rounded-full group">

      <Image src={'/rounded-text.png'} width={141} height={148} alt='' unoptimized={true} className="animate-spin-slow w-full h-full max-w-[106px] max-h-[111px] sm:max-w-[141px] sm:max-h-[148px]" />

      <HiArrowRight aria-hidden="true" className="absolute text-3xl sm:text-4xl group-hover:translate-x-2 transition-all duration-300 "/>
    </Link>
  </div>;
};

export default ProjectsBtn;
