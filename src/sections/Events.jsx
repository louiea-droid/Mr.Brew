import { MESSENGER, PHONE, PHONE_HREF } from '../data/site.js'

const OCCASIONS = ['Weddings', 'Birthdays', 'Corporate functions', 'Private celebrations', 'School activities']

export default function Events() {
  return (
    <section className="events" id="events" aria-labelledby="events-title">
      <div className="container events-inner">
        <div className="events-copy">
          <h2 id="events-title">Mr. Brew at your event</h2>
          <p>
            Our coffee mobile cart brings the café to your celebration. We set up, brew fresh drinks
            on the spot, and serve your guests with the same warmth you get at the shop.
          </p>
          <p className="events-for">We cater:</p>
          <ul className="occasions">
            {OCCASIONS.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <div className="actions">
            <a className="btn btn-light" href={MESSENGER} target="_blank" rel="noreferrer">
              Message us to book
            </a>
            <a className="btn btn-outline-light" href={PHONE_HREF}>
              Call {PHONE}
            </a>
          </div>
        </div>
        <img
          className="events-photo"
          src="/images/cart-event.jpg"
          alt="Mr. Brew baristas in #uniquelygood shirts serving coffee to a crowd at an outdoor event"
          width="1377"
          height="918"
          loading="lazy"
        />
      </div>
    </section>
  )
}
