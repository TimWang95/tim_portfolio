import CrIcon from '/cr-icon.png';
import 'src/components/main/about/about.scss';

export default function About(){
  const resumeUrl = "https://www.cakeresume.com/tim-wang-8993f8";

  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>「Always be better than yesterday」</p>
      <div className="about__container">
        <p>您好，我是天佑！喜歡嘗試新事物，注重視覺美感與設計能力，致力成為具有設計與工程能力並存的工程師。</p>
        <p>我相信每一次的挑戰都是成長的契機，不斷接受挑戰並追求突破，是我持續進步的動力泉源。</p>
        <p>期許自己持續精進技術實力，不停歇地學習和探索新技術，並與團隊攜手解決難題、推動公司持續發展，為團隊帶來創新與價值。</p>
        
        <div className="resume__container">
          <div className="icon__container">
            <img src={CrIcon} alt="cakeresume-icon" />
          </div>
            <a href={resumeUrl} target='_blank'>My Resume</a>
        </div>

      </div>
    </section>
  )
}