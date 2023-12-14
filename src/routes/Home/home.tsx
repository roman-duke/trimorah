import { useState } from 'react';
import { Variants, motion, useScroll, useTransform } from 'framer-motion';
import Slider from './slider';
import ManagementIcon from '../../assets/icons/management';
import InspectionIcon from '../../assets/icons/monitor';
import RightArrow from '../../assets/icons/rightarrow';
import './home.scss'

export default function Home() {
  const [isInView, setIsInView] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const background = useTransform(
    scrollYProgress,
    [0.2, .6],
    ["rgb(255, 250, 235)", "rgba(255, 255, 255)"],
    );
    
    
    const overviewHeader: Variants = {
      initial: {
        opacity: 0
      },
      
      inView: {
        opacity: 1,
        transition: {
          duration: 1.75
        }
      }
    } 
    
    const listItem: Variants = {
      initial: {
        scaleY: 0
      },
      
      inView: {
        scaleY: 1,
        transition: {
          delay: .5,
          duration: 1,
      }
    }
  }
  
  /* Animation for the images in the Products section */
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  /* Animation for the infinite carousel in the testimonial section */


  return (  
    <>
      <section className="hero-section">
        <h1 className="hero-header">Smart Farming, Brilliant Harvests</h1>
        <p className="hero-text">Welcome to the era of smart farming, where brilliance meets the harvest. 
          Our advanced solutions redefine agriculture, making every yield a testament to cutting-edge innovation.</p>
        <button className="hero-btn">Get Started</button>
      </section>

      <motion.section 
        className="overview-section"
        style={{ background }}
      >
        <h2 className="overview-header">
          From 
          <motion.span initial="initial" whileInView="inView" variants={overviewHeader} viewport={{ once: true}}> Fields</motion.span> to the 
          <motion.span initial="initial" whileInView="inView" variants={overviewHeader} viewport={{ once: true}}> Sky:</motion.span> 
          <motion.span initial="initial" whileInView="inView" variants={overviewHeader} viewport={{ once: true}}> M3W</motion.span> in 
          <motion.span initial="initial" whileInView="inView" variants={overviewHeader} viewport={{ once: true}}> Focus</motion.span>
        </h2>

        <p className="overview-text">This is M-Tech, where innovation and agriculture converge to redefine 
          the future of farming. Our journey is rooted in a vision to revolutionize 
          traditional farming practices using cutting-edge drone technology.
        </p>

        <motion.ul 
          className="overview-list"
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
        >
          <motion.li
            variants={listItem}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 1.5, duration: 1.5} }}
              viewport={{ once: true }}
            >
              <div className="item-heading">
                <InspectionIcon /><span className="list-header">Precision Crop Monitoring</span>
              </div>
              <p className="item-text">
                Monitor crop health, detect diseases early, and optimize 
                resource allocation for a more bountiful harvest.
              </p>
            </motion.div>
          </motion.li>

          <motion.li
            variants={listItem}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 1.5, duration: 1.5} }}
              viewport={{ once: true }}
            >
              <div className="item-heading">
                <ManagementIcon /><span className="list-header">Smart Farm Management</span>
              </div>
              <p className="item-text">
                From automated field analysis to real-time data insights, streamline 
                your farm management and boost productivity like never before.
              </p>
            </motion.div>
          </motion.li>
        </motion.ul>

        <div className="overview-buttons">
          <button className="overview-btn">
            Learn More
          </button>

          <div className="demarcation"></div>

          <button className="overview-btn">
            View Products
          </button>
        </div>

      </motion.section>

      <motion.section
        className="products-section"
      >
        <div className="product-container">
          <motion.figure
            className="figure-container"
            initial={false}
            animate={
              isInView 
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{once: true}}
            onViewportEnter={() => setIsInView(true)}
          >
            <img className="product-img" src="/src/assets/images/bee_drone.jpg" alt="Image of the Bumblebee Drone"/>
            <figcaption className="img-caption special">
              <span className="img-desc">This is Bumble Bee</span>
              <div className="img-buttons">
                <button>Learn More <RightArrow className="reg-btn"/></button>
                <button>Buy <RightArrow className="reg-btn"/></button>
              </div>
            </figcaption>
          </motion.figure>
        </div>
        
        <div className="product-container">  
          <motion.figure 
            className="figure-container"
            initial={false}
            animate={
              isInView 
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1.75 }}
            viewport={{once: true}}
            onViewportEnter={() => setIsInView(true)}
          >
            <img className="product-img" src="/src/assets/images/optimus.jpg" alt="Image of the Optimus Drone"/>
            <figcaption className="img-caption">
              <span className="img-desc">This is Optimus</span>
              <div className="img-buttons">
                <button>Learn More <RightArrow className="accent-btn"/></button>
                <button>Buy <RightArrow className="accent-btn"/></button>
              </div>
            </figcaption>
          </motion.figure>
        </div>
      </motion.section>

      <section className="testimonial-section">
        <h2 className="testimonial-header">Acknowledgements</h2>
        <p className="intro">Our work has garnered recognition and support from esteemed professors 
          and lecturers in the field.</p>
        
        <div className="quote-slider">
          <div className="quote-wrapper">
            <Slider>
              {[
                <div key={0} className="quote-slide">  
                  <blockquote className="quote-container">
                      <p className="quote">In the pursuit of innovative solutions in Agricultural Technology, M&ndash;Tech
                        has demonstrated a commendable commitment to pushing the boundaries of what is achievable.
                      </p>
                      <footer className="footer">
                        <img className="author-photo" src="/src/assets/images/random_guy.jpg" alt="Image of Head Technician"/>
                        <span>Dean of Engineering,</span>
                        <span>Prof. Petrus Nzerem.</span>
                      </footer>
                  </blockquote>
                </div>,

                <div key={1}className="quote-slide">
                  <blockquote className="quote-container">
                      <p className="quote">The intersection of technology and agriculture is an exciting frontier, and M&ndash;Tech
                      is at the forefront of leveraging electronic innovations to revolutionize farming practices.
                      </p>
                      <footer className="footer">
                        <img className="author-photo" src="/src/assets/images/random_guy.jpg" alt="Image of the HOD"/>
                        <span>HOD of E.E.E,</span>
                        <span>Dr. Omotayo Oshiga.</span>
                      </footer>
                  </blockquote>
                </div>,

                <div key={2} className="quote-slide">
                  <blockquote className="quote-container">
                      <p className="quote">I am optimistic that the work of M&ndash;Tech will not only 
                        contribute to the growth of our technological landscape but also serve as a source
                        of inspiration for our students and faculty.
                      </p>
                      <footer className="footer">
                        <img className="author-photo" src="/src/assets/images/random_guy.jpg" alt="Image of the Dean of Engineering"/>
                        <span>Head Technician,</span>
                        <span>Engr. Paul Okpe.</span>
                      </footer>
                  </blockquote>
                </div>
              ]}
            </Slider>
          </div>

          <nav className="test-navigation">
            <ul className="nav-list">
              <li className="item"></li>
              <li className="item"></li>
              <li className="item"></li>
            </ul>
          </nav>

        </div>

      </section>

      <section className="team-section">
        <h1 className="team-header">Meet our Team</h1>
        <p className="team-intro">
          Get to know the brilliant minds behind the groundbreaking ideas in M-Tech.
          Our diverse and dedicated team is united by a shared passion for pioneering 
          solutions that merge technology with agriculture.
        </p>
        <div className="figure-container">
          <ul className="figure-wrapper">
              <li className="figure-item">
                <figure className="figure">
                  <img className="team-img" src='src/assets/images/team-person-one-min.jpg' />
                  <figcaption className="img-title">
                    Nabeel
                  </figcaption>
                </figure>
              </li>

              <li className="figure-item">
                <figure className="figure">
                  <img className="team-img" src="src/assets/images/team-person-two-min.jpg" />
                  <figcaption className="img-title">
                    Badaru Musa
                  </figcaption>
                </figure>
              </li>

              <li className="figure-item">
                <figure className="figure">
                  <img className="team-img" src="src/assets/images/team-person-three-min.jpg" />
                  <figcaption className="img-title">Sarah Tanko</figcaption>
                </figure>
              </li>

              <li className="figure-item">
                <figure className="figure">
                  <img className="team-img" src="src/assets/images/team-person-four-min.jpg" />
                  <figcaption className="img-title">Jibril</figcaption>
                </figure>
              </li>
          </ul>
        </div>
      </section>
    </>
  )
}
