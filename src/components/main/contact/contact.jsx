import { NavLink } from "react-router-dom"
import GithubIcon from 'src/assets/Github-Dark.svg?react';
import CodePenIcon from 'src/assets/CodePen-Dark.svg?react';
import GmailIcon from 'src/assets/Gmail-Dark.svg?react';
import 'src/components/main/contact/contact.scss';

function Icon(){
  return (
    <div className="contact__container">
      <NavLink to="https://github.com/TimWang95" className="icon icon__github" target="_blank">
        <GithubIcon width="100%" height="100%"/>
      </NavLink>
      <NavLink to="https://codepen.io/your-work/" className="icon icon__codepen" target="_blank">
        <CodePenIcon  width="100%" height="100%"/>
      </NavLink>
      <NavLink to="mailto: tgm761@gmail.com" className="icon icon__email">
        <GmailIcon width="100%" height="100%"/>
      </NavLink>
    </div>
  )
}

export default function Contact(){
  return (
    <section className="contact" id="contact">
      <p>Get in touch</p>
      <Icon/>
    </section>
  )
}