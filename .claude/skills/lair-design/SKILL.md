---
name: lair-design
description: Local AI Registry house style for any visual or client-facing work. Use for every design, landing page, report, audit, proposal, ad, social post, SVG illustration, animated explainer, chart or slide, especially anything a busy, non-technical business owner or doctor will read.
---

# Local AI Registry design system and thinking

This is how Local AI Registry (LAIR) makes things. Follow it every time, before writing a line of HTML, SVG or copy. If a request conflicts with this, ask.

## 1. Who we design for

Our reader is a busy local business owner. Often a doctor in their 50s or 60s. Reading glasses are on the desk, not on their face. They look at it on a phone, between patients, for about 5 seconds.

Design for that person:
- They will not read paragraphs. They scan headlines, look at pictures, and glance at one number.
- They do not know what AEO, GEO, schema, SERP, LLM, citations or entities mean. Never use those words without a plain explanation, and prefer not to use them at all.
- They trust what they can see (a real screenshot of ChatGPT leaving them out) far more than what we claim.
- They decide in 5 seconds whether this is worth their time.

Before designing anything, write down three lines:
1. Who is reading this?
2. What is the ONE thing they should believe after 5 seconds?
3. What is the ONE thing we want them to do?

Every element must serve those three answers. If it does not, cut it.

## 2. Headlines and copy

- **Headlines: 7 words max. Aim for 3 to 5.** If you need more, you have two ideas. Split them.
- One idea per headline, one idea per screen or section.
- Break headline lines at natural phrase boundaries. Never strand a thought: "Customers ask. AI" / "answers from here." is wrong. "Customers ask." / "AI answers from here." is right.
- **No orphans, ever.** No single word, letter or symbol alone on a line in headlines, body copy, captions or legends. Check at phone width (390px) and desktop (1440px). Use `text-wrap: balance` on headlines, `text-wrap: pretty` on body, and `&nbsp;` between the last two words where needed.
- Write at a 6th grade reading level. Short words, short sentences. Body sentences under 15 words.
- Lead with the reader's problem or question, not our product. "Does ChatGPT recommend you?" beats "Introducing AI visibility profiles."
- Never use em dashes. Use a period, comma or colon.
- No AI filler: no "unlock," "elevate," "seamless," "in today's digital landscape," "it's not just X, it's Y," "game-changer," "delve," "robust."
- Never invent stats or totals. Every number must have a real source, shown in small type nearby. No made-up subtext like "X searches a month going to competitors."
- Templates meant for any business must be industry neutral. Never hardcode "med spa," "patients" or "Botox" into template text. Only the business's own data can be specific.

## 3. Brand

Source of truth: localairegistry.com/brand. Pull the real logo files, fonts and colors from there. Never redraw the logo and never guess colors.

- Registry Blue `#1F4FE0`: actions and the single most important emphasis only.
- Ink `#0B1A2E`: text.
- Paper `#F4F1EA` or white: backgrounds.
- Muted text `#556070`.
- Fonts: Cormorant (display), Bricolage Grotesque and Hanken Grotesk (headlines and UI). Check the brand page for the current pairing.
- **Bright red is only for bad findings** (a problem, a miss, a zero). Never decorative.
- Green only for good results.
- **Light mode only.** Never ship a dark mode version.
- Use real third-party logos (ChatGPT, Gemini, Google, Perplexity, Claude) from official files. Never recreate another company's logo by hand.

## 4. Type and readability (the half-blind rule)

- Body text: 18 to 20px on desktop, never below 16px on mobile. Nothing anyone needs to read is under 14px.
- Headlines: big. 40 to 72px desktop, 30 to 44px mobile. Tight tracking (about -0.01em to -0.02em), line height 1.05 to 1.15.
- Max 5 or 6 distinct text styles on a page. Two or three font weights. More than that is the number one tell of AI-made design.
- Contrast: body text at least 7:1 against its background. Never light gray on cream.
- Line length 45 to 70 characters.
- All-caps labels: a handful per page at most, never for anything important.
- One primary button per screen. Solid Registry Blue. Everything else is a text link or ghost button.

## 5. Layout and hierarchy (why ours looks designed, not generated)

AI design looks like AI because it gives everything equal weight. Do the opposite:
- **Emphasize by de-emphasizing.** Make secondary things quieter instead of making the main thing louder.
- **Fewer borders.** Use space, a soft background shift, or a light shadow instead of outlined boxes.
- **Labels are a last resort.** Do not label every value. "4.9 stars from 212 reviews" beats "Rating: 4.9 / Reviews: 212."
- Cut the clutter AI loves: chips, pills, tags, tiny colored dots, "A · B · C" meta lines, eyebrow labels over every heading, five-number stats strips, icon-in-a-circle grids. Use them only when they carry meaning.
- Vary spacing on purpose. Big gaps between sections, tight gaps inside a group. Identical padding everywhere looks generated.
- One corner radius system, defined up front.
- No placeholder images left in. Use real photos (treated in brand style), real screenshots, or a finished illustration.
- Show the honest state first. A zero or a miss in red ("0 of 22 answered") is more persuasive than a soft positive.
- Start from a reference, not imagination. If unsure, look at a page that already looks great (our live site, Airbnb, Stripe, Apple) and match its type sizes and spacing precisely. Models are good at copying and bad at imagining "clean."

