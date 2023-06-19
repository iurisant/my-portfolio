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
import Imgtail from '../../img/tailwindcss.svg';
import Imgboot from '../../img/bootstrap.svg';
import Imgkanban from '../../img/kanban.svg';
import Imgscrum from '../../img/scrum.svg';
import Imgteamw from '../../img/teamwork.svg';
import Imgspeech from '../../img/speech.svg';

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
      <div className='w-4/5 max-w-4xl p-2 flex items-center'>
        <span className='font-semibold font-monospace text-2xl text-sky-800 mr-2 lg:text-3xl'>1.</span>
        <h2 className='font-semibold font-monospace text-2xl text-black lg:text-3xl'> Hard Skills</h2>
      </div>
      <div className='w-4/5 max-w-4xl rounded-xl flex items-center'>
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
              url={Imgtail}
              title="TailwindCSS"
            />
          </div>
          <div className="keen-slider__slide number-slide7">
            <Skills
              url={Imgboot}
              title="Bootstrap"
            />
          </div>
          <div className="keen-slider__slide number-slide8">
            <Skills
              url={Imgsql}
              title="MySQL"
            />
          </div>
          <div className="keen-slider__slide number-slide9">
            <Skills
              url={Imggit}
              title="Git"
            />
          </div>
          <div className="keen-slider__slide number-slide10">
            <Skills
              url={Imgfig}
              title="Figma"
            />
          </div>
        </div>
      </div>
      <div className='w-4/5 max-w-4xl p-2 flex items-center mt-8'>
        <span className='font-semibold font-monospace text-2xl text-sky-800 mr-2 lg:text-3xl'>2.</span>
        <h2 className='font-semibold font-monospace text-2xl text-black lg:text-3xl'> Soft Skills</h2>
      </div>
      <div className='w-4/5 max-w-4xl rounded-xl flex items-center'>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Skills
              url={Imgspeech}
              title="Comunicação"
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Skills
              url={Imgteamw}
              title="Team Work"
            />
          </div>
        </div>
      </div>
      <div className=' w-4/5 max-w-4xl p-2 flex items-center mt-8'>
        <span className='font-semibold font-monospace text-2xl text-sky-800 mr-2 lg:text-3xl'>3.</span>
        <h2 className='font-semibold font-monospace text-2xl text-black lg:text-3xl'> Metodologias</h2>
      </div>
      <div className='w-4/5 max-w-4xl rounded-xl flex items-center'>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Skills
              url={Imgscrum}
              title="Scrum"
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Skills
              url={Imgkanban}
              title="Kanban"
            />
          </div>
        </div>
      </div>
    </section>
  )
}