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
          <Slides photos={customers} square />
        </Carousel>
      )}
    </section>
  )
}

function Slides({ photos, square }) {
  const [w, h] = square ? [180, 180] : [2048, 1366]
  return photos.map(([file, alt]) => (
    <li key={file} className={square ? 'slide slide-square' : 'slide'}>
      <img src={`/images/gallery/${file}.jpg`} alt={alt} width={w} height={h} loading="lazy" />
    </li>
  ))
}
