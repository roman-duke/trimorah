import { Variants, motion } from "framer-motion";
import { useState } from "react";
import './styles/team.scss';

const teamWrapper: Variants = {
  show: {
    transition: {
      duration: .75,
    }
  },

  hide: {
    y: 0,
    transition: {
      duration: .5,
    }
  }
}

const teamMember: Variants = {
  show: i => ({ 
    x: i == 1 || i == 3 ? '-50%' : 0,
    translateY: i == 2 || i == 3 ? '-25%' : 0,
    width: '200%',
    height: '95vh',
    zIndex: 1,
    transition: {
      delay: .25,
      type: 'tween',
    }
  }),

  inActiveHide: {
    opacity: 0,
    transition: {
      duration: .25
    }
  },

  hide: {
    x: 0,
    width: '100%',
    zIndex: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      opacity: {
        delay: .25,
      }
    },
  }
}

const teamMemberItem: Variants = {
  show: {
    padding: `0rem`,
  },

  hide: {
    padding: '2rem',
  }
}

const imgAnim: Variants = {
  show: {
    width: '100%',
    borderRadius: 0,
    transition : {
      duration: 1,
      ease: "easeInOut",
    }
  },

  hide: {
    width: '100%',
    borderRadius: `50%`,
    transition: {
      duration: 1,
      ease: "easeInOut",
    }
  }
}

const imgDesc: Variants = {
  show: {
    display: 'block',
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: .5
    }
  },

  hide: (i) => ({
    display: 'none',
    x: (i == 0 || i == 2) ? '-100%' : '100%',
    opacity: 0,
  })
}


