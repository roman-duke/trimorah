import { useScroll, useTransform } from 'framer-motion';
import Overview from './components/Overview';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import News from './components/News';
import Contact from './components/Contact';
import './home.scss'

export default function Home() {

  const { scrollYProgress } = useScroll();
  
  const bg = useTransform(
    scrollYProgress,
    [0.1, .2],
    ["rgb(255, 250, 235)", "rgba(255, 255, 255)"],
  );   

  return (  
    <>
      <section className="hero-section">
        <h1 className="hero-header">Smart Farming, Brilliant Harvests</h1>
        <p className="hero-text">Welcome to the era of smart farming, where brilliance meets the harvest. 
          Our advanced solutions redefine agriculture, making every yield a testament to cutting-edge innovation.</p>
        <button className="hero-btn">Get Started</button>
      </section>

      <Overview background={bg}/>

      <Products />

      <Testimonial />

      <Team />

      <News />

      <Contact />
    </>
  )
}
