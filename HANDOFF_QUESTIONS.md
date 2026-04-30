# GetRx Landing Page — Questions for PM / Dr. Rudd

Goal: ship a **fully functional, self-contained marketing site**. The dev team is only wiring the prescriber login to the app — they will not build About / Pricing / FAQ / Contact / legal copy. Everything else must come from you.

---

## 1. Login & app integration

1. What's the exact URL the **Prescriber Login** button should point to (the new web app login, not `home.getrx.com/prescriber/`)?
2. Same question for **Get Early Access** — is that a separate signup URL, an account-creation flow, a contact form, or the login itself?
3. Is the **Patient Login** still "Coming soon," or is there a target URL now?
4. Should the login dropdown also show a **Pharmacy Login** option, or is that out of scope?
5. Will the app live at `app.getrx.com`, `getrx.com/app`, or another subdomain?

## 2. Domain, hosting, analytics

6. What's the **production domain** for this landing page (`getrx.com`, `www.getrx.com`, something else)?
7. Where will it be hosted (Vercel, Netlify, AWS, Cloudflare Pages, your dev team's infra)?
8. Do you have **Google Analytics 4 / Meta Pixel / TikTok Pixel / LinkedIn Insight Tag** IDs to plug in, or are those not running yet?
9. Do you use a **tag manager** (GTM)? Container ID?
10. Should we add a **cookie consent banner**? Required jurisdictions (US-only, EU, etc.)?

## 3. Pricing

11. Is there **public pricing**, or does every customer talk to sales? (Drives whether we show a pricing table or a "Contact us for pricing" card.)
12. If public: how many tiers, what are they called, what do they cost, what's in each?
13. Free trial / demo period? How long, how to start?
14. Per-prescriber, per-practice, or per-prescription pricing model?

## 4. About / Company

15. Short company description (1–2 sentences) for the About section.
16. Founding story — when, who, why getRx exists (3–4 sentences).
17. Are there founders / leadership names + titles + headshots you want shown?
18. Office / company location (city, state)?
19. LinkedIn, Twitter/X, Instagram URLs?

## 5. FAQ content

20. Top 6–10 questions prospects ask the most. We need both questions and the official answers. Suggested topics if you don't have a list:
    - Is this DEA-compliant for Schedule II–V?
    - How is two-factor authentication handled?
    - Which states is it available in?
    - Which pharmacies does it deliver to?
    - Does it integrate with my EMR?
    - HIPAA / data security details?
    - What devices does it run on?
    - How fast is onboarding?
    - What's the cost?
    - What happens to my Rx history if I cancel?

## 6. Press

21. Any **press coverage / publications** to feature (logos + article links)?
22. Any **awards / certifications** to show (e.g. SOC 2, HITRUST)?
23. If nothing yet — should we drop the Press footer link entirely, or keep it as a "Coming soon" page?

## 7. Contact

24. Where should **contact-form submissions** go (email address, Slack webhook, HubSpot, Salesforce, custom endpoint)?
25. **Sales email**, **support email**, **press email** — same or different?
26. Phone number for the site? (Optional, but useful for medical professionals.)
27. Mailing address?

## 8. Stats & social proof

28. The current page shows "**12,847+ prescriptions sent**" and "**<60s avg Rx time**." Are these real, ballpark, or placeholder? If placeholder, what real numbers should we use, or should we remove them?
29. Any **real customer/practice testimonials** (name, title, practice, photo, quote) we can feature?
30. Number of practices, prescribers, or pharmacies on the platform that we can quote?
31. Logos of any clinics or vet practices using getRx that we can show on a "Trusted by" strip?

## 9. Compliance copy (legal review needed)

32. Final approved wording for **DEA 21 CFR Part 1311** claims — anything counsel wants tightened?
33. Do you have an approved **HIPAA compliance statement** to put on the site?
34. **BAA (Business Associate Agreement)** — link to download, or contact-only?
35. **Privacy Policy** — existing copy / URL, or do we need a stub?
36. **Terms of Service** — same question.
37. Any required disclaimers (e.g., "Not medical advice," state licensing notes)?

## 10. Brand assets

38. **Logo files** — SVG (vector) and PNG (with transparency), preferably:
    - Full color
    - White / mono on dark
    - Black / mono on light
    - Square icon (for favicon, social avatars)
39. **Confirmed brand colors** with hex values (the current teal `#3BB8AF` + gold `#F0A500` were inferred — please confirm or correct).
40. **Brand fonts** — currently using Plus Jakarta Sans + DM Sans + JetBrains Mono. Approved?
41. **Tagline** — "Prescriptions, reimagined" — keep, change, or have an official one?
42. Any **brand guidelines PDF** you can share?

## 11. Media assets

43. **Hero/walkthrough video** — the meeting doc mentioned AI video scripts. Will there be a 30–90s explainer video to embed? If yes, when, and who's producing it?
44. **App screenshots** — we have the 7 you shared. Any **iPad** or **web app** screens (we have profile-info-web and clinic-info-web; anything else)?
45. **Lifestyle / clinical photography** — vets in the field, surgeons, traveling physicians using the app? Stock photos OK or do you have originals?
46. **OG / social share image** — do you have a 1200×630 social card design, or should we generate one from the logo?
47. **Favicon** — use the get-Rx polygon mark, or a different icon?

## 12. Audiences

48. The current page targets **Veterinarians, Plastic Surgeons, Traveling Physicians**. Any audiences to add (dentists, NPs, mobile clinics, urgent care)? Or remove?
49. Specific **specialties or use-cases** worth calling out by name?

## 13. Email capture / lead-gen

50. Should the site have an **email capture form** (newsletter, waitlist, demo request)? If yes, where do those addresses go (Mailchimp, ConvertKit, HubSpot, etc.)?
51. **Demo-booking** — direct calendar link (Calendly, Chili Piper)? URL?

## 14. Compliance for ads / paid media

52. Are there **claim restrictions** we should watch when running paid ads (Meta, Google) for a controlled-substance e-Rx product?
53. Any **medical advertising disclosures** required at the bottom of the page?

---

# Asset checklist (collect & send)

**Brand**
- [ ] Logo: SVG full color
- [ ] Logo: SVG white-on-dark
- [ ] Logo: SVG black-on-light
- [ ] Square icon (1024×1024 PNG)
- [ ] Brand colors (hex) — confirmed
- [ ] Brand fonts — confirmed
- [ ] Brand guidelines PDF (if exists)

**Photography**
- [ ] Founder/team headshots (square, ≥800px)
- [ ] Clinical / field photos (≥1920×1080)
- [ ] Office photo (optional)

**App screenshots**
- [x] 7 screens received in Drive folder
- [ ] Any additional iPad or web screens
- [ ] Any short screen-recording video clips

**Social**
- [ ] OG image 1200×630
- [ ] Twitter card 1200×600
- [ ] LinkedIn share preview

**Press**
- [ ] Publication logos (SVG/PNG, transparent)
- [ ] Article titles + URLs
- [ ] Award badges

**Customers / social proof**
- [ ] 3–5 testimonials (name, title, practice, photo, quote)
- [ ] Customer practice logos (5–10)

**Legal**
- [ ] Approved Privacy Policy text
- [ ] Approved Terms of Service text
- [ ] HIPAA compliance statement
- [ ] BAA download or request flow
- [ ] DEA / Part 1311 final approved language

**Numbers**
- [ ] Confirmed Rx-sent counter (or instruction to remove)
- [ ] Avg Rx time (or remove)
- [ ] Practice / prescriber count (if quotable)
- [ ] State coverage list

**Integration**
- [ ] Final prescriber-login URL
- [ ] Final early-access / signup URL
- [ ] Contact-form destination (email or endpoint)
- [ ] Demo booking link
- [ ] GA4 / Meta / TikTok / LinkedIn pixel IDs
- [ ] GTM container ID

**Domain / hosting**
- [ ] Production domain confirmed
- [ ] Hosting provider chosen
- [ ] DNS who-controls confirmed

**Video (per meeting doc)**
- [ ] Hero walkthrough video file (or YouTube/Vimeo URL)
- [ ] AI-generated short clips (timeline)

---

# Notes for our side

- Once we get answers to **Section 1** (login URLs) we can immediately stop linking to the old site.
- Sections **3, 4, 5, 7** are the biggest content blockers — without that copy, those page sections will read as placeholders.
- Sections **9, 14** need legal/compliance sign-off before publishing claims about DEA / HIPAA.
- Budget note from the 4/28 meeting: $2,000 was approved for the current round of edits — confirm whether copywriting / new section build is included in scope or if that's a separate line item.