## 6. The layman explainer structure

For any client report, audit, proposal or explainer page, tell it as a story in this order:

1. **The question** they already have. One short headline. ("When someone asks ChatGPT for a dentist near you, do you show up?")
2. **How it works**, as an animated SVG explainer. One concept, three or four simple steps. No jargon.
3. **Their data**, as one or two simple charts. Each chart's title states the takeaway ("Calls doubled since June"), not the metric name.
4. **The proof**: real screenshots (ChatGPT, Gemini, Google) showing them missing or present. Captured in a real browser, dated.
5. **What we will do**, in three or four plain steps with status (done, in progress, next).
6. **One ask**: one button or one sentence.

Each section gets one headline, one visual, and at most two or three short sentences.

End research pieces with: AI is evolving every day, and Local AI Registry's dedicated local AI research team is always figuring out the best approach.

## 7. SVG illustration style

Our illustration look: **smooth, minimalist, thick line.** Calm and confident, like a good editorial explainer.

- Consistent stroke weight across a piece: 3 to 4px at normal size, `stroke-linecap="round"`, `stroke-linejoin="round"`.
- Flat fills from the brand palette only. Mostly Ink lines on Paper or white, with Registry Blue on the one thing that matters.
- Few elements. If a shape does not help explain the idea, delete it.
- Real-world metaphors a layperson knows instantly: a storefront, a phone, a chat bubble, Main Street, a map pin, a magnifying glass, a person asking a question.
- **Not comic book.** No stamps, starbursts, smoke puffs, sparkles, speech-bubble "POW," drop shadows on everything, or cartoon faces. If the user says "make it more themed," add meaning (a leaf shape for cannabis data, a tooth for dentistry), not decoration.
- No clip art, no stock icon packs mixed with custom drawings. One drawing language per page.
- Labels inside illustrations follow the same type rules: 16px minimum, 7 words or fewer.
- Use `viewBox` and percentage widths so illustrations scale cleanly on phones.

## 8. Motion design

Motion is for explaining, never for decorating.

- Each animation explains one step of the idea (a question goes in, AI reads sources, one business comes out).
- Timing: 300 to 600ms per move, ease-out (`cubic-bezier(.2,.7,.2,1)`). Stagger related items by 80 to 150ms.
- Animate on scroll into view (IntersectionObserver), once. Simple explainer loops are fine if slow (6 to 10 seconds) and calm.
- Never animate body text. Never animate more than one focal thing at a time.
- **The final frame must work as a static image**, so screenshots, PDFs and printouts still make sense.
- Respect `prefers-reduced-motion`: show the final state with no motion.
- CSS and SVG animation (`@keyframes`, `stroke-dashoffset` line draws, opacity and transform). No heavy libraries for simple pieces.
- For videos: same thick-line style, same palette as the matching landing page, a calm human-sounding voice, conversational script. Read every line out loud. If it sounds stilted, rewrite it.

## 9. Charts

- One message per chart. The title says the takeaway.
- Label lines and bars directly. Avoid legends.
- Leave off the current, unfinished month. Clients read a partial month as a drop.
- Red only for bad, green only for good, Registry Blue for "you."
- Every chart shows its source and date in small type.

## 10. Quality check before showing anyone

Do all of this, every time:
1. Render it and look at screenshots at 390px and 1440px wide.
2. Every headline 7 words or fewer? Every line break at a phrase boundary? Zero orphans?
3. Count text styles. More than 6? Merge them.
4. Squint test: blur your eyes. Can you tell in one second what matters most? Is there exactly one solid button?
5. Hand it to an imaginary 60-year-old doctor without glasses. Can they read every word they need?
6. Any jargon, em dashes, AI filler, or unsourced number? Fix it.
7. Any claim about a website or AI answer? Verify it in a real browser (past cookie banners, age gates, popups) and keep the screenshot as proof.
8. Any red used for decoration? Any dark mode? Remove.
9. Does every element serve the reader, the 5-second belief, and the one action? If not, cut it.

When in doubt, cut. Less on the page, bigger, clearer.

## 11. Client websites (decided by Caron, November 2026)

- The client's own brand board replaces section 3 for their site: their colors, fonts and logo. Local AI Registry's brand is for our own reports, audits and proposals.
- Everything else here still applies to client sites: headline length, no orphans, readable type, one solid button per screen, fewer labels and chips, motion only to explain.
- When the client wants a reference site's movement, keep all of it: word wheels, marquees, slow zooms, rotating lines, scroll fades. The client's choice wins over section 8 on their own site. Section 8 still governs our own reports and explainers.
- No visible placeholder images, videos or reviews in a preview. Show only the client's real photos and list what is missing in the reply. Unknown text facts (hours, prices, credentials) still get a visible [CONFIRM: ...] label.
