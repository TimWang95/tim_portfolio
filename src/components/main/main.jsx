import Home from './home/home';
import About from './about/about';
import Skills from './skills/skills';
import Works from './works/works';

export default function Main(){
  return (
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Works/>
    </main>
  )
}