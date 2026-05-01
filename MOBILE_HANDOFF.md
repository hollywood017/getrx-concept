# GetRx Landing Page — Mobile Polish Handoff

Hand this doc to a fresh Claude Code session that picks up the mobile polish pass. The desktop site is shipped and the PM has signed off on copy + structure. Last commit on main: see `git log --oneline -1`.

---

## Mission

Take the current responsive landing page and **polish the mobile experience** until the PM is comfortable shipping it as the production marketing site at `getrx.com`. Desktop is done — do not redesign it. Mobile is functional but unaudited at every breakpoint.

The goal is to make every section read cleanly and feel native on phones (375px–430px wide), with a graceful tablet handoff (768px–1024px) and zero broken layouts in between.

---

## Repo

- **GitHub**: https://github.com/hollywood017/getrx-concept
- **Single source file**: `index.html` (everything is inlined — HTML + CSS + JS + lucide icons)
- **Production hosting**: GitHub Pages on the `main` branch. Pushes auto-deploy in ~1 min.
- **Live URL**: https://hollywood017.github.io/getrx-concept/
- **Working directory** on this machine: `C:/Users/PC/ClaudeProjects/getrx-concept/`

---

## Current state (high-level)

What's already shipped and working on desktop:

- **Hero** with hex-bg, headline, two CTAs (`Sign Up` → `#signup-anchor` (currently `https://www.getrx.com/prescribers/new`), `See How It Works` → `#how-it-works`), and a hero phone showing `pharmacy-select.png`
- **Trust bar** with HIPAA / DEA / Real-Time / iPhone+Web pills
- **Ticker** with rotating compliance facts
- **Hero stats** row (4 stats including placeholder "12,847+ Prescriptions Sent")
- **How It Works** — 5-step process list
- **Controlled Substances** section
- **Demo (`#demo`)** — scroll-pinned 3D page-flip carousel through 4 phone screens (login → profile → patient list → confirm/sign). Pin uses `position: sticky` with a 460vh tall scroll container. JS at `scrollFlip` IIFE handles rotation tied to scroll progress.
- **Walkthrough video** — self-hosted MP4 (`assets/video/walkthrough.mp4`, 45 MB) with `preload="none"` and a poster
- **Features grid** (7 cards), **Audience grid** (3 cards), **Our Vision** (2 centered cards)
- **CTA banner**, **About** section with founder cards, **Pricing** (2 tiers + 30-day-free banner), **FAQ** accordion (9 items), **Contact** form, **Press** "coming soon" stub
- **Footer**: 4-column grid with brand block + Product / Company / Account columns
- **Cookie consent banner** (vanilla JS, dismissable, localStorage-gated)
- **Modal popovers** for Privacy / Terms / Identity Verification (footer links open them; X / backdrop / Esc close)
- **Favicon + OG image + Twitter card** wired in `<head>`

Phone screenshots have been flood-filled to remove white margins → the corners outside each phone bezel are alpha-0, with a `drop-shadow` filter creating a soft halo behind the bezel.

---

## Where the responsive work currently lives

CSS media queries in `index.html`:

- **`@media (max-width: 1024px)`** — main breakpoint. Triggers hamburger nav, stacks hero into single column, single-column demo grid, etc. (around line 488)
- **`@media (max-width: 768px)`** — tablet/large-phone (around line 502)
- **`@media (max-width: 480px)`** — small phone (around line 516)
- **`@media (max-width: 560px)`** — cookie-bar layout switch
- Section-specific responsive rules scattered throughout (look for `.demo-grid`, `.pricing-grid`, `.contact-grid`, `.about-grid`, `.footer-grid`, `.modal-card`, `.flip-stage`, `.policy-card` overrides)

The hamburger toggle is wired in the inline `<script>` at the bottom of `index.html`. Mobile menu element is `#mobile-menu`.

---

## Mobile sections to audit

Walk through each on a real device (or DevTools 375×812 / 414×896 / 393×852) and flag visual + interaction issues. Likely candidates based on what we've shipped:

1. **Hero** — verify the phone image + hero headline don't crowd each other on 375px. The phone is in `.phone-scene` inside `.hero-visual`. Check the eyebrow pill wrap.
2. **Hero CTAs** — `.btn-primary` / `.btn-outline` should stack full-width on 480px (rule already in place, verify).
3. **Stats row** — 4 stats wrap to 2×2 on 768px. Confirm the `<60s` and "Real-Time / Delivery" cells aren't crushed.
4. **Trust bar** — wraps on 768px. The `iPhone + Web` tile should stay readable.
5. **Ticker** — make sure the marquee animation doesn't overlap the next section on small screens.
6. **Demo / scroll-flip** — biggest mobile risk. Currently `.demo-scroll{height:calc(100vh + 360vh)}` and `.demo-pin{position:sticky;top:0;height:100vh}`. On a phone with a tall URL bar, the pinned card may be partially obscured. The 3D rotation may also feel sluggish on lower-end devices — test scroll perf. The step-list (`.demo-step-list`) currently sits **above** the phone on mobile because of `flex-direction: column` reorder; verify the active step still highlights as the user scrolls.
7. **Walkthrough video** — `.video-frame` should stay 16:9 on phones, no overflow. Test tap-to-play.
8. **Features grid** — collapses to 1-column on 768px. Confirm cards aren't too tall.
9. **Audience grid** — 3 cards become 2-col on 1024px and 1-col on 768px. The new "Built for any prescriber" cap line should center properly.
10. **Vision** — 2 cards centered (just shipped). Verify single-column on 768px stacks cleanly.
11. **Pricing** — 2 cards collapse to 1-col on 768px. The 30-day-free banner ribbon may overflow on narrow phones — wrap or shrink text.
12. **FAQ** — accordion items. Tap target size should be ≥44px. Check expand/collapse visual.
13. **Contact** — form goes single-column on 768px (rule in place). Inputs full-width, labels readable.
14. **Footer** — 4-col grid → 2-col on 768px with brand block spanning both columns. Verify the address + socials don't clip.
15. **Modal popovers** — `.modal-card` becomes `28px 22px` padding on 768px. Long content (Identity Verification) should scroll inside the card with the on-brand teal scrollbar. Test on iOS Safari (which hides the WebKit scrollbar by default — may need a fallback).
16. **Cookie banner** — bottom-fixed. Switches to centered column layout on 560px. Verify it doesn't cover sticky CTAs.
17. **Hamburger menu** — `.mobile-menu` toggles `.open` class. Verify it slides in cleanly, links scroll-spy correctly, and tapping a link closes the menu.

