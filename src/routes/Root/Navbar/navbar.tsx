import LogoIcon from "../../../assets/icons/logo";
import Curve from "./curve/curve";
import { Variants, motion } from 'framer-motion';
import { useState, useRef, RefObject } from 'react';
import './navbar.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const elementRef: RefObject<HTMLUListElement> = useRef(null);
  
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
      backgroundColor: "#434343",
      // backgroundColor: "#fff",
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
      x: 50
    },

    open: {
      x: (elementRef.current ? -(elementRef.current?.clientWidth) : undefined),
      transition: {
        type: 'tween',
        staggerChildren: 0.1
      }
    },

    closed: {
      x: 50,
      transition: {
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
        <LogoIcon />
        <h1 className="company-title">M3W.</h1>
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

        
        <div className="nav-links-wrapper">  
          <motion.ul 
            ref={elementRef}
            className="nav-links"
            initial="initial"
            animate={isOpen ? "open" : "closed"}
            variants={navBgVariants}
          >
            {linksData.map((item, idx) => (
              <motion.li key={idx} 
                  initial={false}
                  className="link"
                  variants={navLinkVariants}
              >{item.description}</motion.li>
            ))}
            <Curve isOpen={isOpen}/>
          </motion.ul>
        </div>
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