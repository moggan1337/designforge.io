# DesignForge.io

> AI-powered design system generator. Describe your product, get production-ready code.

![DesignForge](https://img.shields.io/badge/DesignForge-AI%20Design-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Project Structure](#project-structure)
- [Design System Components](#design-system-components)
  - [Buttons](#buttons)
  - [Cards](#cards)
  - [Forms](#forms)
  - [Navigation](#navigation)
  - [Typography](#typography)
- [Usage Examples](#usage-examples)
  - [Basic Usage](#basic-usage)
  - [Custom Theming](#custom-theming)
  - [Dark Mode](#dark-mode)
  - [Component Composition](#component-composition)
- [Theming and Customization](#theming-and-customization)
  - [CSS Variables](#css-variables)
  - [Color Palette](#color-palette)
  - [Spacing System](#spacing-system)
  - [Typography Scale](#typography-scale)
- [Configuration](#configuration)
  - [Tailwind Config](#tailwind-config)
  - [Next.js Config](#nextjs-config)
  - [PostCSS Config](#postcss-config)
- [Performance Considerations](#performance-considerations)
  - [Bundle Size](#bundle-size)
  - [Font Loading](#font-loading)
  - [Image Optimization](#image-optimization)
  - [Code Splitting](#code-splitting)
- [Deployment](#deployment)
  - [Vercel](#vercel)
  - [Docker](#docker)
  - [Static Export](#static-export)
- [Troubleshooting](#troubleshooting)
  - [Common Issues](#common-issues)
  - [FAQ](#faq)
  - [Getting Help](#getting-help)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

DesignForge.io is an AI-powered design system generator that enables developers to create complete, production-ready design systems in seconds. By simply describing your product, target audience, and aesthetic preferences, DesignForge leverages artificial intelligence to generate a comprehensive design system tailored to your needs.

### What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It includes:

- **Design Tokens**: Colors, typography, spacing, and other fundamental values
- **Components**: Reusable UI elements like buttons, cards, forms, and navigation
- **Patterns**: Common UI patterns and best practices
- **Documentation**: Guidelines for usage and implementation

### Why Use DesignForge?

- **Speed**: Generate complete design systems in seconds, not days
- **Consistency**: Ensure visual consistency across your entire application
- **Production-Ready**: Output code that is ready for production use
- **Customizable**: Every generated system is fully customizable
- **Multi-Framework**: Export to React, Vue, HTML, or plain CSS

### Key Benefits

1. **AI-Powered Intelligence**: Our AI understands design principles and applies best practices automatically
2. **Developer-First Approach**: Output is optimized for developer experience
3. **Modern Tech Stack**: Built with the latest and most popular tools
4. **Accessible by Default**: All components follow WCAG accessibility guidelines
5. **Dark Mode Ready**: Automatic dark mode implementation

---

## Features

### Core Features

- **AI-Powered Generation**
  - Describe your product and get a complete design system
  - Intelligent color palette generation based on your brand
  - Typography recommendations based on your industry
  - Spacing and layout recommendations

- **Tailwind Config Export**
  - Custom colors with semantic naming
  - Custom fonts integration
  - Spacing scale configuration
  - Border radius and shadows
  - Animation utilities

- **shadcn/ui Components**
  - Production-ready React components
  - Accessible by default (ARIA compliant)
  - Fully typed with TypeScript
  - Composable and customizable

- **CSS Variables**
  - Easy theming with custom properties
  - Runtime theme switching
  - Dark mode support
  - CSS-only option available

- **Dark Mode Ready**
  - Automatic dark mode detection
  - Manual toggle option
  - Smooth transitions
  - System preference sync

- **Multi-Framework Export**
  - React / Next.js (primary)
  - Vue support (coming soon)
  - HTML / CSS (universal)
  - Design tokens (JSON)

### Additional Features

- **Live Preview**: See your design system in action
- **Code Export**: Copy-paste ready code snippets
- **Design Tokens**: JSON export for design tools
- **Component Library**: 50+ pre-built components
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Minimal bundle size

---

## Tech Stack

DesignForge is built with modern, battle-tested technologies:

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14+ | React framework with App Router |
| React | 19+ | UI library |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | 4+ | Utility-first CSS |
| Framer Motion | 12+ | Animations |

### Supporting Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Phosphor Icons | 2.1+ | Icon library |
| Geist Fonts | Latest | Typography |
| class-variance-authority | 0.7+ | Component variants |
| clsx | 2.1+ | Conditional classes |
| tailwind-merge | 3.5+ | Tailwind class merging |

### Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Code linting |
| TypeScript | Type checking |
| PostCSS | CSS processing |

---

## Getting Started

This section will guide you through setting up DesignForge locally on your machine.

### Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (version 18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** or **pnpm** or **yarn**
   - npm comes with Node.js
   - Verify: `npm --version` or `pnpm --version`

3. **Git** (optional but recommended)
   - For version control
   - Verify: `git --version`

### Installation

Follow these steps to install and set up DesignForge:

```bash
# Step 1: Clone the repository
git clone https://github.com/your-username/designforge.io.git

# Step 2: Navigate to the project directory
cd designforge.io

# Step 3: Install dependencies
npm install

# If using pnpm:
pnpm install

# If using yarn:
yarn install
```

#### Understanding the Installation Process

When you run `npm install`, the following happens:

1. npm reads the `package.json` file
2. It resolves all dependencies from npm registry
3. It downloads and installs packages to `node_modules/`
4. It creates a `package-lock.json` for reproducible builds

### Development Server

Start the development server to preview DesignForge:

```bash
# Start the development server
npm run dev

# The server will start at http://localhost:3000
```

#### Development Server Options

```bash
# Specify a custom port
npm run dev -- --port 3001

# Start with Turbopack (faster builds)
npm run dev -- --turbopack

# Start with environment variables
PORT=8080 npm run dev
```

#### Hot Module Replacement

Next.js includes Hot Module Replacement (HMR), which means:

- Changes to code are reflected immediately
- The application state is preserved when possible
- No full page reload is required for most changes

### Production Build

Build the application for production:

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run start
```

#### Build Output

The build process creates:

- **`.next/` directory**: Contains production build artifacts
- **Chunked JavaScript**: Optimized and code-split
- **Static assets**: Images, fonts, and other files
- **HTML files**: Pre-rendered pages (SSG)

---

## Project Structure

Understanding the project structure helps you navigate and modify the codebase:

```
designforge.io/
├── public/                  # Static assets
│   ├── images/             # Static images
│   └── favicon.ico         # Site favicon
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   └── components/         # React components (if added)
├── .git/                   # Git repository
├── .gitignore             # Git ignore rules
├── .next/                 # Build output
├── node_modules/          # Dependencies
├── package.json          # Project metadata
├── tsconfig.json         # TypeScript config
├── next.config.ts        # Next.js config
├── postcss.config.mjs    # PostCSS config
├── eslint.config.mjs    # ESLint config
└── README.md            # This file
```

### Key Directories

- **`src/app/`**: Next.js App Router directory
  - Contains pages, layouts, and API routes
  - File-based routing
  - Server and client components

- **`public/`**: Static files served directly
  - Images, fonts, and other assets
  - Copied to the build output as-is

- **`src/app/globals.css`**: Global stylesheet
  - CSS variables definitions
  - Base styles and resets
  - Tailwind directives

---

## Design System Components

DesignForge provides a comprehensive set of UI components built with accessibility and customization in mind.

### Buttons

Buttons are fundamental interactive elements. DesignForge includes multiple button variants:

#### Button Variants

```tsx
// Primary Button - Main actions
<button className="btn-primary">
  Get Started
</button>

// Secondary Button - Alternative actions
<button className="btn-secondary">
  Learn More
</button>

// Ghost Button - Subtle actions
<button className="btn-ghost">
  Cancel
</button>

// Icon Button - Compact actions
<button className="btn-icon">
  <CloseIcon />
</button>
```

#### Button Sizes

```tsx
// Small button
<button className="btn-sm">Small</button>

// Medium button (default)
<button className="btn-md">Medium</button>

// Large button
<button className="btn-lg">Large</button>
```

#### Button States

```tsx
// Disabled state
<button className="btn-primary" disabled>
  Disabled
</button>

// Loading state
<button className="btn-primary" disabled>
  <SpinnerIcon /> Loading...
</button>

// With icon
<button className="btn-primary">
  <ArrowRightIcon /> Continue
</button>
```

#### Button Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | 'primary' \| 'secondary' \| 'ghost' | 'primary' | Visual style |
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Size of button |
| `disabled` | boolean | false | Disable interactions |
| `loading` | boolean | false | Show loading state |
| `fullWidth` | boolean | false | Full width button |

### Cards

Cards are container components for grouping related content:

#### Basic Card

```tsx
<div className="card">
  <h3 className="card-title">Card Title</h3>
  <p className="card-content">
    This is the card content area where you can place any content.
  </p>
</div>
```

#### Card with Header and Footer

```tsx
<div className="card">
  <div className="card-header">
    <h3>Featured Component</h3>
  </div>
  <div className="card-body">
    <p>Main content goes here with full styling support.</p>
  </div>
  <div className="card-footer">
    <button className="btn-primary btn-sm">Action</button>
  </div>
</div>
```

#### Interactive Card

```tsx
<div className="card-interactive hover:scale-[1.02]">
  <h3>Hover Me</h3>
  <p>This card has hover effects</p>
</div>
```

### Forms

Form components for collecting user input:

#### Input Field

```tsx
<div className="form-group">
  <label htmlFor="email" className="form-label">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    className="form-input"
    placeholder="you@example.com"
  />
</div>
```

#### Textarea

```tsx
<div className="form-group">
  <label htmlFor="message" className="form-label">
    Message
  </label>
  <textarea
    id="message"
    className="form-textarea"
    rows={4}
    placeholder="Enter your message..."
  />
</div>
```

#### Select Dropdown

```tsx
<div className="form-group">
  <label htmlFor="plan" className="form-label">
    Plan
  </label>
  <select id="plan" className="form-select">
    <option value="free">Free</option>
    <option value="pro">Pro</option>
    <option value="team">Team</option>
  </select>
</div>
```

#### Checkbox

```tsx
<div className="form-checkbox">
  <input type="checkbox" id="terms" />
  <label htmlFor="terms">
    I agree to the terms and conditions
  </label>
</div>
```

#### Form Validation

```tsx
<div className="form-group">
  <label htmlFor="password" className="form-label">
    Password
  </label>
  <input
    id="password"
    type="password"
    className="form-input form-input-error"
  />
  <span className="form-error">
    Password must be at least 8 characters
  </span>
</div>
```

### Navigation

Navigation components for app structure:

#### Top Navigation Bar

```tsx
<nav className="navbar">
  <div className="navbar-brand">
    <Logo />
    <span>DesignForge</span>
  </div>
  <div className="navbar-links">
    <a href="/features">Features</a>
    <a href="/pricing">Pricing</a>
    <a href="/docs">Docs</a>
  </div>
  <div className="navbar-actions">
    <button className="btn-secondary">Sign In</button>
    <button className="btn-primary">Get Started</button>
  </div>
</nav>
```

#### Mobile Navigation

```tsx
const [isOpen, setIsOpen] = useState(false);

<nav className="mobile-navbar">
  <button onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <CloseIcon /> : <MenuIcon />}
  </button>
  {isOpen && (
    <div className="mobile-menu">
      <a href="/features">Features</a>
      <a href="/pricing">Pricing</a>
      <a href="/docs">Docs</a>
    </div>
  )}
</nav>
```

### Typography

Text styling components:

#### Headings

```tsx
<h1 className="text-6xl font-bold">Heading 1</h1>
<h2 className="text-5xl font-bold">Heading 2</h2>
<h3 className="text-4xl font-bold">Heading 3</h3>
<h4 className="text-3xl font-bold">Heading 4</h4>
<h5 className="text-2xl font-bold">Heading 5</h5>
<h6 className="text-xl font-bold">Heading 6</h6>
```

#### Body Text

```tsx
<p className="text-base">
  Regular paragraph text with normal line height.
</p>

<p className="text-lg">
  Large paragraph text for emphasis.
</p>

<p className="text-sm text-muted">
  Small, muted text for secondary information.
</p>
```

#### Code Text

```tsx
<pre className="code-block">
  <code>const greeting = "Hello, World!";</code>
</pre>
```

---

## Usage Examples

### Basic Usage

Import and use components in your React application:

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function ExamplePage() {
  return (
    <div className="container">
      <Card>
        <h1>Welcome to DesignForge</h1>
        <Input
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Card>
    </div>
  );
}
```

### Custom Theming

Override default styles with custom theming:

```tsx
// Using CSS variables
<div
  style={{
    '--primary': '#6366f1',
    '--accent': '#ec4899',
    '--radius': '12px',
  }}
>
  <Button>Custom Themed</Button>
</div>

// Using Tailwind classes
<div className="[--primary:#6366f1]">
  <Button>Custom Themed</Button>
</div>
```

### Dark Mode

Implement dark mode in your application:

```tsx
// Automatic dark mode based on system preference
<html lang="en" className="dark">
  <body>...</body>
</html>

// Manual toggle
const [darkMode, setDarkMode] = useState(false);

<html lang="en" className={darkMode ? 'dark' : ''}>
  <body>...</body>
</html>

<button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? 'Light Mode' : 'Dark Mode'}
</button>
```

### Component Composition

Build complex UIs by composing components:

```tsx
// Example: Custom Card Component
function PricingCard({ title, price, features }) {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <CardHeader>
        <h3 className="text-2xl font-bold">{title}</h3>
      </CardHeader>
      <CardBody>
        <div className="text-4xl font-bold mb-4">
          {price}
          <span className="text-base text-muted">/mo</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckIcon className="text-success" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter>
        <Button variant="primary" fullWidth>
          Choose {title}
        </Button>
      </CardFooter>
    </Card>
  );
}

// Usage
<PricingCard
  title="Pro"
  price="$19"
  features={['Unlimited projects', 'Priority support']}
/>
```

---

## Theming and Customization

### CSS Variables

DesignForge uses CSS custom properties for theming. Define these in your global CSS:

```css
:root {
  /* Primary Colors */
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --primary-muted: rgba(99, 102, 241, 0.1);

  /* Accent Colors */
  --accent: #ec4899;
  --accent-hover: #db2777;

  /* Semantic Colors */
  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;

  /* Text Colors */
  --text-primary: #09090b;
  --text-secondary: #71717a;
  --text-muted: #a1a1aa;

  /* Background Colors */
  --background: #ffffff;
  --surface: #f4f4f5;
  --surface-hover: #e4e4e7;

  /* Border Colors */
  --border: #e4e4e7;
  --border-hover: #d4d4d8;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

### Color Palette

The default color palette:

| Name | Hex | Usage |
|------|-----|-------|
| Primary | #6366f1 | Main brand color, buttons, links |
| Accent | #ec4899 | Highlights, badges, accents |
| Success | #22c55e | Success states, positive actions |
| Warning | #f59e0b | Warnings, attention states |
| Error | #ef4444 | Errors, destructive actions |
| Info | #3b82f6 | Information, neutral actions |

### Spacing System

DesignForge follows an 8px base grid:

| Token | Value | CSS Variable |
|-------|-------|--------------|
| xs | 4px | --space-xs |
| sm | 8px | --space-sm |
| md | 16px | --space-md |
| lg | 24px | --space-lg |
| xl | 32px | --space-xl |
| 2xl | 48px | --space-2xl |
| 3xl | 64px | --space-3xl |

### Typography Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| h1 | 3rem (48px) | 700 | 1.1 |
| h2 | 2.25rem (36px) | 700 | 1.2 |
| h3 | 1.5rem (24px) | 600 | 1.3 |
| h4 | 1.25rem (20px) | 600 | 1.4 |
| h5 | 1rem (16px) | 500 | 1.5 |
| body | 1rem (16px) | 400 | 1.6 |
| small | 0.875rem (14px) | 400 | 1.5 |
| xs | 0.75rem (12px) | 400 | 1.5 |

---

## Configuration

### Tailwind Config

Configure Tailwind CSS for your project:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          muted: 'var(--primary-muted)',
        },
        accent: 'var(--accent)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
};
```

### Next.js Config

Configure Next.js settings:

```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Image optimization domains
  images: {
    domains: ['images.unsplash.com', 'picsum.photos'],
  },

  // Experimental features
  experimental: {
    // Enable server actions
    serverActions: true,
  },
};

module.exports = nextConfig;
```

### PostCSS Config

PostCSS configuration for Tailwind CSS v4:

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

---

## Performance Considerations

### Bundle Size

DesignForge is optimized for minimal bundle size:

- **Tree-shaking**: Unused code is automatically removed
- **Code splitting**: Pages load only necessary code
- **Lazy loading**: Components load on demand
- **Compression**: Gzip/Brotli compression enabled

#### Bundle Analysis

Analyze your bundle to identify optimization opportunities:

```bash
# Install bundle analyzer
npm install @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
```

### Font Loading

Fonts are optimized for performance:

```tsx
// In layout.tsx
import { Geist } from 'next/font/google';

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap', // Font swap for faster text display
  preload: true,
});

export default function Layout({ children }) {
  return (
    <html className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### Image Optimization

Use Next.js Image component for automatic optimization:

```tsx
import Image from 'next/image';

export function OptimizedImage() {
  return (
    <Image
      src="/image.jpg"
      alt="Description"
      width={800}
      height={600}
      placeholder="blur" // LQIP for fast perceived load
      priority // Load above fold images first
    />
  );
}
```

### Code Splitting

Next.js automatically splits code by route:

```tsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable SSR if needed
});
```

---

## Deployment

### Vercel

Deploy to Vercel with zero configuration:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Vercel Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Docker

Deploy using Docker:

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:

```bash
# Build image
docker build -t designforge .

# Run container
docker run -p 3000:3000 designforge
```

### Static Export

Export as static HTML for any hosting:

```ts
// next.config.ts
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

```bash
npm run build
# Output in /out directory
```

---

## Troubleshooting

### Common Issues

#### Issue: `Cannot find module 'tailwindcss'`

**Solution:**
```bash
npm install tailwindcss
```

#### Issue: CSS not updating in development

**Solution:**
1. Clear browser cache
2. Restart development server
3. Check for syntax errors in CSS

#### Issue: Font not loading

**Solution:**
```tsx
// Ensure font is properly configured in layout.tsx
import { Geist } from 'next/font/google';

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
});
```

#### Issue: Dark mode not working

**Solution:**
```tsx
// Check HTML class
<html lang="en" className={isDark ? 'dark' : ''}>

// Ensure CSS variables are defined for both modes
:root { /* light mode vars */ }
.dark { /* dark mode vars */ }
```

#### Issue: TypeScript errors with components

**Solution:**
```bash
# Install type definitions
npm install -D @types/react @types/react-dom
```

### FAQ

**Q: Can I use DesignForge with Next.js 13?**
A: Yes, DesignForge supports Next.js 13+ with both Pages and App Router.

**Q: Is DesignForge compatible with Tailwind CSS v3?**
A: Yes, but some configuration may differ. See Tailwind v4 migration guide.

**Q: Can I export to Vue or Angular?**
A: Currently React/Next.js is primary. Vue support is in development.

**Q: How do I add custom fonts?**
A: Add font files to `/public/fonts/` and define in CSS with `@font-face`.

**Q: Is dark mode supported out of the box?**
A: Yes, dark mode is implemented using CSS variables and class-based switching.

**Q: Can I use DesignForge components with Redux?**
A: Yes, components are framework-agnostic and work with any state management.

**Q: How do I customize component variants?**
A: Use class-variance-authority (CVA) or override CSS classes directly.

### Getting Help

If you encounter issues not covered here:

1. **Check the Issues**: Search existing GitHub issues
2. **Documentation**: Review component documentation
3. **Discord**: Join our community Discord
4. **Email**: Contact support@designforge.io

---

## Contributing

Contributions are welcome! Please follow these guidelines:

### Development Setup

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/your-username/designforge.io.git

# Create a feature branch
git checkout -b feature/your-feature-name

# Install dependencies
npm install

# Start development server
npm run dev
```

### Code Style

- Use TypeScript for all new code
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request
6. Wait for review

### Commit Message Format

```
type(scope): description

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Refactoring
- test: Testing
- chore: Maintenance
```

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright (c) 2024 DesignForge. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Acknowledgments

DesignForge is built with the following amazing open-source projects:

- **[Next.js](https://nextjs.org/)** - The React Framework
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
- **[Phosphor Icons](https://phosphoricons.com/)** - A flexible icon family
- **[Geist Fonts](https://vercel.com/font)** - Beautiful typography
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types

### Design Principles

DesignForge is built following these principles:

- **Taste**: 3-dial design system for premium aesthetics
- **Impeccable**: 18 design commands for consistent UI
- **Frontend Design**: Anthropic-powered design intelligence

### Special Thanks

- All contributors who have helped improve DesignForge
- The open-source community for making this possible
- Our users for their feedback and support

---

<div align="center">

**Built with ❤️ by the DesignForge team**

[Website](https://designforge.io) • [Documentation](https://docs.designforge.io) • [Discord](https://discord.gg/designforge) • [Twitter](https://twitter.com/designforge)

</div>
