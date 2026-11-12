import Icon from '../components/Icon.jsx'
import { EMAIL, MAPS, PHONE, PHONE_HREF, socials } from '../data/site.js'

// Shop hours: Mon–Sat 10:00–22:00 Manila time, closed Sunday.
function openStatus(date = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Manila',
      weekday: 'short',
      hour: 'numeric',
      hourCycle: 'h23',
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  )
  const hour = Number(parts.hour)
  if (parts.weekday !== 'Sun' && hour >= 10 && hour < 22) {
    return { open: true, text: 'Open now · until 10 PM' }
  }
  const opensMonday = parts.weekday === 'Sun' || (parts.weekday === 'Sat' && hour >= 22)
  return { open: false, text: opensMonday ? 'Closed · opens Monday 10 AM' : 'Closed · opens 10 AM' }
}

export default function Visit() {
  const status = openStatus()
  return (
    <section className="section visit" id="visit" aria-labelledby="visit-title">
      <div className="container">
        <div className="visit-card">
          <div className="visit-photo">
            <img
              src="/images/shop-sign.jpg"
              alt="The Mr. Brew shop sign: Milk Tea, Coffee, Waffles"
              width="1208"
              height="925"
              loading="lazy"
            />
            <p className={status.open ? 'status' : 'status closed'}>
              <span className="dot" aria-hidden="true" />
              {status.text}
            </p>
          </div>
          <div className="visit-body">
            <div>
              <h2 id="visit-title">Come on in</h2>
              <p className="serif visit-tag">Something #uniquelygood is waiting.</p>
            </div>
            <div>
              <h3 className="visit-label">Find us</h3>
              <p className="visit-addr">Don Toribio St., Tetuan, Zamboanga City</p>
              <div className="actions">
                <a className="btn btn-light" href={MAPS} target="_blank" rel="noreferrer">
                  Get directions
                </a>
                <a className="btn btn-outline-light" href="#menu">
                  See the menu
                </a>
              </div>
            </div>
            <div>
              <h3 className="visit-label">Hours</h3>
              <p className="visit-hours">Monday – Saturday, 10:00 AM – 10:00 PM</p>
              <p className="visit-small">Closed on Sundays.</p>
            </div>
            <div>
              <h3 className="visit-label">Contact</h3>
              <p className="visit-contact">
                <a href={PHONE_HREF}>{PHONE}</a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
            </div>
            <div>
              <h3 className="visit-label">Follow us</h3>
              <ul className="social-pills">
                {socials.map((s) => (
                  <li key={s.id}>
                    <a href={s.href} target="_blank" rel="noreferrer">
                      <Icon name={s.id} />
                      {s.label}
                      <span className="visually-hidden"> on {s.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="visit-small">7K followers · 100% recommend us on Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
