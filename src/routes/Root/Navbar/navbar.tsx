import TrimorahLogo from "../../../assets/images/trimorah_logo.png";
import Curve from "./curve/curve";
import { Variants, motion } from 'framer-motion';
import { useState, useRef, RefObject } from 'react';
import LinkedInIcon from "../../../assets/icons/linkedin";
import InstagramIcon from "../../../assets/icons/instagram";
import EmailIcon from "../../../assets/icons/email";
import { cubicBezier } from "framer-motion/dom";
import './navbar.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const elementRef: RefObject<HTMLDivElement> = useRef(null);
  
  const dashVariants: Variants = {
    open: i => ({
      backgroundColor: "#fff",
      // backgroundColor: "#fffaeb",
      // backgroundColor: "#000",
      rotate: 45 * (i == 0 ? -1 : (i !== 2 ? 1 : 0)),
      y: 9 * (i == 0 && i !== 2 ?  1 : 0),
      opacity: (i == 2 ? 0 : undefined),
      transition: {
        type: 'spring',
      }
    }),

    closed: i => ({
      // backgroundColor: "#434343",
      // backgroundColor: "#fff",
      backgroundColor: "#000",
      rotate: 0,
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        delay: (i == 2 ? 0.5 : 0),
      }
    })
  }

  const navBgVariants: Variants = {
    initial: {
      x: 100
    },

    open: {
      x: (elementRef.current ? -(elementRef.current?.clientWidth - 50) : undefined),
      transition: {
        // type: 'tween',
        ease: cubicBezier(0.61, 1, 0.88, 1),
        staggerChildren: 0.1
      },
      // border: '50%',
    },

    closed: {
      x: 100,
      transition: {
        ease: cubicBezier(0.61, 1, 0.88, 1),
        duration: 0.5,
      }
    }
  }

  const navLinkVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
    },

    closed: {
      x: 20,
      opacity: 0
    }
  }

  return (
    <header className="header">
      <div className="company-description">
        <img className="company-img" src={TrimorahLogo} />
        <h1 className="company-title">Trimorah</h1>
      </div>

      <nav className="navbar">
        <motion.div className="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          {[0, 1, 2].map(i => (
            <motion.div 
              key={i}
              className="dash"
              variants={dashVariants}
              custom={i}
            />
          ))}
        </motion.div>

        <motion.div 
          ref={elementRef}
          className="nav-links"
          initial="initial"
          animate={isOpen ? "open" : "closed"}
          variants={navBgVariants}
        > 
          <div className="nav-main">
            <h5 className="main-header">Navigation</h5>
            <ul>
              {linksData.map((item, idx) => (
                <motion.li key={idx} 
                    initial={false}
                    className="link"
                    variants={navLinkVariants}
                >{item.description}</motion.li>
              ))}
            </ul>
          </div>

          <div className="nav-socials">
            <h5 className="socials-footer">Socials</h5>
            <div className="social-links">
              <a>
                <LinkedInIcon />
                <span>Linkedin</span>
              </a>

              <a>
                <InstagramIcon />
                <span>Instagram</span>
              </a>

              <a>
                <EmailIcon />
                <span>Email</span>
              </a>
            </div>
          </div>
          <Curve isOpen={isOpen}/>
        </motion.div>
      </nav>
    </header>
  )
}

type linksDataType = { id: number, description: string }[]

const linksData: linksDataType = [
  {id: 0, description: "Home"},
  {id: 1, description: "Services"},
  {id: 2, description: "About us"},
  {id: 3, description: "News"},
  {id: 4, description: "Contact us"},
]
