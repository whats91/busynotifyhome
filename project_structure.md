# BusyNotify Project Overview

**Name:** BusyNotify  
**Description:** A payment reminder and business automation platform  
**Framework:** Next.js 13.5.1 with App Router  
**Styling:** Tailwind CSS with shadcn/ui components  
**Build Output:** Static Export (configured in `next.config.js`)

## File Structure
```
├── app/
│   ├── about/
│   │   └── page.tsx           # About page with company info and team
│   ├── careers/
│   │   └── page.tsx           # Careers page with application form
│   ├── contact/
│   │   └── page.tsx           # Contact page with business info
│   ├── features/
│   │   └── page.tsx           # Features showcase page
│   ├── payment-flow/
│   │   └── page.tsx           # Payment reminder flow visualization
│   ├── pricing/
│   │   └── page.tsx           # Pricing plans and packages
│   ├── globals.css            # Global styles and animations
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Homepage
│   ├── robots.ts              # SEO robots configuration
│   └── sitemap.ts             # SEO sitemap configuration
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   └── [various].tsx      # Individual UI components
│   └── footer.tsx             # Global footer component
├── lib/
│   └── utils.ts               # Utility functions
├── public/
│   └── manifest.json          # PWA manifest
├── .eslintrc.json            # ESLint configuration
├── components.json           # shadcn/ui configuration
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Key Features
1. Modern UI with glassmorphism effects  
2. Responsive design across all pages  
3. Interactive animations and transitions  
4. SEO optimization with metadata  
5. Form handling with validation  
6. API integration for form submissions  
7. PWA support with manifest  

## Tech Stack
- React 18.2.0  
- Next.js 13.5.1  
- TypeScript 5.2.2  
- Tailwind CSS 3.3.3  
- Lucide React (for icons)  
- shadcn/ui components  
- Various Radix UI primitives  

## Performance Optimizations
- Static site export  
- Image optimization  
- Font optimization with `next/font`  
- Tailwind JIT compiler  
- CSS animations with reduced motion support  

## SEO Features
- Dynamic metadata  
- Structured data  
- Robots.txt configuration  
- XML sitemap  
- OpenGraph tags  
- Twitter cards  

## Best Practices Followed
- "use client" directives for client components  
- TypeScript for type safety  
- Component-based architecture  
- Consistent styling patterns  
- Accessibility considerations  
- SEO optimization  
- Performance optimizations  

---