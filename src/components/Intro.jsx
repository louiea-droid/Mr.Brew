import { useState } from 'react'

const NAME = 'Mr. Brew'

// Logo curtain on the first visit of a session. index.html decides (before paint) by adding
// `has-intro` to <html>; that class also delays the hero sequence until the curtain lifts.
export default function Intro() {
  const [on, setOn] = useState(() => document.documentElement.classList.contains('has-intro'))
  if (!on) return null

  function skip() {
    document.documentElement.classList.remove('has-intro') // hero animations jump ahead
    setOn(false)
  }

  return (
    <div
      className="intro"
      aria-hidden="true"
      onClick={skip}
      onAnimationEnd={(e) => e.animationName === 'curtain-up' && setOn(false)}
    >
      <div className="intro-mark">
        <img src="/images/logo.png" alt="" width="160" height="160" />
        <p className="intro-name">
          {[...NAME].map((ch, i) => (
            <span key={i} style={{ '--i': i }}>
              {ch === ' ' ? ' ' : ch}
            </span>
          ))}
        </p>
        <p className="intro-tag">Sip something uniquely good</p>
      </div>
    </div>
  )
}
