import { socials } from '../data/site.js'
import Icon from './Icon.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="brand">
          <img src="/images/logo.png" alt="" width="36" height="36" />
          Mr. Brew Tea &amp; Coffee House
        </div>
        <ul className="footer-social">
          {socials.map((s) => (
            <li key={s.id}>
              <a href={s.href} target="_blank" rel="noreferrer" aria-label={`Mr. Brew on ${s.name}`}>
                <Icon name={s.id} />
              </a>
            </li>
          ))}
        </ul>
        <p className="footer-note">© {new Date().getFullYear()} Mr. Brew, Zamboanga City</p>
      </div>
    </footer>
  )
}
