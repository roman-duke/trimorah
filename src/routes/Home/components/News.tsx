import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './styles/news.scss';

export default function News() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="news-section">
      <motion.div 
        ref={ref}
        className="news-content-wrapper"
        style={{
          transform: isInView ? "none" : "translateX(-100%)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}
      >
        <h2 className="news-header">Subscribe to Our Newsletter</h2>
        <p className="news-text">
          Subscribe to our newsletter for exclusive updates 
          on our latest innovations, company news, and expert 
          tips for optimizing your agricultural practices.
        </p>
        <button className="news-btn">Subscribe</button>
      </motion.div>
    </section>
  )
}
