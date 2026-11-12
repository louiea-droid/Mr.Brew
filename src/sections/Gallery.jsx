import { useState } from 'react'
import Carousel from '../components/Carousel.jsx'
import { CUSTOMER_PLACEHOLDERS, gallery } from '../data/site.js'

export default function Gallery() {
  const [paused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  return (
    <section className="section gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="container gallery-head">
        <h2 id="gallery-title">Around the shop</h2>
      </div>
      <Carousel label="The shop" paused={paused}>
        {gallery.map(([file, alt]) => (
          <li key={file} className="slide">
            <img src={`/images/gallery/${file}.jpg`} alt={alt} width="2048" height="1366" loading="lazy" />
          </li>
        ))}
      </Carousel>
      <Carousel label="Our Ka-brews" paused={paused}>
        {Array.from({ length: CUSTOMER_PLACEHOLDERS }, (_, i) => (
          <li key={i} className="slide slide-placeholder">
            <img src="/images/logo.png" alt="" width="56" height="56" />
            <span>Ka-brew photo coming soon</span>
          </li>
        ))}
      </Carousel>
    </section>
  )
}
