import Header from './components/Header';
import Icon from './components/Icon';
import Projects from './components/Projects';
import Contact from './components/Contact';

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Webflow', 'Figma', 'Git'];

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero container" id="home" aria-labelledby="hero-heading">
          <div className="hero-topline">
            <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Web developer & designer</p>
            <span className="hero-location">Based in Zambia</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-heading"><span>A little design.</span><span>A lot of</span><em>possibility.</em></h1>
              <p className="hero-description">Hi, I’m Tumelo. I turn ideas into thoughtful websites and interactive experiences, with a focus on the details that make them feel right.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <Icon name="arrow-down" /></a>
                <a className="text-link" href="#about">A little about me <Icon /></a>
              </div>
            </div>
            <figure className="hero-portrait">
              <div className="portrait-frame">
                <img src={`${import.meta.env.BASE_URL}images/tumelo.png`} alt="Tumelo Lutaka" width="321" height="438" fetchPriority="high" />
                <span className="portrait-spark" aria-hidden="true"><Icon name="spark" /></span>
              </div>
              <figcaption><span>Tumelo Lutaka</span><small>Thoughtful design. Practical code.</small></figcaption>
            </figure>
          </div>
          <div className="hero-bottom">
            <span>From a first idea to the final detail.</span>
            <a className="scroll-link" href="#work">Explore my work <Icon name="arrow-down" /></a>
          </div>
        </section>
        <Projects />
        <section className="about-section" id="about" aria-labelledby="about-heading">
          <div className="container about-grid">
            <div className="about-intro">
              <p className="eyebrow">02 / A little about me</p>
              <h2 id="about-heading">Curious by nature.<br /><em>A builder at heart.</em></h2>
            </div>
            <div className="about-content">
              <p className="about-lead">I’m Tumelo, a web developer with an eye for design and a love of figuring things out.</p>
              <p className="about-description">My work moves between visual design and code: from building in Webflow to creating interfaces in React and experimenting with JavaScript games. Each project is a chance to make something useful and learn something new.</p>
              <p className="about-description">I care about clear layouts, responsive experiences, and code that’s easy to come back to. Simple, considered, and built to work.</p>
              <a className="text-link cv-link" href={`${import.meta.env.BASE_URL}Tumelo-Lutaka-CV.pdf`} download>Download my CV <Icon name="arrow-down" /></a>
            </div>
            <div className="skills-block">
              <p className="eyebrow">Tools I work with</p>
              <ul className="skills-list">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          </div>
          <div className="container approach-grid">
            <div className="approach-item"><span className="approach-number">01</span><h3>Find the focus.</h3><p>Start with what a website needs to say and what people need to do.</p></div>
            <div className="approach-item"><span className="approach-number">02</span><h3>Make it feel right.</h3><p>Bring structure, typography, and thoughtful details together.</p></div>
            <div className="approach-item"><span className="approach-number">03</span><h3>Build with care.</h3><p>Turn the design into a responsive experience, then test and refine.</p></div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container footer-content">
          <a className="brand" href="#top" aria-label="Tumelo Lutaka, home"><span className="brand-mark" aria-hidden="true">tl.</span></a>
          <p>© {new Date().getFullYear()} Tumelo Lutaka. Made with intention.</p>
          <a className="text-link" href="#top">Back to top <Icon name="arrow-up" /></a>
        </div>
      </footer>
    </>
  );
}
