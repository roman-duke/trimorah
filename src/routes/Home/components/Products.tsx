import { useState } from "react";
import { motion } from "framer-motion";
import RightArrow from '../../../assets/icons/rightarrow';
import './styles/products.scss';

export default function Products() {
  const [isInView, setIsInView] = useState(false);
  
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    <motion.section className="products-section">
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
  )
}
