# Mr. Brew Website

Marketing site for **Mr. Brew Tea & Coffee House**, Zamboanga City, Philippines.
React 19 + Vite 7, plain CSS, single page. Layout of `src/`:
- `App.jsx`: puts the sections in order. Everything after the Hero sits in `div.page`: on big screens (≥901px wide, ≥700px tall) the hero is sticky and steps back while `.page` slides over it (`hero-recede` in animations.css); phones and short screens get a fade-out instead.
- `sections/`: one file per page section (Hero, KapeBlanko, Menu, Story, Events, Gallery, Visit).
- `components/`: shared pieces (Header, Footer, Icon, Carousel, Intro). `Header` is see-through with cream text while the hero is behind it (`data-over-hero`), solid white once `.page` slides under it, and on phones (≤600px) hides on scroll down / returns on scroll up (`data-hidden`). The hero runs up under it via `--header-h`. `Intro` is the logo curtain shown on the first visit of a browser session; an inline script in `index.html` decides before paint by adding `has-intro` to `<html>`, which also delays the hero sequence (`--d`). Clear sessionStorage to see it again.
- `data/menu.js`: menu items and prices. `data/site.js`: contact details, social links, story text, gallery list.
- `styles/base.css` (color/font tokens, reset), `styles/app.css` (layout and sections), `styles/animations.css` (all motion: logo intro curtain + hero load sequence, native CSS scroll-driven animations, Kape Blanko cup sway + hover wiggle).

Photos and logo live in `public/images/` (gallery photos in `public/images/gallery/`). Videos live in `public/videos/`: the hero plays `coffee.mp4` (compressed, no audio) over `coffee-poster.jpg`, on screens wider than 900px only; phones and reduced-motion visitors get the still. Unused clips (`bg.mp4`, `bg2.mp4`, `nature.mp4`) and the uncompressed coffee original are in `media-originals/`, kept out of `public/` so they are not deployed. The faint coffee-bean background is `public/images/beans.svg`, applied via the `--beans` variable on `body` (and `.story`); its strength is the `opacity` on the `<g>` in that SVG.

Commands: `npm run dev` · `npm run build` · `npm run lint`

Roadmap and open to-dos (improvements, missing content from the owner) live in `NOTES.md`. Check it before suggesting new work, and tick items off there when they're done.

## ALWAYS use the skills

Project skills live in `.claude/skills/`. **Before doing any task, check which skills apply and invoke them with the Skill tool. Do not skip a skill because a task looks small.**

| Task | Skills to use |
|---|---|
| Any new feature, section, or change in behavior | `brainstorming` first |
| Any UI code (components, layout, styling, even small tweaks) | `senior-frontend`, `frontend-design`, `ui-ux-pro-max` |
| Colors, fonts, spacing, design tokens | `ui-design-system` |
| Scroll animations, parallax, storytelling sections | `scroll-experience` |
| React structure, performance, refactors | `react-best-practices` |
| Architecture or tech-stack decisions | `senior-architect` |
| Meta tags, titles, schema markup, page speed | `seo-optimizer` |
| Writing or editing any site copy | `humanizer` |
| Posters, static graphics, PNG/PDF designs | `canvas-design` |
| Checking the site in a browser, screenshots, UI tests | `webapp-testing`, `playwright-cli` |
| AI/LLM features or prompts | `senior-prompt-engineer` |
| Automation pipelines (n8n, Temporal, Inngest) | `workflow-automation` |
| Start of every conversation | `using-superpowers` |

Before saying any UI work is done, open it in a browser (`webapp-testing` / `playwright-cli`) and check desktop and phone width. Note: `senior-frontend`'s `check_ui.mjs` needs the `playwright` package, which is not installed; use the Playwright browser tools instead. Ports 5173/5174 are often already taken by the owner's dev servers (5174 usually serves this project).

## Business information

Source: the owner's Canva brand kit, https://ibex-5qjj2n.my.canva.site/mrbrewph. **This is the real content** and it is now in the site. Still placeholder: the Facebook link (a search URL) and the "Message us to book" link (Instagram DM) until the owner confirms real URLs.

- **Name:** Mr. Brew Tea & Coffee House (shop sign: "Milk Tea · Coffee · Waffles"; Facebook category: Bubble Tea Shop)
- **Address:** Don Toribio St., Tetuan, Zamboanga City (also written "Tetuan • San Jose")
- **Hours:** Monday – Saturday, 10:00 AM – 10:00 PM. **Closed Sundays** (from their "We are closed today" posters).
- **Phone:** 0975 991 1395 · **Email:** mrbrewzambo@gmail.com
- **Facebook:** https://www.facebook.com/mrbrewzambo (7K followers, 100% recommend from 10 reviews, price range $$, curbside pickup) · **Messenger:** https://m.me/mrbrewzambo
- **Instagram:** @mrbrewzambo · **TikTok:** @mrbrew.zc
- **Facebook intro:** "Brewing premium tea & coffee daily for every ka-brew. Coffee, milk tea, and good food served fresh. ☕️ … Visit us for something Uniquely Good. 🤎"
- **Hashtag:** #uniquelygood · customers are called "Ka-brew"
- **Taglines:** "Where Every Cup Tells a Story", "A Fresh Take on Every Sip", "Sip Something Uniquely Good", "A Zamboangueño Formula"
- **Bestsellers ("Mr. Brew's Must Try Flavors" wall banner):** Wintermelon, Okinawa, Brown Panda Boba, Cheesecake, Iced Kopi. Most promoted on Facebook: Kape Blanko, Kopi Float, Special Iced Kopi.
- **Promo seen on Facebook:** Kape Blanko Buy 1 Get 1 for ₱199 ("promo extended"); not on the site because the end date is unknown.
- Also sells **Beef Tapa** (not on menu boards, price unknown). Also on foodpanda.
- **Photos:** Brown Panda Boba and Cheesecake favorite cards use cups cropped from the 480×680 Tea Blends menu board (`cup-*.jpg`, soft but owner-approved). Gallery photos (`public/images/gallery/`) come from the Facebook page; replace any with higher-res originals if the owner has them. "Around the shop" is auto-scrolling carousels (`Carousel`): shop photos, plus an "Our Ka-brews" customer row that stays **hidden until `customers` in `data/site.js` has photos** (the owner has not picked them yet; the Facebook album has many). Link preview image: `public/images/og-image.jpg` (1200×630); the og tags in `index.html` use the netlify.app URL, update them when a custom domain is added.
- **Still unknown:** Kape Blanko regular price, cup size names (site says L / XL), review QR target