Things that **should not** change:

- Brand colors (`--teal:#3BB8AF` + `--gold:#F0A500` + `--teal-deep:#1F5F5A`)
- Font stack (Plus Jakarta Sans / DM Sans / JetBrains Mono via Google Fonts)
- The phone screenshots themselves (in `assets/screens/`) — they were hand-edited by the PM and flood-filled to alpha-0 corners. Don't re-crop. If a screen reads wrong on mobile, fix it via CSS, not by re-cropping.
- The walkthrough MP4 asset
- Any of the footer modal content (Privacy / Terms / Identity Verification templates near `</body>`)
- Copy in any section. PM has signed off. Mobile-specific copy tightening (e.g., shortening a headline) is fine but flag it back to the PM.

---

## Files of interest

| Path | Purpose |
|---|---|
| `index.html` | Everything — single-file landing page |
| `assets/screens/login.png`, `profile.png`, `patient-rx-list.png`, `confirm-sign.png`, `pharmacy-select.png` | The 5 phone screens (alpha-channel, white margins flood-filled to transparent) |
| `assets/video/walkthrough.mp4` | Self-hosted prescriber walkthrough (45 MB) |
| `assets/favicon.svg`, `favicon-32x32.png`, `apple-touch-icon.png`, `og-image.png` | Brand assets |
| `HANDOFF_QUESTIONS.md` | The original PM questionnaire — useful context, do not modify |
| `.claude/launch.json` | Preview server config (python -m http.server, port 8765, served from `getrx-concept`) |

---

## How to run / verify

Use the Claude Code `preview_*` MCP tools (not Bash for the server):

1. `preview_start` with name `getrx` (or check `preview_list` first — server may already be running on port 8765)
2. `preview_resize` with `preset: "mobile"` (375×812) — also test 414×896 and 393×852 manually
3. `preview_eval` to remove the cookie banner (`document.querySelector('.cookie-bar')?.remove()`) so it doesn't cover layout while you screenshot
4. `preview_screenshot` per section
5. `preview_inspect` for specific computed styles (e.g., font-size of `.hero-headline` at 375px)

A note from this session: `preview_screenshot` has timed out occasionally when the page has heavy canvas animation running. If that happens, hide the hero canvas first via eval: `document.getElementById('hero-canvas').style.display='none'`.

---

## Workflow expectations

- Always work from `main`. Pull first if running on a different machine.
- Make focused commits per fix. The history so far shows a pattern of one-thing-per-commit with descriptive subject lines.
- Push to `origin main`. GitHub Pages auto-deploys.
- The PM hard-refreshes (Ctrl/Cmd+Shift+R) to see new builds. Tell them when a push is live.
- Don't touch `.gitignore` unless adding a new ignored path.
- Don't introduce a build step. The site stays as a single `index.html`.

---

## Known limitations / debt

- `cdn.tailwindcss.com` is loaded in `<head>` and emits a console warning on every page load. Tailwind isn't really doing much — most styles are hand-rolled. Removing it would be a 10-line cleanup but will not affect mobile polish; flag it as separate cleanup work.
- The lucide icons script (`unpkg.com/lucide@latest`) doesn't include the social-platform icons (linkedin, twitter, facebook, youtube). Those are inline SVGs in the footer.
- The walkthrough MP4 is 45 MB. Tolerable on desktop, painful on mobile data. After mobile polish, consider:
  - Generating a lower-bitrate web-friendly version (target 8–12 MB)
  - Self-hosting on S3/CloudFront once dev team has the pipeline
- The `#signup` anchor doesn't exist as a section — every Sign Up CTA goes directly to `https://www.getrx.com/prescribers/new`. If you need to add an in-page signup section later, the modal pattern from Privacy / Terms is the cleanest reference.

---

## What the PM is still waiting on (out of scope for mobile polish)

- Final Privacy Policy, Terms of Service, Direct Trust certificate text — modals have placeholders
- Real Rx-sent + avg-time numbers (placeholders: 12,847+ and <60s)
- Founder headshots (currently text avatars in `.founder-avatar`)
- A dedicated phone number (currently no phone shown)
- GA4 / Meta / TikTok / LinkedIn pixel IDs (slot exists at top of `<head>`)

---

## Quick smoke test before handing back

1. Hard-refresh the live URL on your phone.
2. Scroll top to bottom — no horizontal scroll, no overlapping elements, no clipped corners.
3. Tap each footer link → modals open / close cleanly.
4. Tap each Sign Up button → opens `getrx.com/prescribers/new` in a new tab (or same tab, currently same).
5. Open hamburger menu → all links visible, tappable.
6. Open and close FAQ items.
7. Reach Demo section → scroll-flip plays through all 4 screens without glitches.
8. Tap walkthrough video → loads, plays, can fullscreen.
9. Cookie banner appears once, dismisses, doesn't return after reload.
10. Pricing → both Sign Up CTAs work.
11. Contact form → fields are tappable, labels visible above each field, submit button reachable.
