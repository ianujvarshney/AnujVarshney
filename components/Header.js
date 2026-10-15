// next image
import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center xl:px-16 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-x-2 py-5 xl:py-8">
          {/* logo */}
          <Link href={'/'} aria-label="Anuj Varshney, home" className="shrink-0">
            <Image src={'/logo.svg'} width={220} height={48} unoptimized={true} alt="Anuj Varshney" priority={true} className="w-[118px] min-[375px]:w-[130px] sm:w-[180px] xl:w-[220px] h-auto" />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
