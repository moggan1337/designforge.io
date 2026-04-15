# DesignForge.io

> AI-powered design system generator for developers.

## Concept

DesignForge generates complete design systems from natural language descriptions. 
Users describe their product → AI creates Tailwind config, shadcn components, CSS variables.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS v4
- Phosphor Icons
- Geist font

## Design

Uses taste + impeccable skills for premium aesthetics:
- Dark theme (#0a0a0f) with coral accent (#ff6b35)
- Glass morphism effects
- Custom CSS animations (float, pulse-glow, fade-up)
- No Inter, no purple gradients

## Project Structure

```
src/app/
├── page.tsx      # Landing page (all sections)
├── layout.tsx   # Root layout with metadata
└── globals.css   # Design system + animations

components/       # To be added
├── Hero.tsx
├── Features.tsx
├── Demo.tsx
└── ...
```

## Sections

1. **Hero** - Animated code preview, CTA buttons
2. **How It Works** - 3-step process cards
3. **Features** - 6 feature cards with icons
4. **Demo** - Interactive prompt → output
5. **Testimonials** - 3 developer quotes
6. **Pricing** - Free/Pro/Team tiers
7. **FAQ** - Accordion with 5 questions
8. **CTA** - Final conversion section
9. **Footer** - Links + social

## Next Steps

1. Add real AI generation (Connect to Claude API)
2. Create API route for design generation
3. Add user authentication
4. Build dashboard for saved designs
5. Add export functionality
6. Add Stripe for payments
7. Deploy to Vercel

## Commands

```bash
npm run dev     # Development
npm run build   # Production build
npm run start   # Production server
```
