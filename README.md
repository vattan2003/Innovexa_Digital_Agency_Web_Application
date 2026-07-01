This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


1. Project Goals

• Present the agency brand with a visually compelling hero section.
• Showcase four core services in an interactive card grid.
• Display real portfolio projects with technology details and live links.
• Provide a functional contact form with client-side validation.
• Ensure consistent navigation through a shared Navbar component.


2. Technology Stack / Technology Version

Next.js 14 (App Router) React framework & file-based routing
React 18+ UI component library
Tailwind CSS 3.x Utility-first styling
React Icons fa (FontAwesome) Icon set for service cards
next/image Built-in Optimised image rendering
next/link Built-in Client-side navigation
Vercel Deployment platform Hosting & CI/CD


3.  Component-Based Architecture

The application follows React's component-based architecture, where the UI is broken into small, independent, and reusable pieces. Each component manages its own markup and, where required, its own local state, and is composed together inside page files.

•	Navbar.jsx — persistent navigation bar rendered once in the root layout.
•	Services.jsx — displays the agency's service offerings using a mapped  data array.
•	Portfolio.jsx — displays company info and a project showcase grid.
•	Contact.jsx — a client-side interactive form component with local state.
•	page.js (Home) — composes the hero section and call-to-action buttons.
•	layout.js — the root layout that wraps every page with shared UI (Navbar) and global styles/fonts.


4. Key Responsibilities
•	Defines page metadata (title, description) for SEO.
•	Applies global font variables using CSS custom properties.
•	Persistently renders <Navbar /> above the {children} route content.


5. Styling Approach

The project uses a hybrid styling strategy:
• Tailwind CSS utility classes for layout, spacing, responsiveness, grid    systems, and hover/transition effects.
•	Inline JavaScript style objects for section-specific styling such as backgrounds, precise typography, and one-off component styles (e.g. inputStyle, buttonStyle in Contact.jsx).
•	A consistent dark theme (bg-slate-950) with cyan (#22d3ee) accent highlights is used throughout Portfolio and Services to create a modern, agency-style aesthetic.
•	Glassmorphism effects (backdrop-blur, translucent white borders) are used on cards across the Services and Portfolio sections for visual consistency.


6. Future Enhancements

•	Connect the Contact form to a real backend (Next.js API route, EmailJS, or Formspree) to actually deliver messages.
•	Replace remaining <img> tags with the Next.js <Image /> component for automatic optimization.
•	Add form-level inline error messages instead of browser alert() calls.
•	Introduce a shared Footer component for consistency across all pages.
•	Add SEO metadata (Open Graph tags, per-page titles) for each route.
•	Add unit tests for the Contact form's validation logic.


7. Conclusion

The Innovexa Digital Agency website demonstrates a practical, component-based implementation of a modern marketing site using Next.js 14. The project cleanly separates concerns across Navbar, Home, Services, Portfolio, and Contact components, uses the App Router for intuitive file-based routing, and combines Tailwind CSS with targeted inline styling to deliver a polished, responsive, dark-themed UI. With the suggested enhancements — particularly backend integration for the contact form — the project is well positioned to move from a front-end showcase to a fully production-ready application.

