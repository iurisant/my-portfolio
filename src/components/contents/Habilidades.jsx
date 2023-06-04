import React from "react"

import Skills from './Skills';
import Imgjs from '../../img/js.svg';
import Imgjsx from '../../img/react.svg';
import Imgfig from '../../img/figma.svg';
import Imgcss from '../../img/css.svg';
import Imgsql from '../../img/sql.svg';
import Imggit from '../../img/git.svg';
import Imghtml from '../../img/html.svg';
import Imgnode from '../../img/node.svg';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Habilidades() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: "auto",
      spacing: 20,
    },
  })

  return (
    <section
      id="Habilidades"
      className='relative z-10 p-2/3 flex flex-col justify-center items-center bg-white text-black overflow-hidden'
    >
      <h2 className='mt-20 font-extrabold text-5xl'>Habilidades</h2>
      <span className='my-12 border' />
      <div className='w-2/3 max-w-4xl p-2 flex items-center'>
        <span className='font-semibold font-monospace text-2xl text-sky-800 mr-2 lg:text-3xl'>1.</span>
        <h2 className='font-semibold font-monospace text-2xl text-black lg:text-3xl'> Hard Skills</h2>
      </div>
      <div className='w-2/3 max-w-4xl rounded-xl'>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Skills
              url={Imghtml}
              title="HTML"
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <Skills
              url={Imgcss}
              title="CSS"
            /></div>
          <div className="keen-slider__slide number-slide3">
            <Skills
              url={Imgjs}
              title="JavaScript"
            />
          </div>
          <div className="keen-slider__slide number-slide4">
            <Skills
              url={Imgjsx}
              title="React"
            />
          </div>
          <div className="keen-slider__slide number-slide5">
            <Skills
              url={Imgnode}
              title="NodeJs"
            />
          </div>
          <div className="keen-slider__slide number-slide6">
            <Skills
              url={Imgsql}
              title="MySQL"
            />
          </div>
          <div className="keen-slider__slide number-slide7">
            <Skills
              url={Imggit}
              title="Git"
            />
          </div>
          <div className="keen-slider__slide number-slide8">
            <Skills
              url={Imgfig}
              title="Figma"
            />
          </div>
        </div>
      </div>
      <div className='w-2/3 max-w-4xl p-2 flex items-center mt-8'>
        <span className='font-semibold font-monospace text-2xl text-sky-800 mr-2 lg:text-3xl'>2.</span>
        <h2 className='font-semibold font-monospace text-2xl text-black lg:text-3xl'> Soft Skills</h2>
      </div>
      <div className='w-2/3 max-w-4xl rounded-xl'>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Skills
              url=""
              title=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}