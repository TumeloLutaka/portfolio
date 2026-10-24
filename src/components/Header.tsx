import Icon from './Icon';

export default function Header() {
  return (
    <header className="site-header" id="top">
      <nav className="container navigation" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Tumelo Lutaka, home">
          <span className="brand-mark" aria-hidden="true">tl.</span>
          <span className="brand-name">Tumelo Lutaka</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="header-contact" href="mailto:tumelolutakacode@gmail.com">Let’s talk <Icon /></a>
      </nav>
    </header>
  );
}