### Story ("Who is Mr. Brew?")
Mr. Brew is more than a name behind a cup of coffee. He is a story of humble beginnings, a dream rooted in Zamboanga, and a passion for bringing people together through something as simple yet meaningful as a good drink. Born and raised in the heart of Zamboanga City, Mr. Brew represents the warmth, character, and spirit of the community he calls home.

He is that familiar friend who welcomes you after a long day, the companion during late-night conversations, the little comfort in between busy schedules, and the reason ordinary moments become memorable. His story is built on the belief that happiness does not always come from grand experiences; sometimes, it is found in a favorite drink, shared laughter, and moments spent with the people who matter. Through every cup of coffee, milk tea, and refreshing creation, Mr. Brew carries a piece of home, serving not only beverages but also a sense of belonging. He is proudly Zamboangueño—not simply because that is where his story is told, but because it is where his identity, inspiration, and purpose come alive. Wherever the journey takes him, Mr. Brew will always remember where he started: right here, in Zamboanga.

> Mr. Brew is not just someone who makes your drink. He is someone who makes room for you—to pause, to breathe, to connect, and to enjoy life's little moments. Because every cup has a story, and every story deserves to be shared.

### Tea line ("A Fresh Take on Every Sip")
Mr. Brew Tea Leaf brings a refreshing tea experience through flavorful, tea-based beverages made for every mood and moment. It celebrates the natural character of tea with a delightful blend of aroma, taste, and refreshment in every cup. Whether enjoyed as a personal treat, a quick refreshment, or a drink shared with friends, Mr. Brew Tea Leaf makes every sip a little more special.

### What we do: Coffee Mobile Cart Services
Mr. Brew brings the coffee experience beyond the four walls of a café through our Coffee Mobile Cart Services, designed to make every occasion more memorable. We provide mobile coffee setups for special gatherings and events, including weddings, birthdays, corporate functions, private celebrations, school activities, and other meaningful occasions. Bringing freshly prepared beverages, a welcoming atmosphere, and the familiar warmth of Mr. Brew, we transform ordinary event refreshments into a delightful coffee experience. Wherever the celebration takes us, we bring good coffee, great company, and a little taste of happiness—one cup at a time.

### Featured drink
**Kape Blanko** — freshly brewed espresso meets steamed cream milk for a naturally smooth finish. *A Zamboangueño Formula.*

### Merch
"Sip Something Uniquely Good" brown T-shirts (back print), small "mr.brew" front logo. Status: **Pre-order soon**.

### Menu (prices in ₱)
Tea prices are two sizes: larger / smaller (size names unconfirmed, likely Extra Large / Large).

**Coffee Blends**
Special Iced Kopi 139 · Iced Caramel Mac. 129 · Kopi Float 139 · Iced Hazelnut 109 · Iced Kopi 99 · Sweet Americano 89 · Iced Latte 99 · Iced Mocha 109

**Tea Blends**
- Fruit Tea 109 / 99: Mango, Kiwi, Peach, Green Apple, Strawberry, Blueberry
- Yakult Blends 139: Peach Mango, Wild Berry, Sour Apple
- Milk Tea 119 / 109: Chocolate, Matcha, Taro, Okinawa, Wintermelon, Cookies & Cream
- Rock Salt & Cheese 149 / 139: Cheesecake, Dark Winter Cream, Choco Lava, Matcha Delight, C&C Overload, C.C. Taro, Kriminawa
- Brown Sugar Series 119 / 109: Brown Panda Boba, B.P. Delight +10, B.P. Overload +20, Dark Panda +30
- Frappe Series 149 / 139: Choco Chips, Hazelnut, Double Cookies, Strawberry Frappe, Blueberry Frappe

**Quick Bites**
- Bubble Waffles: Classic 59 · Choco 69 · Ube 69 · Strawberry 69 · Pandan 69 · Cheesy Cheese 79 · Ube Cheesy 79 · Choco Chips 79
- Cheesy Waffles: Cheesy Hotdog 99 · Ham & Cheese 99 · Cheesy Tuna 99
- Others: French Fries 55 (cheese / bbq / sour cream +15) · Cheese Stick 70

## Brand
- **Primary color:** brown `#7B3E0D` on white; cup logo in dark brown / maroon.
- **Fonts:** Poppins-style bold geometric sans (headings + body); italic serif for quotes and taglines.
- **Logo:** mustached face in a fedora with three bubble dots (the current site uses a generic cup icon, replace it).
- **Assets:** images are hosted at `https://ibex-5qjj2n.my.canva.site/mrbrewph/_assets/media/` (logo: `557df06527d875bc3452995f72399c36.png`; drinks tray: `5c1d8de18dcbff1e80b4bd81c602600c.png`). Download into `public/` rather than hotlinking. Menu boards there are only 480×680, so build the menu as text, not images.
