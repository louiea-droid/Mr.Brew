import { useEffect, useRef } from 'react'

const SPEED = 0.03 // px per ms, about 30px a second

// Auto-scrolls right to left in a loop. Drag with the mouse (or swipe) to move it;
// it waits while being dragged, touched or keyboard-focused.
export default function Carousel({ label, paused, children }) {
  const trackRef = useRef(null)
  const firstRef = useRef(null)
  const copyRef = useRef(null)
  const holding = useRef(false)
  const releaseTimer = useRef(0)
  const drag = useRef(null)

  useEffect(() => {
    if (paused) return
    const el = trackRef.current
    let pos = el.scrollLeft
    let last = performance.now()
    let raf
    const tick = (now) => {
      const dt = Math.min(now - last, 250) // cap so returning to the tab doesn't jump
      last = now
      if (holding.current || Math.abs(el.scrollLeft - pos) > 2) {
        pos = el.scrollLeft // the visitor moved it; continue from there
      } else {
        pos += dt * SPEED
        const loop = copyRef.current.offsetLeft - firstRef.current.offsetLeft
        if (pos >= loop) pos -= loop
        el.scrollLeft = pos
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [paused])

  const hold = () => {
    clearTimeout(releaseTimer.current)
    holding.current = true
  }
  const release = (delay = 0) => {
    clearTimeout(releaseTimer.current)
    releaseTimer.current = setTimeout(() => (holding.current = false), delay)
  }
  // Mouse drag; touch uses native swipe scrolling.
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return
    hold()
    drag.current = { x: e.clientX, left: trackRef.current.scrollLeft }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!drag.current) return
    const loop = copyRef.current.offsetLeft - firstRef.current.offsetLeft
    const target = drag.current.left - (e.clientX - drag.current.x)
    trackRef.current.scrollLeft = ((target % loop) + loop) % loop // wrap both ways
  }
  const onPointerUp = () => {
    if (!drag.current) return
    drag.current = null
    release()
  }

  return (
    <div
      className="carousel"
      onFocus={hold}
      onBlur={() => release()}
      onTouchStart={hold}
      onTouchEnd={() => release(2500)}
    >
      <h3 className="carousel-label container">{label}</h3>
      <div
        className="carousel-track"
        ref={trackRef}
        role="region"
        aria-label={`${label}, drag or scroll to browse`}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDragStart={(e) => e.preventDefault()}
      >
        <ul ref={firstRef}>{children}</ul>
        <ul ref={copyRef} aria-hidden="true" inert>
          {children}
        </ul>
      </div>
    </div>
  )
}
