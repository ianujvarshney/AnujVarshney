// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/project1.png',
          location: 'https://iquincesoft.com/'
        },
        {
          title: 'title',
          path: '/project2.png',
          location: 'https://caritasrevolution.com/'
        },
        {
          title: 'title',
          path: '/project3.png',
          location: 'https://anujvarshney.live/'
        },
        {
          title: 'title',
          path: '/project4.png',
          location: 'https://snap-short-url.vercel.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/project5.png',
          location: 'https://github.com/ianujvarshney/CapitalOne-Travel'
        },
        // {
        //   title: 'title',
        //   path: '/project6.png',
        //   location: 'https://awofields.com/'
        // },
        // {
        //   title: 'title',
        //   path: '/project7.png',
        //   location: 'https://lzh.3bd.myftpupload.com/'
        // },
        // {
        //   title: 'title',
        //   path: '/project8.png',
        //   location: 'https://iqdev.biz/fly-credit'
        // },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/project9.png',
    //       location: 'https://iqdev.biz/befoundnext/'
    //     },
    //     {
    //       title: 'title',
    //       path: '/project10.png',
    //       location: 'https://iqdev.biz/manam-dental/'
    //     },
    //     {
    //       title: 'title',
    //       path: '/project11.gif',
    //       location: 'https://iqdev.biz/peru/'
    //     }
    //   ],
    // },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper'

//icons
import { BsArrowRight } from 'react-icons/bs'

// next image 
import Image from 'next/image';

const WorkSlider = () => {
  return <Swiper

    spaceBetween={10}
    pagination={{
      clickable: true
    }}
    modules={[Pagination]}
    className='h-[280px] sm:h-[480px]'
  >
    {
      workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-row-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                    <a href={image.location}>
                      <div className='flex items-center justify-center relative overflow-hidden'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt=""  unoptimized={true} />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4822bd] opacity-0 group-hover:opacity-80 transition-all duration-700'> </div>
                        {/* title */}
                        <div className='absolute bottom-0 -translate-y-full group-hover:-translate-y-10 group-hover:xl:-traslate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* title 1 */}
                            <div className='delay-100'>LIVE</div>

                            {/* title 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>

                            {/* icons */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all delay-200'><BsArrowRight /></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })
    }
  </Swiper>;
};

export default WorkSlider;

