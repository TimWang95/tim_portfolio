import Home from './home/home';
import About from './about/about';
import Skills from './skills/skills';
import Works from './works/works';
import Contact from './contact/contact';

export default function Main(){
  return (
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
    </main>
  )
}