import { NavLink } from 'react-router-dom';
import 'src/components/main/works/works.scss';
import GithubIcon from 'src/assets/logo-github.svg?react';
import EyeIcon from 'src/assets/eye-outline.svg?react';

const worksData = [
  {
    title: "Space Tourism",
    imgUrl: "src/assets/space-tourism.png",
    demoUrl: "https://main--luminous-basbousa-303c8a.netlify.app/",
    repoUrl: "https://github.com/TimWang95/space-tourism-website",
  },
  {
    title: "Room Homepage",
    imgUrl: "src/assets/04-room-homepage.jpg",
    demoUrl: "https://main--radiant-dusk-efc6d4.netlify.app/#home",
    repoUrl: "https://github.com/TimWang95/room-homepage",
  },
  {
    title: "Sunnyside",
    imgUrl: "src/assets/05-sunnyside-agency-landing-page.jpg",
    demoUrl: "https://lucent-praline-ec32b2.netlify.app/",
    repoUrl: "https://github.com/TimWang95/sunnyside-agency-landing-page",
  }
]


export default function Works(){
  
  return (
    <section className="works" id='works'>
      <h2>My Works</h2>
      {worksData.map((item, index) => (
        <div className="work" key={index}>
          <div className="work__img">
            <img src={item.imgUrl} alt={item.title} />
          </div>

          <div className="work__content">
            <p className='title'>{item.title}</p>
            <div className="work__content__btns">
              <div className="btn">
                <NavLink to={item.demoUrl} className="demo">
                  <div className="img__box">
                    <EyeIcon width="100%" height="100%"/>
                  </div>
                  Demo
                </NavLink>
              </div>
              <div className="btn">
                <NavLink to={item.repoUrl} className="repo">
                  <div className="img__box">
                    <GithubIcon width="100%" height="100%"/>
                  </div>
                  Repo
                </NavLink>
              </div>
            </div>
          </div>
        </div>  
      ))}
    </section>
  )
}