import { Variants, motion } from 'framer-motion';
import './curve.scss'

export default function Curve({isOpen} : {isOpen : boolean}) {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q0 ${window.innerHeight/2} 100 0`;

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`;

  const path: Variants = {
    open: {
      d: targetPath,
      transition: {
        duration: .5,
      }
    },

    close: {
      d: initialPath,
      transition: {
        duration: .5,
      }
    }
  }

  return (
    <svg className="svgCurve">
      <motion.path 
        animate={isOpen ? "open" : "close"}
        variants={path}
      />
    </svg>
  )
}
