# ReddSocial.com — Coming Soon Website

> **Make Every Conversation Count.**  
> Official Coming Soon website for **ReddSocial**, a specialized Reddit marketing and community growth agency.  
> Live Repository: [https://github.com/mevishalvaish/reddsocial](https://github.com/mevishalvaish/reddsocial)

---

## Brand Identity & Design System

ReddSocial helps businesses build a stronger presence on Reddit through strategic content, meaningful community engagement, research, and data-driven marketing. The website establishes an original brand identity inspired by Reddit's community-driven ethos and distinct orange-red visual language without infringing on Reddit's trademarks, Snoo mascot, or assets.

### Color Palette

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

1. **Navigation Bar**: Clean sticky header with original ReddSocial logo, desktop section anchors (`#services`, `#why`, `#how-it-works`), animated status indicator, "Coming Soon" badge, and "Get Early Access" smooth-scroll CTA.
2. **Hero Section**:
   - Eyebrow: `REDDIT MARKETING, REIMAGINED`
   - Main headline: **"Your Brand Belongs in the Conversation."** (with *"in the Conversation."* highlighted in `#FF4500`).
   - Supporting copy and dual action buttons (*Get Early Access* & *Explore Our Services*).
   - Coming Soon indicator: *"Something exciting is coming to Reddit marketing."*
3. **Hero Interface Visual**: Custom CSS/SVG-driven layered composition featuring an abstract community thread (`r/industry_leaders`, upvote badge, replies count), helpful community response bubble, and campaign intelligence analytics grid (`500+ Active Publishers`, `Posts & Comments`, `Amplified Upvotes`).
4. **500+ Reddit Publishers Network**: Dedicated showcase highlighting our exclusive network of 500+ aged, high-karma Reddit contributors across 1,000+ subreddits executing manual, organic work.
5. **Core Reddit Services Grid (`#services`)**:
   - **Thread Post Service**: Targeted discussion threads crafted to spark genuine conversation and place your brand in the community spotlight.
   - **Comment Marketing Service**: High-impact contextual comments inserted into active, ranking threads where prospective buyers are looking for solutions.
   - **Upvote Amplification Service**: Strategic upvote momentum to boost thread visibility, reach top positions in target subreddits, and ensure maximum reach.
   - **Fully Managed Reddit Service**: End-to-end turnkey Reddit marketing management — custom strategy, subreddit mapping, content calendars, publisher coordination, and transparent ROI reporting.
6. **Why ReddSocial (`#why`)**: Three core feature blocks (*Community-First Thinking*, *Strategy Before Posting*, *Meaningful Engagement*).
7. **How It Works (`#how-it-works`)**: Three-step connected process (*01 Discover*, *02 Strategize*, *03 Engage and Improve*) with horizontal connectors on desktop and a vertical timeline on mobile.
8. **Email Signup Section (`#signup`)**: Centered `#FFF0E9` container with *"Be First to Join the Conversation."*, input placeholder `"Enter your work email address"`, and button `"Keep Me Updated"`.
9. **Final Call to Action**: Premium charcoal `#1A1A1B` section with white typography and smooth-scroll CTA.
10. **Footer**: Wordmark, tagline *"Make Every Conversation Count."*, section navigation links, dynamic copyright year, independent agency disclaimer, and interactive launch privacy modal.

---

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with CSS design tokens
- **Icons**: Lucide React
- **Animations**: CSS keyframe animations with `prefers-reduced-motion` accessibility support
- **SEO & Metadata**: Dynamic OpenGraph image generator (`app/opengraph-image.tsx`), Twitter cards, dynamic `sitemap.xml`, and `robots.txt`

---

## Running Locally

1. Navigate to the project directory:
   ```bash
   cd /Users/macos/.gemini/antigravity/scratch/reddsocial
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser:
   ```
   http://localhost:3000
   ```

4. Build and run for production:
   ```bash
   npm run build
   npm run start
   ```

---

## Email Subscription Configuration

The subscription form is designed with an integration layer supporting major email providers or custom webhooks. If no provider is configured, the form transparently informs visitors that backend integration is pending (avoiding lost emails or false positives).

To connect a provider, create `.env.local` based on `.env.example`:

### Option 1: Resend (Recommended)
```env
RESEND_API_KEY=re_your_api_key_here
RESEND_AUDIENCE_ID=your_audience_id_optional
```

### Option 2: Custom Webhook (Zapier / Make / Slack / Discord)
```env
SIGNUP_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/...
```

### Option 3: Mailchimp
```env
MAILCHIMP_API_KEY=your_key_here
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_AUDIENCE_ID=your_list_id
```

---

## Deploying to Production (Domain: reddsocial.com)

### Vercel Deployment
1. Connect your repository `https://github.com/mevishalvaish/reddsocial` in the Vercel dashboard.
2. Add your environment variables (`RESEND_API_KEY`, etc.) in the Vercel project settings.
3. Under **Domains**, add `reddsocial.com` and `www.reddsocial.com`.
4. Configure DNS records at your registrar:
   - Type `A` Record: `@` -> `76.76.21.21`
   - Type `CNAME` Record: `www` -> `cname.vercel-dns.com`

---

## Legal & Compliance Notice

ReddSocial is an independent community marketing agency and is not affiliated with, sponsored by, or endorsed by Reddit, Inc. Reddit is a registered trademark of Reddit, Inc.
