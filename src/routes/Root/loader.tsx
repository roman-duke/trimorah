import { motion, Variants } from 'framer-motion'
import DroneIcon from "../../assets/icons/drone";
import { RefObject, useRef, useEffect, useState } from 'react';
import './loader.scss'

interface LoaderProp {
  setLoading: (arg: boolean) => void;
}

export default function Loader({ setLoading }: LoaderProp) {
  const parentRef: RefObject<HTMLDivElement> = useRef(null);
  const [maxHorScale, setMaxHorScale] = useState(0);
  const [maxVerScale, setMaxVerScale] = useState(0);
  const [isAnimationStart, setIsAnimationStart] = useState(false);

  useEffect(() => {
    const element = document.getElementById('loader-indicator');
    if (!(parentRef.current && element?.clientWidth)) {
      return
    }

    setIsAnimationStart(true);
    setMaxHorScale(parentRef.current.clientWidth / element.clientWidth);
    setMaxVerScale(parentRef.current.clientHeight / element.clientHeight);

    setTimeout(() => setLoading(false), 3000);

  }, [setLoading]);

  const container: Variants = {
    hidden: {
      scaleY: 1,
      opacity: 1,
    },
  
    show: {
      scaleY: 1,
      transition: {
        duration: 3,
        staggerChildren: 0.2
      }
    },

    exit: {
      scaleY: 1,
      transition: {
        duration: 3,
        staggerChildren: 0.2,
      }
    }
  }
  
  const item1: Variants = {
    hidden: {
      y: 0,
    },
  
    show: {
      y: [0, 10, 0, 10, 0],
      transition: {
        duration: 3
      }
    }, 

    exit: {
      y: -window.innerHeight,
      transition: {
        type: 'spring',
        damping: 300,
      }
    }
  }
  
  const item2: Variants = {
    hidden: {
      opacity: 0,
      y: 0
    },
  
    show: {
      opacity: 1,
      y: -10,
      transition: {
        duration: 1
      }
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }
  
  const item3: Variants = {
    hidden: {
      scaleX: 1,
    },
  
    show: {
      scaleX: [1, 6, 15, 20, maxHorScale],
      transition: {
        duration: 3,
        times: [0, 0.1, 0.65, 0.7, 1]
      }
    },

    exit: {
      y: -20,
      scaleY: maxVerScale * 1.25,
      backgroundColor: '#fffaeb',
      transition: {
        duration: 3
      }
    }
  }

  return (
    <motion.div 
      ref={parentRef}
      className='loader-page'
      initial="hidden"
      animate={isAnimationStart ? "show" : "hidden"}
      exit="exit"
      variants={container}
    >
    
    <motion.div
      className="drone-icon"
      variants={item1}
    >
      <DroneIcon />
    </motion.div>

    <motion.span
      variants={item2}
      >Loading...</motion.span>

    <motion.div 
      id="loader-indicator"
      className="loader-indicator"
      variants={item3}
      // onAnimationComplete={() => setLoading(false)}
      />
    </motion.div>
  )
}