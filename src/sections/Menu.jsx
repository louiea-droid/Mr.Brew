import { useLayoutEffect, useRef, useState } from 'react'
import { favorites, menu } from '../data/menu.js'

const peso = (p) => (typeof p === 'number' ? `₱${p}` : p)
const toItem = (item) => (typeof item === 'string' ? { name: item } : item)
const countItems = (cat) => cat.groups.reduce((n, g) => n + g.items.length, 0)

export default function Menu() {
  return (
    <section className="section" id="menu" aria-labelledby="menu-title">
      <div className="container">
        <div className="menu-head">
          <h2 id="menu-title">Our menu</h2>
          <p>Not sure what to get? Start with what Zamboanga keeps coming back for.</p>
        </div>
        <Favorites />
        <MenuTabs />
      </div>
    </section>
  )
}

function Favorites() {
  return (
    <ul className="favs" aria-label="Customer favorites">
      {favorites.map((f) => (
        <li className="fav" key={f.name}>
          <div className={f.cutout ? 'fav-img cutout' : 'fav-img'}>
            <img src={f.img} alt="" style={f.pos && { objectPosition: f.pos }} loading="lazy" />
          </div>
          <div className="fav-body">
            <div>
              <span className={f.tag === 'New' ? 'badge badge-new' : 'badge'}>{f.tag}</span>
              <h3>{f.name}</h3>
              <p>{f.note}</p>
            </div>
            {f.price && <span className="fav-price">{f.price}</span>}
          </div>
        </li>
      ))}
    </ul>
  )
}

function MenuTabs() {
  const [active, setActive] = useState(menu[0].id)
  const tabRefs = useRef([])
  const indicatorRef = useRef(null)
  const current = menu.find((c) => c.id === active)
  const activeIndex = menu.indexOf(current)

  // Slide the pill under the active tab; re-measure when the tab bar resizes.
  useLayoutEffect(() => {
    const tab = tabRefs.current[activeIndex]
    const place = () => {
      const pill = indicatorRef.current
      pill.style.width = `${tab.offsetWidth}px`
      pill.style.transform = `translateX(${tab.offsetLeft}px)`
    }
    place()
    const ro = new ResizeObserver(place)
    ro.observe(tab.parentElement)
    return () => ro.disconnect()
  }, [activeIndex])

  function onKeyDown(e, i) {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    let next
    if (step) next = (i + step + menu.length) % menu.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = menu.length - 1
    else return
    e.preventDefault()
    setActive(menu[next].id)
    tabRefs.current[next].focus()
  }

  return (
    <>
      <div className="tabbar">
        <div className="tabs" role="tablist" aria-label="Menu categories">
          <span className="tab-indicator" ref={indicatorRef} aria-hidden="true" />
          {menu.map((cat, i) => (
            <button
              key={cat.id}
              ref={(el) => (tabRefs.current[i] = el)}
              role="tab"
              id={`tab-${cat.id}`}
              aria-selected={cat.id === active}
              aria-controls={`panel-${cat.id}`}
              tabIndex={cat.id === active ? 0 : -1}
              className="tab"
              onClick={() => setActive(cat.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {cat.label}
              <span className="tab-count">
                {countItems(cat)}
                <span className="visually-hidden"> items</span>
              </span>
            </button>
          ))}
        </div>
        {current.sizes && (
          <p className="sizes">
            Two sizes: <span className="size">L</span> / <span className="size">XL</span> (XL price
            first)
          </p>
        )}
      </div>

      <div
        key={current.id /* remount so the enter animation replays on every switch */}
        className="menu-panel"
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        tabIndex={0}
      >
        {current.note && <p className="menu-note">{current.note}</p>}
        {current.sizes ? <TeaGroups groups={current.groups} /> : <ListGroups groups={current.groups} />}
        {current.groups.some((g) => g.items.some((i) => i.best)) && (
          <p className="menu-legend">
            <span className="chip-best">★ Bestseller</span> From our Must Try Flavors wall.
          </p>
        )}
      </div>
    </>
  )
}

function ListGroups({ groups }) {
  return (
    <div className="menu-groups">
      {groups.map((group) => (
        <section className="menu-group" key={group.name}>
          <h3>{group.name}</h3>
          <ul>
            {group.items.map(toItem).map(({ name, price, best }) => (
              <li key={name}>
                <span>
                  {name}
                  {best && <Best />}
                </span>
                {price != null && <span className="price">{peso(price)}</span>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

function TeaGroups({ groups }) {
  return (
    <div className="tea-grid">
      {groups.map((group) => (
        <section className="tea-card" key={group.name}>
          <h3>
            <span>{group.name}</span>
            <span className="group-price">{group.price}</span>
          </h3>
          {group.desc && <p className="tea-desc">{group.desc}</p>}
          <ul className="chips">
            {group.items.map(toItem).map(({ name, price, best }) => (
              <li key={name} className={best ? 'best' : undefined}>
                {name}
                {best && <Best />}
                {price && <small> {price}</small>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

function Best() {
  return (
    <span className="best-mark">
      <span aria-hidden="true"> ★</span>
      <span className="visually-hidden"> (bestseller)</span>
    </span>
  )
}
