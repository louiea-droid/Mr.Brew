// The cup sways with scroll (wrapper) and wiggles on hover (img); see styles/animations.css.
export default function KapeBlanko() {
  return (
    <section className="feature" aria-labelledby="feature-title">
      <div className="container feature-inner">
        <div className="feature-cup-wrap">
          <img
            className="feature-cup"
            src="/images/kape-blanko.png"
            alt="A cup of Kape Blanko with the Mr. Brew logo"
            width="533"
            height="800"
          />
        </div>
        <div className="feature-copy">
          <p className="feature-label">Meet your new coffee favorite</p>
          <h2 id="feature-title">Kape Blanko</h2>
          <p>Freshly brewed espresso meets steamed cream milk for a naturally smooth finish.</p>
          <p className="serif">A Zamboangueño formula.</p>
        </div>
      </div>
    </section>
  )
}
