import ArrowUp from 'src/assets/arrow-up.svg?react';

export default function Footer(){
  return (
    <section className="footer">
      <div className="row">
        <p>© Tim Wang 2024</p>
      </div>
      <a href="#home" className="arrow">
        <ArrowUp width="100%" height="100%"/>
      </a>
    </section>
  )
}