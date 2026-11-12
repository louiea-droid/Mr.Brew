import { useLayoutEffect, useRef, useState } from 'react'

const PHONE = '(max-width: 600px)'

export default function Header() {
  const ref = useRef(null)
  const [overHero, setOverHero] = useState(true)
  const [hidden, setHidden] = useState(false)

  // Publish the header's height (it wraps on phones) so the hero can fill exactly the first screen.
  useLayoutEffect(() => {
    const el = ref.current
    const ro = new ResizeObserver(() =>
      document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`),
    )
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // See-through while the hero is behind it; on phones, slide away on scroll down, back on scroll up.
  useLayoutEffect(() => {
    const header = ref.current
    const page = document.querySelector('.page')
    const phone = matchMedia(PHONE)
    let lastY = scrollY
    let frame = 0

    function update() {
      frame = 0
      const y = scrollY
      const h = header.offsetHeight
      setOverHero(page.getBoundingClientRect().top > h)
      if (!phone.matches || y < h) setHidden(false)
      else if (y - lastY > 4) setHidden(true)
      else if (lastY - y > 4) setHidden(false)
      lastY = y
    }
    const onScroll = () => (frame ||= requestAnimationFrame(update))

    update()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => {
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header
      className="site-header"
      ref={ref}
      data-over-hero={overHero || undefined}
      data-hidden={hidden || undefined}
    >
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Mr. Brew, back to top">
          <img src="/images/logo.png" alt="" width="40" height="40" />
          Mr. Brew
        </a>
        <nav aria-label="Main">
          <a href="#menu">Menu</a>
          <a href="#story">Our story</a>
          <a href="#events">Coffee cart</a>
          <a href="#gallery">Gallery</a>
          <a href="#visit">Visit</a>
        </nav>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  )
}
