//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'


//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";



// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Full-Stack Web Development',
    description:
      'Building scalable MERN applications using React.js, Node.js, Express, and MongoDB with clean and modular architecture.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Blockchain & Smart Contracts',
    description:
      'Developing and auditing Solidity smart contracts, DApps, and Web3 integrations using Ethers.js, Hardhat, and WalletConnect.',
  },
  {
    icon: <RxDesktop />,
    title: 'API & Cloud Integration',
    description:
      'Designing secure REST APIs, integrating third-party services, and deploying apps using Docker, AWS EC2, and S3.',
  },
  {
    icon: <RxReader />,
    title: 'UI/UX & Frontend Optimization',
    description:
      'Creating responsive UIs with Next.js, Chakra UI, and Tailwind CSS — ensuring smooth animations and high performance.',
  },
  {
    icon: <RxRocket />,
    title: 'DevOps & CI/CD Automation',
    description:
      'Implementing CI/CD pipelines with GitHub Actions and Docker for automated testing, build, and deployment workflows.',
  },
];




//import required modules
import { FreeMode, Pagination } from 'swiper'

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  }}

    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
  >
    {
      serviceData.map((item, index) => {
        return <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-2 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/* title & desc*/}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default ServiceSlider;
