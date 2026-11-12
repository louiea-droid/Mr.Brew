import { Fragment, useEffect, useRef } from 'react'

const HEADLINE = 'Where every cup tells a story'

// Phones and reduced-motion visitors keep the still frame and never download the video.
const VIDEO_QUERY = '(min-width: 901px) and (prefers-reduced-motion: no-preference)'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (matchMedia(VIDEO_QUERY).matches) videoRef.current.src = '/videos/coffee.mp4'
  }, [])

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero-bg"
        poster="/videos/coffee-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">Mr. Brew Tea &amp; Coffee</p>
          <h1>
            {/* each word in a mask so it can slide up from behind the line */}
            {HEADLINE.split(' ').map((word, i) => (
              <Fragment key={i}>
                <span className="mask">
                  <span style={{ '--i': i }}>{word}</span>
                </span>{' '}
              </Fragment>
            ))}
          </h1>
          <p className="hero-text">
            Premium tea and coffee, brewed daily for every Ka-brew. Coffee, milk tea and good food
            served fresh in Tetuan, Zamboanga City.
          </p>
          <div className="actions">
            <a className="btn btn-light" href="#menu">
              See the menu
            </a>
            <a className="btn btn-outline-light" href="#events">
              Book the coffee cart
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img
            className="hero-photo"
            src="/images/drinks-tray.jpg"
            alt="Four Mr. Brew drinks on a wooden tray: cheese milk tea, brown sugar boba and iced coffee"
            width="1448"
            height="1086"
          />
        </div>
      </div>
    </section>
  )
}
