//icons
import { RiGithubFill, RiLinkedinFill, RiTwitterXLine, RiInstagramLine, RiDiscordFill } from 'react-icons/ri'

// links
import { socials } from '../lib/site';

const icons = {
  GitHub: <RiGithubFill />,
  LinkedIn: <RiLinkedinFill />,
  'X (Twitter)': <RiTwitterXLine />,
  Instagram: <RiInstagramLine />,
  Discord: <RiDiscordFill />,
};

const Socials = () => {
  return <ul className="flex items-center text-lg">
    {socials.map((social) => (
      <li key={social.name}>
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${social.name} (opens in a new tab)`}
          title={social.name}
          className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:text-accent transition-colors duration-300"
        >
          {icons[social.name]}
        </a>
      </li>
    ))}
  </ul>;
};

export default Socials;
