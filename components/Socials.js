// next Link
import Link from "next/link";

//icons
import { RiGithubFill, RiDiscordFill, RiTwitterLine, RiInstagramLine, RiFacebookBoxLine, RiDragDropLine, RiBehanceLine, RiPinterestLine } from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://twitter.com/ianujvarshney'} className="hover:text-accent transition-all duration-300">
      <RiTwitterLine />
    </Link>
    <Link href={'https://discord.com/channels/@anujvarshney'} className="hover:text-accent transition-all duration-300">
      <RiDiscordFill />
    </Link>
    <Link href={'https://www.instagram.com/ianujvarshney/'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.facebook.com/IamtheAnujvar/'} className="hover:text-accent transition-all duration-300">
      <RiFacebookBoxLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiDragDropLine />
    </Link>
    <Link href={'https://github.com/ianujvarshney'} className="hover:text-accent transition-all duration-300">
      <RiGithubFill/>
    </Link>
  </div>;
};

export default Socials;