export default function Team() {
  const [cardClicked, setCardClicked] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  function toggleCard(n: number) {
    setCardClicked(!cardClicked);
    setActiveCard(n);
  }

  return (
    <section className="team-section">
      <h1 className="team-header">Meet our Team</h1>
      <p className="team-intro">
        Get to know the brilliant minds behind the groundbreaking ideas in M-Tech.
        Our diverse and dedicated team is united by a shared passion for pioneering 
        solutions that merge technology with agriculture.
      </p>
      <div className="figure-container">
        <motion.ul 
          className="figure-wrapper"
          variants={teamWrapper}
          animate={cardClicked ? 'show' : 'hide'}
        >
          <motion.li 
            className="figure-item"
            variants={teamMember}
            animate={cardClicked ? `${activeCard == 0 ? "show" : "inActiveHide" }` : "hide"}
            onClick={() => toggleCard(0)}
          >
            <motion.figure 
              className="figure"
              variants={teamMemberItem}
              animate={cardClicked ? "show" : "hide"}
            >
              <motion.img 
                className="team-img" 
                src='src/assets/images/team-person-one-min.jpg' 
                variants={imgAnim}
                animate={cardClicked && activeCard == 0 ? "show" : "hide"}
              />
              <figcaption className="img-title">
                Nabeel
                <motion.div 
                  custom={0}
                  variants={imgDesc}
                  animate={cardClicked && activeCard == 0 ? "show" : "hide"}
                  className={`info ${cardClicked && activeCard == 0 ? "active" : null}`}
                >
                  <h3 className="img-title-header">Co-Founder & CEO of M-Tech</h3>
                  <p className="img-title-text">
                    Meet the visionary leader steering M-Tech towards new horizons - Nabeel Abdulrauf.
                    With a deep-rooted passion for technological innovation and a profound understanding
                    of agriculture, Nabeel is the driving force behind our mission to revolutionize the
                    farming landscape.
                  </p>

                  <span><span className="work-experience-dur">2+</span> years of experience</span>
                </motion.div>
              </figcaption>
            </motion.figure>
          </motion.li>

          <motion.li 
            className="figure-item"
            custom={1}
            variants={teamMember}
            animate={cardClicked ? `${activeCard == 1 ? "show" : "inActiveHide" }` : "hide"}
            onClick={() => toggleCard(1)}
          >
            <motion.figure 
              className="figure"
              variants={teamMemberItem}
              animate={cardClicked && activeCard == 1 ? "show" : "hide"}
            >
              <motion.img 
                className="team-img" 
                src="src/assets/images/team-person-two-min.jpg" 
                variants={imgAnim}
                animate={cardClicked && activeCard == 1? "show" : "hide"}
              />
              <figcaption className="img-title">
                Badaru Musa
                <motion.div 
                  custom={1}
                  variants={imgDesc}
                  animate={cardClicked && activeCard == 1 ? "show" : "hide"}
                  className={`info ${cardClicked && activeCard == 1 ? "active" : null}`}
                >
                  <h3 className="img-title-header">Co-Founder & CTO of M-Tech</h3>
                  <p className="img-title-text">
                    With a background in cutting-edge technologies and a keen interest 
                    in the transformative power of drones, Badaru plays a pivotal role in 
                    shaping the technological landscape of our agricultural solutions.
                  </p>

                  <span><span className="work-experience-dur">2+</span> years of experience</span>
                </motion.div>
              </figcaption>
            </motion.figure>
          </motion.li>

          <motion.li 
            className="figure-item"
            custom={2}
            variants={teamMember}
            animate={cardClicked ? `${activeCard == 2 ? "show" : "inActiveHide" }` : "hide"}
            onClick={() => toggleCard(2)}
          >
            <motion.figure 
              className="figure"
              variants={teamMemberItem}
              animate={cardClicked && activeCard == 2? "show" : "hide"}
            >
              <motion.img 
                className="team-img" 
                src="src/assets/images/team-person-three-min.jpg" 
                variants={imgAnim}
                animate={cardClicked && activeCard == 2 ? "show" : "hide"}
              />
              <figcaption className="img-title">
                Sarah Tanko
                <motion.div 
                  custom={2}
                  variants={imgDesc}
                  animate={cardClicked && activeCard == 2 ? "show" : "hide"}
                  className={`info ${cardClicked && activeCard == 2 ? "active" : null}`}
                >
                  <h3 className="img-title-header">Operations Manager of M-Tech</h3>
                  <p className="img-title-text">
                    With a passion for seamless execution and a keen eye for detail, Sarah 
                    plays a pivotal role in ensuring the day-to-day operations run like a 
                    well-oiled machine.
                  </p>

                  <span><span className="work-experience-dur">4+</span> years of experience</span>
                </motion.div>
              </figcaption>
            </motion.figure>
          </motion.li>

          <motion.li 
            className="figure-item"
            custom={3}
            variants={teamMember}
            animate={cardClicked ? `${activeCard == 3 ? "show" : "inActiveHide" }` : "hide"}
            onClick={() => toggleCard(3)}
          >
            <motion.figure 
              className="figure"
              variants={teamMemberItem}
              animate={cardClicked && activeCard == 3 ? "show" : "hide"}
            >
              <motion.img 
                className="team-img" 
                src="src/assets/images/team-person-four-min.jpg" 
                variants={imgAnim}
                animate={cardClicked && activeCard == 3 ? "show" : "hide"}
              />
              <figcaption className="img-title">
                Jibril
                <motion.div 
                  custom={3}
                  variants={imgDesc}
                  animate={cardClicked && activeCard == 3 ? "show" : "hide"}
                  className={`info ${cardClicked && activeCard == 3 ? "active" : null}`}
                >
                  <h3 className="img-title-header">Product Manager of M-Tech</h3>
                  <p className="img-title-text">
                    Meet Jibril Mohammed, the visionary mind behind our product strategy. 
                    As our Product Manager, Jibril brings innovation to life, shaping our 
                    offerings into groundbreaking solutions that resonate with our clients 
                    and propel us to the forefront of the industry.
                  </p>

                  <span><span className="work-experience-dur">5+</span> years of experience</span>
                </motion.div>
              </figcaption>
            </motion.figure>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  )
}
