import { useState } from 'react';
import Icon from './Icon';

const email = 'tumelolutakacode@gmail.com';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">03 / Get in touch</p>
          <h2 id="contact-heading">Have something<br />in <em>mind?</em></h2>
          <p className="contact-description">A website, an idea, or just a conversation.<br />I’d love to hear from you.</p>
        </div>
        <div className="contact-actions">
          <a className="contact-email" href={`mailto:${email}`}>{email} <Icon /></a>
          <div className="contact-secondary">
            <button className="copy-email" type="button" onClick={copyEmail}>
              <Icon name={copyStatus === 'copied' ? 'check' : 'copy'} />
              {copyStatus === 'copied' ? 'Email copied' : 'Copy email address'}
            </button>
            <p className={`copy-feedback${copyStatus === 'error' ? ' is-error' : ''}`} role="status">
              {copyStatus === 'copied' && 'Ready to paste into your email app.'}
              {copyStatus === 'error' && 'Couldn’t copy automatically. Select the address above to copy it.'}
            </p>
          </div>
          <div className="social-links">
            <a href="https://github.com/TumeloLutaka/" target="_blank" rel="noreferrer">GitHub <Icon /><span className="sr-only"> (opens in a new tab)</span></a>
            <a href="https://www.linkedin.com/in/tumelo-lutaka-3b5b8521b/" target="_blank" rel="noreferrer">LinkedIn <Icon /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
