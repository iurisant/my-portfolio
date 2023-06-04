import "keen-slider/keen-slider.min.css"

import Skills from './Skills';
import Imgjs from '../../img/js.svg';
import Imgjsx from '../../img/react.svg';
import Imgfig from '../../img/figma.svg';
import Imgcss from '../../img/css.svg';
import Imgsql from '../../img/sql.svg';
import Imggit from '../../img/git.svg';
import Imghtml from '../../img/html.svg';
import Imgnode from '../../img/node.svg';

export default function App() {
  return (
    <div className='w-2/3 max-w-4xl rounded-xl'>
      <div className="keen-slider">
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
  )
}
