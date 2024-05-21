import { Variants, motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface AuxProps {
  children: ReactNode,
  title: ReactNode,
}

const itemMenu: Variants = {
  hide: {
    display: 'none',
    visibility: 'hidden',
    y: '-20%',
  },

  show: {
    display: 'block',
    visibility: 'visible',
    y: 0,
    transition: {
      type: 'tween',
      duration: .3
    }
  }
}

const menuToggle: Variants = {
  hide: {
    rotate: '0deg',
    transition: {
      type: 'tween',
    }
  },
  
  show: {
    rotateX: '180deg',
    transition: {
      type: 'tween',
      duration: .3,
    }
  }
}


export default function DropDown({title, children} : AuxProps) {
  
  const [clicked, setClicked] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  
  function toggleCard(n: number) {
    setClicked(!clicked);
    setActiveCard(n);
  }

  return (
    <>
      <div 
        className="item-description"
        onClick={() => toggleCard(0)} 
      >
        <a>{title}</a>
        <motion.span 
          className="mobile-toggle"
          variants={menuToggle}
          animate={clicked && activeCard == 0 ? "show" : "hide"}
        >&or;</motion.span>
      </div>

      <motion.ul 
        className="item-menu"
        variants={itemMenu}
        animate={clicked && activeCard == 0 ? "show" : "hide"}
      >
        {children}
      </motion.ul>
    </>
  )
}
