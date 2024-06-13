import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useWidthSize from 'src/hooks/useWidthSize';
import useActive from 'src/hooks/useActive';

function Menu(){
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list__item">
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__list__item">
          <NavLink to="/">
            <span>About</span>
          </NavLink>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__list__item">
          <NavLink to="/">
            <span>Skills</span>
          </NavLink>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__list__item">
          <NavLink to="/">
            <span>Project</span>
          </NavLink>
        </li>
      </ul>
      <ul className="nav__list">
        <li className="nav__list__item">
          <NavLink to="/">
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

function HamBurger({onClick}){
  return (
    <button onClick={onClick} className='burger__container'>
      <div className='burger__line line-1'></div>
      <div className='burger__line line-2'></div>
      <div className=' burger__line line-3'></div>
    </button>
  )
}

export default function Header(){
  const { width } = useWidthSize();
  const { active, handleToggle, setActive } = useActive();
  const headerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if(headerRef.current && !headerRef.current.contains(e.target)) {
        setActive(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [setActive])

  return (
    <>
        <header className="header" ref={headerRef}>
          {/* moblie */}
          {width < 768 && (
            <HamBurger onClick={handleToggle}/>
          )}
          {!active ? (
            null
          ):(
            <Menu/>
          )}

          {/* desktop */}
          {(width >= 768 && active == false) && (
            <Menu/>
          )}
        </header>
    </>
  )
}