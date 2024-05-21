import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface AuxProps {
  children: React.ReactElement[];
}

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },

  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },

  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      display: "none"
    };
  }
}

/** 
 * This is straight up from the framer motion AnimatePresence tutorial
 */

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
}

const wrap = (lB: number, uB: number, x: number) => {
  if (x >= lB) { 
    return  x % uB; 
  } else {
    const num = Math.abs(x);
    return num%uB == 0 ? lB : uB - num%uB;
  }
}

export default function Slider({children} : AuxProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have a fixed number of slides, but we paginate them absolutely (ie 1, 2, 3, 4, 5,...) and 
  // then wrap that within the 0-(no. of slides - 1) to find our slide ID in the array. 

  const slideIndex = wrap(0, 4, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // const jumpTo = (prev: number, curr: number) => {
  //   setPage([curr, curr - prev]);
  // }
  
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: {duration: 1}
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0}}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {children[slideIndex]}
        </motion.div>
      </AnimatePresence>
      
    </>
  )
}
