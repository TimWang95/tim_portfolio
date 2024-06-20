import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Arrow from 'src/assets/arrow.svg?react';
import 'swiper/css';
import 'swiper/css/bundle';
import './home.scss';

export default function Home(){
  const slides = [
    {
      image: "src/assets/tim1.jpg",
      title: "Slide 1",
      content: "Always be better than yesterday",
    },
    {
      image: "src/assets/tim2.jpg",
      title: "Slide 2",
      content: "Love Adventure & Emvrace Challenges",
    },
  ]
  
  return (
    <section className="home" id='home'>
      <Swiper 
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000}}
        effect='fade'
        speed={500}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <h2>{slide.content}</h2>
            <img src={slide.image} alt={slide.title}/>
          </SwiperSlide>
        ))} 
      </Swiper>
      <div className="arrow__container">
        <a className="arrow" href="#about"><Arrow/></a>
      </div>
    </section>
  )
}