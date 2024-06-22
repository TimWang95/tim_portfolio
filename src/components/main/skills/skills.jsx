import JSIcon from 'src/assets/skill-icons/JavaScript.svg?react';
import CSSIcon from 'src/assets/skill-icons/CSS.svg?react';
import HtmlIcon from 'src/assets/skill-icons/HTML.svg?react';
import ReactIcon from 'src/assets/skill-icons/React-Dark.svg?react';
import JavaIcon from 'src/assets/skill-icons/Java-Dark.svg?react';
import SassIcon from 'src/assets/skill-icons/Sass.svg?react';
import TailwindCSSIcon from 'src/assets/skill-icons/TailwindCSS-Dark.svg?react';
import FigmaIcon from 'src/assets/skill-icons/Figma-Dark.svg?react';
import AIIcon from 'src/assets/skill-icons/Illustrator.svg?react';
import PSIcon from 'src/assets/skill-icons/Photoshop.svg?react';
import bgImg from '/bg-img.jpg';
import 'src/components/main/skills/skills.scss';


export default function Skills() {
  return (
    <section className="skills" id='skills'>
      <h2>My Skills</h2>
      <div className="skills__box">

        <div className="icon">
          <div className="icon__box">
            <div><JSIcon width="100%" height="100%"/></div>
          </div>
          <p>JavaScript</p>
        </div>

        <div className="icon">
          <div className="icon__box">
            <CSSIcon width="100%" height="100%"/>
          </div>
          <p>CSS</p>
        </div>

        <div className="icon">
          <div className="icon__box">
            <HtmlIcon width="100%" height="100%"/>
          </div>
          <p>HTML</p>
        </div>

        <div className="icon">
          <div className="icon__box">
            <ReactIcon width="100%" height="100%"/>
          </div>
          <p>React</p>
        </div>

        <div className="icon">
          <div className="icon__box">
            <JavaIcon width="100%" height="100%"/>
          </div>
          <p>Java</p>
        </div>

        <div className="icon">
          <div className="icon__box">
            <SassIcon width="100%" height="100%"/>
          </div>
          <p>Scss</p>
        </div>

        <div className="icon">
          <div className="icon__box">
            <TailwindCSSIcon width="100%" height="100%"/>
          </div>
          <p>TailwindCSS</p>
        </div>

        <div className="icon">
          <div className="icon__box">
            <FigmaIcon width="100%" height="100%"/>
          </div>
          <p>Figma</p>
        </div>

        <div className="icon">
          <div className="icon__box">
            <AIIcon width="100%" height="100%"/>
          </div>
          <p>Illustrator</p>
        </div>

        <div className="icon">
          <div className="icon__box">
            <PSIcon width="100%" height="100%"/>
          </div>
          <p>Photoshop</p>
        </div>
      </div>

    </section>
  )
}