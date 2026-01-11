# Fridenmaker Painting Website

A modern, professional website for Fridenmaker Painting - a fourth-generation luxury residential painting company in Seattle.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS v4** for styling
- **React Router** for client-side routing
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fridenmaker-painting
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment template (if using external APIs):
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
fridenmaker-painting/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Pages

- **Home** - Hero section, features, services preview, testimonials, CTA
- **About** - Company history, fourth-generation story, timeline, values, team
- **Services** - Detailed service offerings with features and process
- **Portfolio** - Filterable gallery of completed projects
- **Contact** - Contact form, company info, FAQs

## Customization

### Colors

The color palette is defined in `src/index.css`:

- `cream` (#FAF9F6) - Background color
- `charcoal` (#2C3E50) - Text color
- `navy` (#1B2838) - Primary brand color
- `gold` (#C9A962) - Accent color
- `sage` (#87A878) - Secondary accent
- `warm-gray` (#6B7B8C) - Muted text

### Fonts

- **Inter** - Body text
- **Playfair Display** - Headings

Fonts are loaded from Google Fonts in `index.html`.

### Images

The site uses Unsplash placeholder images. Replace these with actual project photos by updating the image URLs in the page components.

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to Vercel

1. Import your repository to Vercel
2. Vercel will auto-detect Vite settings

## Environment Variables

Create a `.env` file based on `.env.example` for any API integrations.

## Form Handling

The contact form currently logs to console. For production, integrate with:

- **Formspree** - Simple form backend
- **Netlify Forms** - If hosting on Netlify
- **SendGrid/Mailgun** - Custom email service

## License

Private - All rights reserved.

---

Built with care for Fridenmaker Painting.
