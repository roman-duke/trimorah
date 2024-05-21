import MusaImg from "../../../assets/images/blah.jpg";
import SarahImg from "../../../assets/images/sarah.jpg";
import JibrilImg from "../../../assets/images/jibril.jpg";
import NabeelImg from "../../../assets/images/nabeel.jpg";
import './styles/team.scss';
import Slider from "../slider";

export default function Team() {

  return (
    <section className="team-section">
      <div className="team-container">
        <h1 className="team-header">Meet our Team</h1>
        <p className="team-intro">
          Get to know the brilliant minds behind the groundbreaking ideas in Trimorah.
          Our diverse and dedicated team is united by a shared passion for pioneering 
          solutions that merge technology with agriculture.
        </p>
        <Slider>
          {[
            <figure 
              className="figure"
            >
              <img 
                className="team-img" 
                src={NabeelImg} 
              />
              <figcaption className="img-title">
                <span className="team-person">Nabeel</span>
                <div 
                >
                  <h3 className="img-title-header">Co-Founder & CEO of M-Tech</h3>
                  <p className="img-title-text">
                    Meet the visionary leader steering M-Tech towards new horizons - Nabeel Abdulrauf.
                    With a deep-rooted passion for technological innovation and a profound understanding
                    of agriculture, Nabeel is the driving force behind our mission to revolutionize the
                    farming landscape.
                  </p>

                  <span className="yoe"><span className="work-experience-dur">2+</span> Years of experience</span>
                </div>
              </figcaption>
            </figure>,

            <figure 
              className="figure"
            >
              <img 
                className="team-img" 
                src={MusaImg} 
              />
              <figcaption className="img-title">
                <span className="team-person">Badaru Musa</span>
                <div 
                >
                  <h3 className="img-title-header">Co-Founder & CTO of M-Tech</h3>
                  <p className="img-title-text">
                    With a background in cutting-edge technologies and a keen interest 
                    in the transformative power of drones, Badaru plays a pivotal role in 
                    shaping the technological landscape of our agricultural solutions.
                  </p>

                  <span className="yoe"><span className="work-experience-dur">2+</span> Years of experience</span>
                </div>
              </figcaption>
            </figure>,

            <figure 
            className="figure"
            >
              <img 
                className="team-img" 
                src={SarahImg}
              />
              <figcaption className="img-title">
                <span className="team-person">Sarah Tanko</span>
                <div 
                >
                  <h3 className="img-title-header">Operations Manager of M-Tech</h3>
                  <p className="img-title-text">
                    With a passion for seamless execution and a keen eye for detail, Sarah 
                    plays a pivotal role in ensuring the day-to-day operations run like a 
                    well-oiled machine.
                  </p>

                  <span className="yoe"><span className="work-experience-dur">4+</span> Years of experience</span>
                </div>
              </figcaption>
            </figure>,

            <figure 
            className="figure"
            >
              <img 
                className="team-img" 
                src={JibrilImg}
              />
              <figcaption className="img-title">
                <span className="team-person">Jibril</span>
                <div 
                >
                  <h3 className="img-title-header">Product Manager of M-Tech</h3>
                  <p className="img-title-text">
                    Meet Jibril Mohammed, the visionary mind behind our product strategy. 
                    As our Product Manager, Jibril brings innovation to life, shaping our 
                    offerings into groundbreaking solutions that resonate with our clients 
                    and propel us to the forefront of the industry.
                  </p>

                  <span className="yoe"><span className="work-experience-dur">5+</span> Years of experience</span>
                </div>
              </figcaption>
            </figure>
          ]}
        </Slider>
      </div>
    </section>
  )
}
