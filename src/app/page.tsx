'use client';

import { useState } from 'react';
import { 
  Lightning,
  Palette,
  Code,
  Export,
  Check,
  Copy,
  Play,
  ArrowRight,
  Sparkle,
  Stack,
  Moon,
  Sun,
  Monitor,
  FileCode,
  CaretDown,
  X,
  List
} from '@phosphor-icons/react';

const AnimatedSection = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <div className={`animate-fade-up ${className}`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[var(--accent)] to-[#ff9f6b] flex items-center justify-center">
            <Sparkle size={18} weight="fill" className="text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold">DesignForge</span>
        </a>
        
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="#demo" className="hidden sm:block btn-primary text-xs sm:text-sm py-2 px-3 sm:py-2 sm:px-4">
            Try Demo
          </a>
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden glass border-t border-[var(--border)] px-4 py-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block py-3 text-[var(--text-secondary)]" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#demo" className="block mt-3 btn-primary text-center text-sm py-2 px-4" onClick={() => setIsOpen(false)}>
            Try Demo
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 sm:opacity-30" />
      <div className="absolute inset-0 radial-gradient" />
      
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-[var(--accent)] rounded-full opacity-10 blur-[80px] sm:blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-purple-500 rounded-full opacity-10 blur-[60px] sm:blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
          <span className="text-xs sm:text-sm text-[var(--text-secondary)]">Now in public beta</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight stagger-children">
          Your design system,
          <br />
          <span className="gradient-text">AI-generated in seconds</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2 stagger-children">
          Describe your product. Get a complete design system with Tailwind config, 
          shadcn components, CSS variables, and a live preview.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 stagger-children">
          <button className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
            Start Building Free
            <ArrowRight size={18} weight="bold" />
          </button>
          <button className="btn-secondary flex items-center justify-center gap-2 text-sm px-6 py-3 w-full sm:w-auto">
            <Play size={18} weight="fill" />
            Watch Demo
          </button>
        </div>
        
        <div className="relative max-w-full sm:max-w-4xl mx-auto px-2">
          <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-6 glow animate-pulse-glow">
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-[var(--text-muted)]">design-system.json</span>
            </div>
            <pre className="code-block text-xs sm:text-sm overflow-x-auto">
              <code>
                {`// Your design system`}
                <br />
                {`{ "name": "Minimal SaaS",`}
                <br />
                {`  "colors": { "primary": "#6366f1" },`}
                <br />
                {`  "components": ["Button", "Card", ...]`}
                <br />
                {`}`}
              </code>
            </pre>
          </div>
          
          <div className="absolute -left-2 sm:-left-4 top-1/4 glass rounded-lg sm:rounded-xl p-2 sm:p-3 animate-float hidden sm:block">
            <div className="flex items-center gap-2">
              <Palette size={16} className="text-[var(--accent)]" />
              <span className="text-xs">Tailwind Ready</span>
            </div>
          </div>
          <div className="absolute -right-2 sm:-right-4 top-1/3 glass rounded-lg sm:rounded-xl p-2 sm:p-3 animate-float hidden sm:block" style={{ animationDelay: '-2s' }}>
            <div className="flex items-center gap-2">
              <Stack size={16} className="text-[#22c55e]" />
              <span className="text-xs">50+ Components</span>
            </div>
          </div>
        </div>
      </div>
      
      <CaretDown className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)] animate-bounce hidden sm:block" size={28} />
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { number: '01', title: 'Describe', description: 'Tell us about your product, target audience, and the vibe.', icon: Sparkle },
    { number: '02', title: 'Generate', description: 'AI creates your complete design system.', icon: Lightning },
    { number: '03', title: 'Export', description: 'Download as Tailwind config, components, or CSS.', icon: Export },
  ];
  
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--surface)] to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Three steps to your design system
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            From idea to production-ready design in under a minute
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 150}>
              <div className="card h-full relative">
                <div className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[var(--border)] absolute -top-2 sm:-top-4 -left-1 sm:-left-2">
                  {step.number}
                </div>
                <div className="relative pt-8 sm:pt-12">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[var(--accent-muted)] flex items-center justify-center mb-4 sm:mb-6">
                    <step.icon size={24} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)]">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Code, title: 'Tailwind Config', description: 'Complete Tailwind configuration with your custom colors and spacing.' },
    { icon: Stack, title: 'shadcn/ui Components', description: 'Production-ready components with your custom theme.' },
    { icon: Palette, title: 'CSS Variables', description: 'Clean CSS custom properties for easy theming.' },
    { icon: Moon, title: 'Dark Mode Ready', description: 'Automatic dark mode implementation.' },
    { icon: Monitor, title: 'Responsive Design', description: 'Mobile-first approach with working breakpoints.' },
    { icon: FileCode, title: 'Multi-Framework Export', description: 'Export for React, Vue, HTML, or plain CSS.' },
  ];
  
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <span className="text-[var(--accent)] font-medium mb-3 sm:mb-4 block text-sm">FEATURES</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Everything you need
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-xl sm:max-w-2xl mx-auto px-2">
            A complete design system at your fingertips.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 100}>
              <div className="card h-full group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[var(--accent-muted)] flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon size={22} className="text-[var(--accent)]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)]">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demo() {
  const [prompt, setPrompt] = useState('A modern SaaS dashboard for a fintech startup, targeting developers. Clean, professional, with dark mode.');
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setGenerated(true); }, 2000);
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(`const config = ${JSON.stringify({ name: "Fintech Dashboard", colors: { primary: "#6366f1" } }, null, 2)}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <section id="demo" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--surface)] to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[var(--accent)] font-medium mb-3 sm:mb-4 block text-sm">LIVE DEMO</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Try it yourself
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            Describe your product and see the magic happen
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatedSection delay={0}>
            <div className="card h-full">
              <label className="block text-sm font-medium mb-2 sm:mb-3">Describe your product</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-32 sm:h-40 lg:h-48 bg-[var(--background)] border border-[var(--border)] rounded-xl p-3 sm:p-4 text-[var(--text-primary)] resize-none focus:border-[var(--accent)] focus:outline-none transition-colors text-sm sm:text-base"
                placeholder="A modern landing page for..."
              />
              <button onClick={handleGenerate} disabled={loading} className="btn-primary w-full mt-3 sm:mt-4 flex items-center justify-center gap-2 text-sm sm:text-base py-3 sm:py-4">
                {loading ? (
                  <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Generating...</>
                ) : (
                  <><Sparkle size={18} weight="fill" />Generate Design System</>
                )}
              </button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={150}>
            <div className="card h-full">
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <label className="text-sm font-medium">Generated Output</label>
                {generated && (
                  <button onClick={handleCopy} className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1 transition-colors">
                    {copied ? <Check size={14} className="text-[var(--success)]" /> : <Copy size={14} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                )}
              </div>
              <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-3 sm:p-4 h-32 sm:h-40 lg:h-48 overflow-auto">
                {generated ? (
                  <pre className="text-xs sm:text-sm font-mono">
                    <code className="text-[var(--text-secondary)]">
                      {`// design-system.ts`}
                      <br />
                      {`export const theme = {`}
                      <br />
                      {`  name: "Fintech Dashboard",`}
                      <br />
                      {`  colors: { primary: "#6366f1" }`}
                      <br />
                      {`}`}
                    </code>
                  </pre>
                ) : (
                  <div className="h-full flex items-center justify-center text-[var(--text-muted)] text-sm">
                    Your design system will appear here
                  </div>
                )}
              </div>
              {generated && (
                <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
                  <button className="btn-secondary flex-1 text-xs sm:text-sm py-2 sm:py-3 flex items-center justify-center gap-1 sm:gap-2">
                    <Export size={16} /> Export
                  </button>
                  <button className="btn-primary flex-1 text-xs sm:text-sm py-2 sm:py-3 flex items-center justify-center gap-1 sm:gap-2">
                    <Lightning size={16} weight="fill" /> Download
                  </button>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { quote: "DesignForge saved me hours every week. I can generate a complete design system in seconds.", name: "Sarah Chen", role: "CTO at BuildStack", avatar: "SC" },
    { quote: "Finally, a tool that understands developers. The output is clean and production-ready.", name: "Marcus Johnson", role: "Lead Developer at TechFlow", avatar: "MJ" },
    { quote: "The quality blew me away. It's like having a designer on demand.", name: "Elena Rodriguez", role: "Founder at DesignHub", avatar: "ER" },
  ];
  
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[var(--accent)] font-medium mb-3 sm:mb-4 block text-sm">TESTIMONIALS</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Loved by developers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 100}>
              <div className="card h-full flex flex-col">
                <div className="text-3xl sm:text-4xl text-[var(--accent)] mb-3 sm:mb-4">"</div>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] flex-1 mb-4 sm:mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[#ff9f6b] flex items-center justify-center font-bold text-sm sm:text-base">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">{t.name}</div>
                    <div className="text-xs sm:text-sm text-[var(--text-muted)]">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: 'Free', price: '$0', period: 'forever', description: 'Perfect for trying out', features: ['3 generations/month', 'Basic components', 'CSS variables export', 'Community support'], cta: 'Get Started', popular: false },
    { name: 'Pro', price: '$19', period: '/mo', description: 'For indie developers', features: ['Unlimited generations', 'All components', 'Tailwind + shadcn export', 'Dark mode support', 'Priority support', 'API access'], cta: 'Start Free Trial', popular: true },
    { name: 'Team', price: '$49', period: '/mo', description: 'For teams & agencies', features: ['Everything in Pro', '5 team seats', 'Shared design systems', 'Version history', 'Custom branding', 'Dedicated support'], cta: 'Contact Sales', popular: false },
  ];
  
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--surface)] to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[var(--accent)] font-medium mb-3 sm:mb-4 block text-sm">PRICING</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            Start free, upgrade when you need more
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan) => (
            <AnimatedSection key={plan.name}>
              <div className={`card relative h-full ${plan.popular ? 'border-[var(--accent)] glow' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 sm:py-1.5 bg-[var(--accent)] rounded-full text-xs sm:text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{plan.name}</h3>
                  <div className="text-3xl sm:text-4xl font-bold">
                    {plan.price}<span className="text-base sm:text-lg text-[var(--text-muted)]">{plan.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 sm:mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check size={18} className="text-[var(--success)] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full text-sm sm:text-base py-2 sm:py-3 ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.cta}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    { question: 'How does the AI generate design systems?', answer: 'Our AI analyzes your product description and uses advanced pattern recognition trained on thousands of successful design systems.' },
    { question: 'What frameworks are supported?', answer: 'Currently React/Next.js with Tailwind CSS and shadcn/ui. Vue and HTML/CSS exports coming soon.' },
    { question: 'Can I customize the output?', answer: 'Absolutely! Every design system is fully customizable. Tweak colors, spacing, typography directly.' },
    { question: 'Is there a free trial for Pro?', answer: 'Yes! 14 days of free Pro access when you sign up. No credit card required.' },
    { question: 'What happens if I cancel?', answer: 'Your design systems are always yours. Export and keep all your work anytime.' },
  ];
  
  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[var(--accent)] font-medium mb-3 sm:mb-4 block text-sm">FAQ</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Questions? Answers.
          </h2>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 50}>
              <div className="card p-0 overflow-hidden">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full p-4 sm:p-6 text-left flex items-center justify-between">
                  <span className="font-bold text-sm sm:text-base pr-4">{faq.question}</span>
                  <CaretDown size={20} className={`flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-[var(--text-secondary)]">
                    {faq.answer}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 radial-gradient opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-[var(--accent)] rounded-full opacity-10 blur-[100px] sm:blur-[150px]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Ready to build your design system?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto">
          Join thousands of developers who ship faster with DesignForge. No credit card required.
        </p>
        <button className="btn-primary text-sm sm:text-base lg:text-lg px-8 sm:px-10 py-3 sm:py-4">
          Start Building Free
          <ArrowRight size={18} weight="bold" className="ml-2" />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  const links = {
    Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
    Resources: ['Documentation', 'Blog', 'Tutorials', 'API'],
    Company: ['About', 'Careers', 'Press', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  };
  
  return (
    <footer className="py-12 sm:py-16 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[var(--accent)] to-[#ff9f6b] flex items-center justify-center">
                <Sparkle size={18} weight="fill" className="text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">DesignForge</span>
            </a>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              AI-powered design systems for developers.
            </p>
          </div>
          
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="hidden sm:block">
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            © 2024 DesignForge. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="noise">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Features />
      <Demo />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
