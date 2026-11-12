import { useState } from 'react'
import Carousel from '../components/Carousel.jsx'
import { customers, gallery } from '../data/site.js'

export default function Gallery() {
  const [paused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  return (
    <section className="section gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="container gallery-head">
        <h2 id="gallery-title">Around the shop</h2>
      </div>
      <Carousel label="The shop" paused={paused}>
        <Slides photos={gallery} />
      </Carousel>
      {customers.length > 0 && (
        <Carousel label="Our Ka-brews" paused={paused}>
          <Slides photos={customers} />
        </Carousel>
      )}
    </section>
  )
}

function Slides({ photos }) {
  return photos.map(([file, alt]) => (
    <li key={file} className="slide">
      <img src={`/images/gallery/${file}.jpg`} alt={alt} width="2048" height="1366" loading="lazy" />
    </li>
  ))
}
