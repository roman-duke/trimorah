import { motion, MotionStyle, Variants } from "framer-motion";
import ManagementIcon from '../../../assets/icons/management';
import InspectionIcon from '../../../assets/icons/monitor';
import './styles/overview.scss';

export default function Overview({ background } : MotionStyle) {

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
  
  return (
    <motion.section
      className="overview-section"
      style={{ background }}
    >
      <div className="overview-container">
        <h2 className="overview-header">
          From 
          <motion.span initial="initial" whileInView="inView" variants={overviewHeader} viewport={{ once: true}}> Fields</motion.span> to the 
          <motion.span initial="initial" whileInView="inView" variants={overviewHeader} viewport={{ once: true}}> Sky:</motion.span> 
          <motion.span initial="initial" whileInView="inView" variants={overviewHeader} viewport={{ once: true}}> Trimorah</motion.span> in 
          <motion.span initial="initial" whileInView="inView" variants={overviewHeader} viewport={{ once: true}}> Focus</motion.span>
        </h2>

        <p className="overview-text">This is Trimorah, where innovation and agriculture converge to redefine 
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
                Trimorah's approach to crop monitoring utilizes advanced sensors
                and satellite imagery to provide farmers with a detailed understanding
                of crop health.&nbsp;
                <span className="lg-text">
                  This technology enables the detection of plant diseases and post infestations
                  at early stages, allowing for timely interventions that prevent widespread damage.
                </span>
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
                This service integrates cutting-edge AI and machine learning technologies to 
                offer a comprehensive farm management system.&nbsp;
                <span className="lg-text">
                  Trimorah's platform collects and processes data from various sources, including
                  ground sensors, drones, and equipment, providing farmers with actionable insights
                  and predictive analytics.
                </span>
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
      </div>
    </motion.section>
  )
}
