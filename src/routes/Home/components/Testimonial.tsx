import Slider from '../slider';
import './styles/testimonial.scss';

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-header">Acknowledgements</h2>
      <p className="intro">Our work has garnered recognition and support from esteemed professors 
        and lecturers in the field.</p>
      
      <div className="quote-slider">
        <div className="quote-wrapper">
          <Slider>
            {[
              <div key={0} className="quote-slide">  
                <blockquote className="quote-container">
                    <p className="quote">In the pursuit of innovative solutions in Agricultural Technology, M&ndash;Tech
                      has demonstrated a commendable commitment to pushing the boundaries of what is achievable.
                    </p>
                    <footer className="footer">
                      <img className="author-photo" src="/src/assets/images/random_guy.jpg" alt="Image of Head Technician"/>
                      <span>Dean of Engineering,</span>
                      <span>Prof. Petrus Nzerem.</span>
                    </footer>
                </blockquote>
              </div>,

              <div key={1}className="quote-slide">
                <blockquote className="quote-container">
                    <p className="quote">The intersection of technology and agriculture is an exciting frontier, and M&ndash;Tech
                    is at the forefront of leveraging electronic innovations to revolutionize farming practices.
                    </p>
                    <footer className="footer">
                      <img className="author-photo" src="/src/assets/images/random_guy.jpg" alt="Image of the HOD"/>
                      <span>HOD of E.E.E,</span>
                      <span>Dr. Omotayo Oshiga.</span>
                    </footer>
                </blockquote>
              </div>,

              <div key={2} className="quote-slide">
                <blockquote className="quote-container">
                    <p className="quote">I am optimistic that the work of M&ndash;Tech will not only 
                      contribute to the growth of our technological landscape but also serve as a source
                      of inspiration for our students and faculty.
                    </p>
                    <footer className="footer">
                      <img className="author-photo" src="/src/assets/images/random_guy.jpg" alt="Image of the Dean of Engineering"/>
                      <span>Head Technician,</span>
                      <span>Engr. Paul Okpe.</span>
                    </footer>
                </blockquote>
              </div>
            ]}
          </Slider>
        </div>

        <nav className="test-navigation">
          <ul className="nav-list">
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
