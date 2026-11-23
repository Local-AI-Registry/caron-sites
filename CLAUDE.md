# Caron's preview sandbox (caron.localairegistry.com)

This repo hosts client website previews for Local AI Registry (LAIR). Every client gets one folder, and it is live at:

    https://caron.localairegistry.com/<client-folder>/

Pushing to `main` publishes within about a minute (GitHub Pages). There is no build step: plain HTML, CSS, JavaScript and images only.

## Rules for every preview

1. **One folder per client.** Lowercase, dashes, no spaces: `weinstock`, `dermatex-hair`. Never edit another client's folder unless asked. Never edit files at the repo root (`CNAME`, `robots.txt`, this file).
2. **Each folder is self-contained.** The homepage is `<client>/index.html`. Inner pages go in subfolders with their own `index.html` (`<client>/contact/index.html`). Use relative links (`contact/`, `../`) so the whole folder can later move to the client's real domain unchanged.
3. **Hidden from search.** Every page gets `<meta name="robots" content="noindex, nofollow">` in the `<head>`. Previews must never show up in Google or AI answers.
4. **Light mode only.** No dark mode, no dark-mode media queries.
5. **No orphan text.** No single word or symbol alone on the last line of a headline or paragraph at phone or desktop width. Use `text-wrap: balance` on headings, `text-wrap: pretty` on body text, and `&nbsp;` before the last word when needed.
6. **No em dashes** in any copy.
7. **Only true facts.** Use the business's real name, address, phone, hours, providers and services from their current site, Google Business Profile or what the client gave us. Never invent stats, reviews, awards, prices or claims. If something is unknown, leave a clearly marked placeholder like `[PHOTO: lobby]` or `[CONFIRM: hours]`.
8. **Plain language.** Written for patients and customers, not marketers. Industry-neutral templates; only the client's own details are specific.
9. **Built for AI search from day one:**
   - Schema.org JSON-LD on every page (LocalBusiness or the right subtype, plus Person for providers, Service for services, FAQPage where there is a real FAQ, BreadcrumbList).
   - One clear H1 per page, descriptive title and meta description, real headings that answer the questions customers ask.
   - An `llms.txt` in the client folder summarizing the business and linking key pages.
   - Fast: compress images (WebP, under 300 KB each), no heavy libraries.
10. **Forms are placeholders.** Preview forms show a thank-you message and send nothing. Real form handling is set up at launch.
11. **No secrets.** This repo is public. Never commit passwords, API keys, client logins or patient information.
12. **Mobile first.** Check every page at phone width (390px) and desktop (1440px) before calling it done.

## Workflow

1. Create `<client>/` and build the full site there (all pages, blog/articles, images, content).
2. Commit with a clear message, for example `weinstock: add procedures pages`, and push to `main`.
3. Wait about a minute, then open `https://caron.localairegistry.com/<client>/` and check it in a real browser.
4. Send the client the preview link for approval.
5. After approval the site moves to its permanent home (WordPress or the client's own hosting). That happens outside this repo.

## When you finish a change

Always reply with the live preview link, for example `https://caron.localairegistry.com/weinstock/`.
