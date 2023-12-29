import { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import EarthCanvas from './canvas/Earth';
import StarsCanvas from "./canvas/Stars";
import './styles/contact.scss';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="contact-section">
      <motion.div 
        className="contact-container"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-100%)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}
      >
        <span className="contact-sub-text">Get in touch</span>
        <h3 className="contact-main-text">Contact</h3>
        <form className="contact-form">
          <label className="contact-label">
            <span className="field-title">Your Name</span>
            <input 
              className="input"
              type="text"
              name="name"
              placeholder="Richard Feynman"
              autoComplete="on"
            />
          </label>

          <label className="contact-label">
            <span className="field-title">Email</span>
            <input
              className="input"
              type="text"
              name="email"
              placeholder="richard@feynman.com"
              autoComplete="on"
            />
          </label>

          <label className="contact-label">
            <span className="field-title">Your Message</span>
            <textarea
              className="input text-area"
              name="message"
            />
          </label>

          <button className="form-btn" type="submit">Send</button>
        </form>  
      </motion.div>

      <motion.div
        className="canvas-container"
      >
        <EarthCanvas />
      </motion.div>

      <StarsCanvas />
    </section>
  )
}
