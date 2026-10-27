/**
 * Convolift Central Content Configuration
 * ALL text, prices, pay rates, sliding words, FAQs, and links are stored here for easy editing.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortBenefit: string;
  iconName: "MessageSquare" | "MessagesSquare" | "CornerDownRight" | "Users2" | "ArrowBigUp" | "Sparkles";
  features: string[];
}

export interface EarnerTask {
  title: string;
  description: string;
  ratePlaceholder?: string;
  avgTime: string;
  iconName: "FileEdit" | "MessageCircle" | "CornerDownRight" | "TrendingUp";
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface CaseStudy {
  brandCategory: string;
  title: string;
  metricNumber: string;
  metricLabel: string;
  summary: string;
  subredditsSample: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  audience: "brand" | "earner";
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  brandName: "Convolift",
  domain: "convolift.com",
  siteUrl: "https://convolift.com",
  tagline: "Reddit Marketing, Done Right",
  whatsappNumber: "+919876543210", // Placeholder: user can edit in contentConfig.ts
  whatsappUrl: "https://wa.me/919876543210?text=Hi%20Convolift%2C%20I%20want%20to%20learn%20more%20about%20your%20Reddit%20services",
  whatsappBrandUrl: "https://wa.me/919876543210?text=Hi%20Convolift%2C%20I%20want%20to%20grow%20my%20brand%20on%20Reddit.",
  whatsappEarnerUrl: "https://wa.me/919876543210?text=Hi%20Convolift%2C%20I%20want%20to%20apply%20as%20a%20Reddit%20task%20earner.",
  telegramHandle: "@convolift_support",
  telegramUrl: "https://t.me/convolift_support",
  discordHandle: "convolift",
  discordUrl: "https://discord.gg/convolift",
  supportEmail: "support@convolift.com",
  salesEmail: "sales@convolift.com",
};

export const heroConfig = {
  badge: "Reddit Marketing, Done Right",
  metaEyebrow: "WORLDWIDE · REDDIT MARKETING · ORGANIC REACH",
  headlinePrefix: "Get your brand",
  headlineSuffix: "on Reddit",
  // The exact sliding words requested by the user (in order):
  brandSlidingWords: ["Noticed", "Discussed", "Trusted", "Recommended"],
  subheading:
    "Convolift helps startups and brands join the right conversations in the right subreddits, with real comments, posts, and replies that people actually read.",
  earnerLinePrefix: "Reddit users: get paid to",
  earnerSlidingWords: ["Post", "Comment", "Reply", "Engage"],
  capabilities: [
    { tag: "POSTS", label: "Reddit Posts", color: "#FF4500" },
    { tag: "COMMENTS", label: "Organic Comments", color: "#5eead4" },
    { tag: "REPLIES", label: "Contextual Replies", color: "#9b87ff" },
    { tag: "UPVOTES", label: "Natural Signals", color: "#f6c453" },
    { tag: "EARNERS", label: "Verified Community", color: "#10b981" },
  ],
  signalCards: [
    {
      eyebrow: "AUTHENTIC VOICES",
      title: "Genuine Karma History",
      description: "100% human-operated aged Reddit accounts with authentic karma and posting history.",
    },
    {
      eyebrow: "HIGH-INTENT SUBREDDITS",
      title: "Contextual Recommendations",
      description: "Placed precisely where active buyers and founders ask for recommendations.",
    },
    {
      eyebrow: "SAFE & GRADUAL PACING",
      title: "Zero Bot Footprint",
      description: "Manual, human delivery adhering strictly to subreddit rules and community norms.",
    },
  ],
  popularSubreddits: [
    "r/SaaS",
    "r/startups",
    "r/technology",
    "r/marketing",
    "r/entrepreneur",
    "r/webdev",
    "r/artificial",
    "r/productivity",
    "r/smallbusiness",
    "r/fintech",
    "r/ecommerce",
    "r/growth",
  ],
  brandCard: {
    title: "I want to grow my brand",
    description: "Posts, comments, comment replies, and natural engagement in high-intent subreddits.",
    cta: "Hire Convolift",
  },
  earnerCard: {
    title: "I want to earn money",
    description: "Complete simple Reddit tasks with your genuine account and get paid per approved task.",
    cta: "Start Earning",
  },
  trustLine: "Real accounts • Relevant subreddits • Fast delivery",
};

export const trustBarStats = [
  { value: "500+", label: "threads boosted" },
  { value: "50+", label: "brands served" },
  { value: "100+", label: "subreddits covered" },
  { value: "24h", label: "average delivery" },
];

export const brandServices: ServiceItem[] = [
  {
    id: "reddit-posts",
    title: "Reddit Posts",
    shortBenefit: "Thoughtful discussion threads crafted specifically for target subreddits.",
    iconName: "MessageSquare",
    features: [
      "Custom hook and native community tone",
      "Strict compliance with subreddit rules",
      "Published by aged, karma-rich accounts",
      "Live thread link provided immediately",
    ],
  },
  {
    id: "reddit-comments",
    title: "Comments",
    shortBenefit: "Contextual brand recommendations in active, top-ranking threads.",
    iconName: "MessagesSquare",
    features: [
      "Natural placement in high-intent discussions",
      "Direct answers to buyer recommendation queries",
      "Permanent placement with organic longevity",
      "No spammy links or promotional tone",
    ],
  },
  {
    id: "comment-replies",
    title: "Comment Replies",
    shortBenefit: "Conversational replies that back up discussions and build social proof.",
    iconName: "CornerDownRight",
    features: [
      "Organic agreement and personal experience share",
      "Deepens thread engagement and credibility",
      "Placed by distinct genuine community accounts",
      "Reinforces primary brand recommendations",
    ],
  },
  {
    id: "upvotes",
    title: "Upvote",
    shortBenefit: "Boost your posts and comments with natural, organic upvotes from genuine Reddit users.",
    iconName: "ArrowBigUp",
    features: [
      "Natural and gradual delivery pacing",
      "Real aged accounts with organic karma",
      "Higher community upvote and interaction signals",
      "Comprehensive performance and link report",
    ],
  },
];

export const earnerConfig = {
  badge: "Earn With Convolift",
  headline: "Turn your Reddit activity into income",
  subheadline:
    "Brands give us marketing tasks. You complete them using your genuine Reddit account and get paid per approved task.",
  disclaimer: "Payouts depend on task type and approval. No guaranteed income.",
  badgeNoFee: "No joining fee. We never ask Reddit users to pay.",
  tasks: [
    {
      title: "Write a Post",
      description: "Create or share an engaging, subreddit-compliant discussion post following a simple brand brief.",
      avgTime: "10-15 mins",
      iconName: "FileEdit",
    },
    {
      title: "Write a Comment",
      description: "Answer a relevant question or share a thoughtful insight mentioning the brand naturally.",
      avgTime: "3-5 mins",
      iconName: "MessageCircle",
    },
    {
      title: "Reply to a Comment",
      description: "Join an ongoing discussion by replying to an existing comment with genuine value.",
      avgTime: "2-4 mins",
      iconName: "CornerDownRight",
    },
    {
      title: "Engage in a Thread",
      description: "Participate in active conversations to keep discussions engaging and lively.",
      avgTime: "5 mins",
      iconName: "TrendingUp",
    },
  ] as EarnerTask[],
  fourStepFlow: [
    {
      step: "01",
      title: "Apply with Reddit profile",
      description: "Submit your Reddit username, account age, and karma for quick verification.",
    },
    {
      step: "02",
      title: "Complete a short test task",
      description: "Show that you can write natural, helpful English or Hindi responses without sounding robotic.",
    },
    {
      step: "03",
      title: "Receive tasks via WhatsApp / Telegram",
      description: "Get notified when new tasks matching your subreddits and interests become available.",
    },
    {
      step: "04",
      title: "Get paid after approval",
      description: "Fast payouts directly to your preferred method: UPI, PayPal, or Direct Bank Transfer.",
    },
  ],
  requirements: [
    "Active, genuine Reddit account with clean posting history",
    "Minimum 3+ months account age and 300+ organic karma",
    "Fluent English or Hindi conversational writing ability",
    "Strictly follow subreddit rules and community etiquette",
    "Zero tolerance for automated bots, spam, or multiple alt accounts",
  ],
};

export const howItWorksConfig = {
  headline: "Simple, Transparent Process for Everyone",
  subheadline: "Whether you are looking to amplify your brand or earn from your Reddit expertise, here is how Convolift works.",
  brandSteps: [
    {
      number: "01",
      title: "Share your goal",
      description: "Tell us about your product, target audience, ideal customer profile, and campaign budget.",
    },
    {
      number: "02",
      title: "We match the right subreddits",
      description: "Our strategists identify high-intent subreddits where your buyers are asking for recommendations.",
    },
    {
      number: "03",
      title: "Tasks completed by real accounts",
      description: "Vetted community members post authentic threads, comments, and replies with gradual delivery.",
    },
    {
      number: "04",
      title: "You get live links and a report",
      description: "Track live conversation URLs, comment visibility, and discussion traction in a transparent report.",
    },
  ],
  earnerSteps: [
    {
      number: "01",
      title: "Apply in 2 minutes",
      description: "Fill out the simple application with your Reddit username and preferred payment method.",
    },
    {
      number: "02",
      title: "Pass a brief test",
      description: "Complete a quick sample comment to demonstrate quality tone and rule adherence.",
    },
    {
      number: "03",
      title: "Receive daily tasks",
      description: "Get matched with paid tasks on subreddits you already browse and understand.",
    },
    {
      number: "04",
      title: "Get paid per task",
      description: "Receive fast, hassle-free payouts via UPI, PayPal, or Bank Transfer upon task approval.",
    },
  ],
};

export const whyConvoliftPoints = [
  {
    title: "Real Aged Accounts",
    description: "Every task is completed by genuine Reddit users with organic karma history — never fresh or throwaway profiles.",
    iconName: "ShieldCheck",
  },
  {
    title: "Relevant Subreddits Only",
    description: "We pinpoint niche communities where your prospective buyers actively seek solutions and alternatives.",
    iconName: "Target",
  },
  {
    title: "100% Human-Written Content",
    description: "Natural, engaging comments and discussions tailored to each subreddit's unique culture and unspoken norms.",
    iconName: "PenTool",
  },
  {
    title: "Safe & Gradual Delivery",
    description: "Submissions are spaced naturally across days and time zones to protect subreddits and maintain authenticity.",
    iconName: "Clock",
  },
  {
    title: "Transparent Reporting",
    description: "Every client receives verified live links, upvote metrics, and screenshot proof of all completed placements.",
    iconName: "FileCheck2",
  },
  {
    title: "Fast, Dedicated Support",
    description: "Direct assistance via WhatsApp, Telegram, and Email for both brand clients and Reddit users.",
    iconName: "Headphones",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$199",
    period: "per campaign",
    description: "Ideal for early-stage startups and indie makers testing Reddit visibility.",
    features: [
      "3 Strategic Discussion Posts",
      "8 Contextual In-Thread Comments",
      "5 Supporting Comment Replies",
      "Targeting 2-3 relevant subreddits",
      "Gradual 5-day delivery pacing",
      "Full live links report",
    ],
    ctaText: "Order Starter",
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most Popular",
    price: "$449",
    period: "per campaign",
    description: "Designed for scaling brands aiming for consistent social proof in active subreddits.",
    features: [
      "8 Strategic Discussion Posts",
      "22 Contextual In-Thread Comments",
      "15 Supporting Comment Replies",
      "Targeting 5-8 niche subreddits",
      "Natural conversation coordination",
      "Paced over 10-14 days",
      "Dedicated campaign strategist",
      "Full live links & sentiment report",
    ],
    ctaText: "Order Growth",
    popular: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$899",
    period: "per campaign",
    description: "High-impact presence across multiple subreddits for high-growth SaaS and brands.",
    features: [
      "18 Strategic Discussion Posts",
      "50 Contextual In-Thread Comments",
      "35 Supporting Comment Replies",
      "Coverage across 12+ subreddits",
      "Continuous brand mention monitoring",
      "Phased 30-day natural schedule",
      "Priority account manager",
      "Comprehensive weekly analytics",
    ],
    ctaText: "Order Pro",
  },
  {
    id: "custom",
    name: "Custom Enterprise",
    price: "Custom",
    period: "flexible",
    description: "Tailored monthly engagement packages for agencies and venture-backed companies.",
    features: [
      "Unlimited custom deliverables",
      "Bespoke subreddit discovery & intelligence",
      "AI & LLM brand search optimization support",
      "Custom payout terms & SLA",
      "White-label agency reports available",
      "Dedicated Slack / WhatsApp channel",
    ],
    ctaText: "Contact for Custom",
  },
];

export const resultsCaseStudies: CaseStudy[] = [
  {
    brandCategory: "B2B AI Productivity SaaS",
    title: "Ranked in top 5 recommendations across r/productivity & r/SaaS",
    metricNumber: "+340%",
    metricLabel: "increase in organic referral traffic",
    summary:
      "Placed 14 thoughtful comments answering direct workflow comparison queries over 3 weeks. Comments permanently rank in Google search results for software recommendation queries.",
    subredditsSample: "r/productivity, r/SaaS, r/startups",
  },
  {
    brandCategory: "D2C Ergonomic Workspace Tool",
    title: "Organic word-of-mouth discussion in specialized hardware communities",
    metricNumber: "12,000+",
    metricLabel: "organic discussion impressions",
    summary:
      "Aged Reddit community members started genuine review threads comparing desk accessories. The discussion reached top-of-week ranking with 90+ genuine organic comments from peers.",
    subredditsSample: "r/workstations, r/WFH, r/Battlestations",
  },
  {
    brandCategory: "Developer Tool / API",
    title: "Natural developer recommendations for modern stack migrations",
    metricNumber: "48+",
    metricLabel: "qualified free trial signups",
    summary:
      "Engaged in technical Reddit discussions around database scaling and API rate limiting, providing helpful benchmarks and open solutions that referenced the brand naturally.",
    subredditsSample: "r/webdev, r/reactjs, r/devops",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    name: "Marcus Vance",
    role: "Head of Growth",
    company: "Flowstack SaaS",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    content:
      "Convolift helped us break into high-intent subreddits without feeling like an aggressive ad. The comments were thoughtful, native to each subreddit, and brought in real customers who still convert today.",
    audience: "brand",
  },
  {
    name: "Priya Sharma",
    role: "Reddit Earner (120+ tasks)",
    company: "Reddit Community Member",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80",
    content:
      "I browse Reddit daily anyway. Convolift gives me straightforward tasks in subreddits I know well. Payouts arrive directly via UPI on time with no fees whatsoever.",
    audience: "earner",
  },
  {
    name: "Alex Thorne",
    role: "Founder",
    company: "NomadHQ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    content:
      "The best part is that every account used had real karma and posting history. No flags, no bans, just genuine conversations that gave our launch initial momentum.",
    audience: "brand",
  },
];

export const faqData = {
  brands: [
    {
      question: "Is Reddit marketing with Convolift safe for my brand?",
      answer:
        "Yes. We avoid bots, automated tools, and spammy link dropping. All tasks are completed manually by genuine, aged Reddit accounts with history in relevant communities, adhering strictly to each subreddit's unique guidelines.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "Most campaigns begin within 24 hours of brief confirmation. We deliver tasks gradually over 5 to 14 days rather than all at once to ensure conversations flow naturally and avoid suspicious spikes.",
    },
    {
      question: "Which subreddits do you cover?",
      answer:
        "Our network spans over 100+ major and niche subreddits across Technology, SaaS, Finance, Crypto, E-commerce, Lifestyle, Gaming, Productivity, and Entrepreneurship.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "If a scheduled post or comment is removed by moderators within 48 hours of publication, our team will replace it at no additional cost or issue a prorated credit.",
    },
    {
      question: "How do I pay for brand services?",
      answer:
        "We accept all major credit cards, Stripe, PayPal, Wire Transfer, and UPI. Invoices with tax receipts are provided for all business orders.",
    },
  ] as FAQItem[],
  earners: [
    {
      question: "How do I get paid?",
      answer:
        "We support multiple convenient payout options including UPI (for Indian residents), PayPal (international), and Direct Bank Transfer. You choose your preferred method in your profile.",
    },
    {
      question: "When do I get paid?",
      answer:
        "Payouts are processed weekly or on request once your completed tasks have been reviewed and approved by our quality team.",
    },
    {
      question: "Do I need to buy an account from Convolift?",
      answer:
        "No, absolutely not. You use your own existing, genuine Reddit account. We never sell accounts or ask Reddit users to purchase anything.",
    },
    {
      question: "Is there any joining or registration fee?",
      answer:
        "Zero. Joining Convolift is 100% free. We never ask Reddit users to pay any application fee, deposit, or verification charge.",
    },
    {
      question: "What are the rules I must follow?",
      answer:
        "You must follow the brief carefully, write in good natural language, obey subreddit rules, avoid spamming, and never use bots or multiple duplicate accounts. Honest, high-quality participation is our standard.",
    },
  ] as FAQItem[],
};
