# ReddSocial.com — Coming Soon Website

> **Be Part of the Conversation.**  
> Official Coming Soon website for **ReddSocial**, a modern Reddit marketing and community growth agency.

---

## Brand Identity & Design System

ReddSocial helps businesses connect with relevant Reddit communities through thoughtful marketing, authentic engagement, and audience insights. The website establishes an original brand identity inspired by Reddit's community-driven ethos and distinct orange-red visual language without infringing on Reddit's trademarks, Snoo mascot, or assets.

### Color Palette

| Token | Hex Value | Usage |
|---|---|---|
| `Primary Accent` | `#FF4500` | Primary buttons, headline accents, status dots, icons |
| `Dark Text / Charcoal` | `#1A1A1B` | Primary headings, body titles, dark final CTA background |
| `Muted Dark Background` | `#252526` | Dark badges, subtle dark containers |
| `Secondary Text` | `#576F76` | Supporting copy, metadata, captions |
| `Border` | `#EDEFF1` | Subtle divider lines, card borders |
| `Alternate Background` | `#F6F7F8` | Services, How It Works, subtle section backgrounds |
| `Soft Orange Background`| `#FFF0E9` | Email signup section, icon accents, focus highlights |
| `Main Background` | `#FFFFFF` | Hero, Why ReddSocial, cards, navbar, footer |

---

## Website Structure

1. **Navigation Bar**: Clean sticky header with original ReddSocial logo, animated status indicator, "Coming Soon" badge, and "Get Launch Updates" smooth-scroll CTA.
2. **Hero Section**: Two-column layout with the main headline *"Big Ideas Start With Real Conversations"*, supporting copy, dual action buttons, and status indicator.
3. **Hero Community Illustration**: Custom CSS/SVG-driven floating conversation cards illustrating realistic, generic discussions with staggered floating animations.
4. **Upcoming Services Section (`#services`)**: Three structured cards highlighting *Reddit Marketing Strategy*, *Community Engagement*, and *Audience Insights* with original line icons.
5. **Why ReddSocial Section**: Two-column editorial layout detailing the four core principles: *Community First*, *Relevant Conversations*, *Human-Led Engagement*, and *Meaningful Insights*.
6. **How It Works Section**: Four-step methodology (*01: Discover*, *02: Research*, *03: Engage*, *04: Learn*) arranged horizontally on desktop and vertically on mobile.
7. **Email Signup Section (`#signup`)**: Prominent `#FFF0E9` section with client & server validation, honest unconfigured state handling, loading animations, and privacy commitment.
8. **Final Call to Action**: Premium charcoal `#1A1A1B` section with white typography and smooth-scroll CTA.
9. **Footer**: Logo, description, dynamic copyright year, independent disclaimer, and interactive launch privacy modal.

---

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with CSS design tokens
- **Icons**: Lucide React
- **Animations**: CSS keyframe animations with `prefers-reduced-motion` accessibility support
- **SEO & Metadata**: OpenGraph images, Twitter cards, dynamic `sitemap.xml`, and `robots.txt`

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

4. Build for production:
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
1. Install the Vercel CLI or connect your Git repository in the Vercel dashboard:
   ```bash
   npx vercel
   ```
2. Add your environment variables (`RESEND_API_KEY`, etc.) in the Vercel project settings.
3. Under **Domains**, add `reddsocial.com` and `www.reddsocial.com`.
4. Configure DNS records at your registrar:
   - Type `A` Record: `@` -> `76.76.21.21`
   - Type `CNAME` Record: `www` -> `cname.vercel-dns.com`

---

## Legal & Compliance Notice

ReddSocial is an independent community marketing agency and is not affiliated with, sponsored by, or endorsed by Reddit, Inc. Reddit is a registered trademark of Reddit, Inc.
