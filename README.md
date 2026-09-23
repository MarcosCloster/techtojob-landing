# TechToJob

🚀 **Project Objective**
TechToJob is not a traditional job board; it is an active community. In a conventional job portal, you send your resume into the void and disappear among hundreds of candidates. Here, you are inside, you build things, participate in tournaments, and prove your value before a formal vacancy even opens.
This landing page serves as the main gateway to communicate the value proposition to both developers and tech companies in Spanish.

🛠️ **Tech Stack**
The project is built using modern technologies focused on performance, accessibility, and scalability:

- **Framework:** Next.js (App Router) with TypeScript and Tailwind CSS.
- **Internationalization (i18n):** `next-intl` with dynamic and structured support for Spanish (`es`) and English (`en`).
- **Visual Identity:**
  - **Typography:** Sora (Google Fonts).
  - **Official Palette:**
    - Background/Dark: `#2f3436`
    - Accent/Primary: `#84c0bf`
    - White/Base: `#ffffff`
- **Icons:** Tabler Icons under MIT license.

📂 **Architecture and Component Structure**
The repository maintains a clean, modular organization, separating business logic, landing views, and multi-language assets:

```text
├── public/                  # Static assets and adaptive vector favicon
├── messages/                # JSON translation files (es.json, en.json)
└── src/
    └── app/
        └── [locale]/        # Dynamic routes with i18n support
            ├── layout.tsx   # Global metadata, SEO (OpenGraph, Twitter Card, JSON-LD)
            └── page.tsx     # Main landing page composition
    └── components/          # Independent modular components
        ├── Navbar.tsx       # Advanced mobile menu with scroll lock and blur effect
        ├── Hero.tsx         # Main visual entry point
        ├── HowItWorks.tsx   # Step-by-step explanatory journey
        ├── Talent.tsx       # Value proposition for developers
        ├── Companies.tsx    # Value proposition for companies
        ├── Tournaments.tsx  # Open competitive challenges
        ├── CommunitySection.tsx # Sector networking channels
        ├── Testimonials.tsx # Social proof cards
        ├── News.tsx         # News and articles list
        ├── JoinSection.tsx  # Closing Call to Action
        └── Footer.tsx       # Dynamic links mapped from JSON
```

✨ **Key Technical Features**
- **Advanced Mobile Menu (`Navbar.tsx`):**
  - Implementation of a floating menu with absolute positioning, clear visual separators, and a backdrop blur overlay (`backdrop-blur-sm bg-black/20`).
  - Automated body scroll locking when the mobile menu is open to prevent unwanted layout shifts.
- **Dynamic Internationalization System (`Footer & next-intl`):**
  - Refactoring of the footer and key components to dynamically map structured JSON objects.
  - Fixes for React reconciliation bugs using positional keys (`colIndex`, `linkIndex`) in loops, ensuring smooth language transitions without rendering errors.
- **Adaptive Favicon (Dark/Light Mode):**
  - Migration to an SVG vector design (`favicon.svg`) with integrated media queries (`prefers-color-scheme`), allowing the icon to automatically change color based on the user's system preferences.
- **Strict Accessibility and SEO Compliance:**
  - WCAG standards implemented with semantic tags (`header`, `nav`, `main`, `section`, `article`, `footer`, `button`, `a`).
  - Security attributes on external links (`target="_blank"`, `rel="noopener noreferrer"`).
  - Global metadata optimized using Next.js Metadata API, OpenGraph, Twitter Cards, and Organization JSON-LD structured data.

📈 **Performance and Lighthouse Testing**
The project has been optimized to exceed rigorous performance, accessibility, and best practices standards:

- **Success Scores:** Outstanding ratings from 96 up to 100 in Performance, Accessibility, Best Practices, and SEO metrics (both desktop and mobile versions).
- **Local Verification:** Validation of clean and optimized builds using production commands.

⚙️ **Installation and Local Setup**
Follow these steps to clone and run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MarcosCloster/techtojob-landing.git
   cd techtojob-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run in development mode:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Generate production build:**
   ```bash
   npm run build
   npm run start
   ```

📝 **Commit History (Conventional Commits)**
The project maintains a clean and structured version control history in English:

- `feat(navbar): lock body scroll when mobile menu is open`
- `fix(footer): use array index for keys to allow correct translation re-render`
- `i18n(footer): add English translation for footer json`
- `feat(seo): configure metadata, OpenGraph, and adaptive SVG favicon`
- `refactor(logo): optimize Next.js Image component and Tailwind styles`

📄 **License and Attributions**
Developed for TechToJob Tournament #2.

- **Official Typography:** Sora (Google Fonts)
- **Icons:** Tabler Icons
- **AI:** Gemini