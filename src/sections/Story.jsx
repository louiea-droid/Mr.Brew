import { Fragment } from 'react'
import { STORY } from '../data/site.js'

// One box per word so each lights up as it scrolls past (see .w in styles/animations.css).
function Words({ text }) {
  return text.split(' ').map((word, i) => (
    <Fragment key={i}>
      <span className="w">{word}</span>{' '}
    </Fragment>
  ))
}

export default function Story() {
  return (
    <section className="section story" id="story" aria-labelledby="story-title">
      <div className="container story-inner">
        {/* ponytail: temporary logo until the owner picks a story photo (was /images/lifestyle-table.jpg) */}
        <img
          className="story-photo story-photo-logo"
          src="/images/logo.png"
          alt="The Mr. Brew logo"
          width="800"
          height="800"
          loading="lazy"
        />
        <div className="story-copy">
          <h2 id="story-title">Who is Mr. Brew?</h2>
          {STORY.map((text) => (
            <p key={text.slice(0, 20)}>
              <Words text={text} />
            </p>
          ))}
          <blockquote className="serif">
            Every cup has a story, and every story deserves to be shared.
          </blockquote>
        </div>
      </div>
    </section>
  )
}
