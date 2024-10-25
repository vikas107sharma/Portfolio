import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">I'm Vikas</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span> <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            I am a final-year computer science and engineering student at Harcourt Butler Technical University, with a solid foundation in data structures and algorithms. Skilled in full-stack development, I am passionate about learning new technologies and eager to apply my expertise to innovative projects.
          </p>
        </div>
        <a className="btn btn-primary" href="https://drive.google.com/file/d/1ldxsNYV6-V5QajEbmNgQMLAWtdSF-08M/view" target="_blank" rel="noopener noreferrer">Download CV</a>

        <div className="social-links">
          <a href="https://github.com/vikas107sharma" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vikas-sharma-321055224/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:vikas1141sharma@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
