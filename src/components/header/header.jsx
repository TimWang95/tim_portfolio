import { useState, useRef, useEffect } from 'react';
import useWidthSize from 'src/hooks/useWidthSize';
import useActive from 'src/hooks/useActive';

function Menu({scrolled}){
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <ul className="nav__list">
        <li className="nav__list__item">
            <a href="#home">
              <span>Home</span>
            </a>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__list__item">
            <a href="#about">
            <span>About</span>
            </a>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__list__item">
            <a href="#skills">
              <span>Skills</span>
            </a>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__list__item">
            <a href="#works">
              <span>Project</span>
            </a>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__list__item">
            <a href="#contact">
              <span>Contact</span>
            </a>
        </li>
      </ul>
    </nav>
  )
}

function Burger({ onClick }){
  return (
    <label htmlFor="burger" className='burger__container' >
      <input type="checkbox" id='burger' onClick={onClick}/>
      <div className='burger__line line-1'></div>
      <div className='burger__line line-2'></div>
      <div className=' burger__line line-3'></div>
    </label>
  )
}

export default function Header(){
  const { width } = useWidthSize();
  const { active, handleToggle, setActive } = useActive();
  const headerRef = useRef(null);
  const [ scrolled, setScrolled ] = useState(false);
    
  useEffect(() => {
    function handleClickOutside(e) {
      if(headerRef.current && !headerRef.current.contains(e.target)) {
        setActive(false);
      
        document.getElementById('burger').checked = false;
      }
    }

    function handleScroll() {
      const isScrolled = window.scrollY > 0 ;
      setScrolled(isScrolled);
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    }
  }, [setActive])

  return (
    <>
        <header className="header" ref={headerRef}>
          {/* moblie */}
          {width < 768 && (
            <Burger onClick={handleToggle}/>
          )}
          {!active ? (
            null
          ):(
            <Menu/>
          )}

          {/* desktop */}
          {(width >= 768 && active == false) && (
            <Menu scrolled={scrolled}/>
          )}
        </header>
    </>
  )
}