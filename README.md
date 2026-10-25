# ReddSocial.com — Coming Soon Website

> **Make Every Conversation Count.**  
> Official Coming Soon website for **ReddSocial**, a specialized Reddit marketing agency.  
> Live Repository: [https://github.com/mevishalvaish/reddsocial](https://github.com/mevishalvaish/reddsocial)

---

## Brand Positioning & Core Services

ReddSocial helps brands scale on Reddit through three core offerings executed by real community members:
1. **Thread Posting**: Engaging, subreddit-tailored discussion threads crafted and published by aged, high-karma Reddit accounts from our network.
2. **Comments**: Strategic, high-intent comments placed in active, ranking threads answering buyer questions and introducing your brand naturally.
3. **Upvotes**: Targeted upvote momentum to boost thread visibility, reach top positions in target subreddits, and maximize organic reach.

### Powered by 500+ Reddit Publishers in Our Network
All work is executed manually through our private network of over **500 vetted Reddit publishers** with aged accounts, authentic karma, and established niche authority.

---

## Color Palette

| Token | Hex Value | Usage |
|---|---|---|
| `Primary Accent` | `#FF4500` | Primary buttons, headline accents, status dots, icons |
| `Dark Text / Charcoal` | `#1A1A1B` | Primary headings, body copy titles, dark final CTA background |
| `Muted Dark Background` | `#252526` | Dark badges, subtle dark containers |
| `Secondary Text` | `#576F76` | Supporting copy, metadata, captions |
| `Border` | `#EDEFF1` | Subtle divider lines, card borders |
| `Alternate Background` | `#F6F7F8` | Services, How It Works, subtle section alternates |
| `Soft Orange Background`| `#FFF0E9` | Email signup section, icon accents, focus highlights |
| `Main Background` | `#FFFFFF` | Hero, Why ReddSocial, cards, navbar, footer |

---

## Website Structure

1. **Navigation Bar**: Sticky header with original ReddSocial logo, desktop section anchors (`#services`, `#why`, `#how-it-works`), animated status dot, "Coming Soon" badge, and "Get Early Access" smooth-scroll CTA.
2. **Hero Section**: Eyebrow `REDDIT MARKETING, REIMAGINED`, `500+ REDDIT PUBLISHERS IN NETWORK` pill, headline **"Your Brand Belongs in the Conversation."**, supporting copy, dual CTAs (*Get Early Access* & *Explore Our Services*), and coming soon indicator.
3. **Hero Interface Visual**: Floating discussion cards illustrating thread posts, comments, and real-time publisher intelligence metrics (`500+ Active Publishers`, `Posts & Comments`, `Amplified Upvotes`).
4. **Publisher Network Showcase**: Dedicated banner highlighting **"500+ Reddit Publishers in Our Network Do the Work"** (100% Real Accounts, Manual Human Work, Active in Any Niche).
5. **Core Services Grid (`#services`)**:
   - **Thread Posting** (`MessageSquare`) — Subreddit-tailored hooks, native tone, posted by vetted high-karma accounts.
   - **Comments** (`MessagesSquare`) — Natural conversation insertion, answering buyer pain points in ranking threads.
   - **Upvotes** (`ArrowBigUp`) — Natural delivery pacing, top-of-subreddit ranking support, maximum organic reach.
6. **Why ReddSocial (`#why`)**: 3 pillars: *Strategic Thread Posts*, *High-Intent Comments*, and *Upvote Ranking Momentum*.
7. **How It Works (`#how-it-works`)**: 3-step timeline (*01 Target Subreddits*, *02 Deploy 500+ Publishers*, *03 Rank at the Top*).
8. **Email Signup Section (`#signup`)**: Centered `#FFF0E9` container with *"Be First to Join the Conversation."*, input placeholder `"Enter your work email address"`, and button `"Keep Me Updated"`.
9. **Final Call to Action**: Premium charcoal `#1A1A1B` section with white typography and smooth-scroll early access button.
10. **Footer**: Wordmark, tagline *"Make Every Conversation Count."*, section navigation links, dynamic copyright year, independent agency disclaimer, and interactive launch privacy modal.

---

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with CSS design tokens
- **Icons**: Lucide React
- **Animations**: CSS keyframe animations with `prefers-reduced-motion` accessibility support
- **SEO & Metadata**: Dynamic OpenGraph generator (`app/opengraph-image.tsx`), Twitter cards, dynamic `sitemap.xml`, and `robots.txt`

---

## Running Locally

```bash
cd /Users/macos/.gemini/antigravity/scratch/reddsocial
npm run dev
```

Build and run for production:
```bash
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploying to Production (Domain: reddsocial.com)

1. Connect your repository `https://github.com/mevishalvaish/reddsocial` in the Vercel dashboard.
2. Under **Domains**, add `reddsocial.com` and `www.reddsocial.com`.
3. Configure DNS records at your registrar:
   - Type `A` Record: `@` -> `76.76.21.21`
   - Type `CNAME` Record: `www` -> `cname.vercel-dns.com`

---

## Legal & Compliance Notice

ReddSocial is an independent community marketing agency and is not affiliated with, sponsored by, or endorsed by Reddit, Inc. Reddit is a registered trademark of Reddit, Inc.
