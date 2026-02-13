# Hoskbrew Web Project Guidelines

## Mission

Create a visually stunning, high-performance landing page and multi-page website for **Hoskbrew**, a retro-gaming hardware and homebrew support company.

## Visual Identity

- **Style**: "Retro-Modern Fusion". Clean, modern layouts (grid/flex) with retro gaming aesthetics (pixel art accents, scanlines, CRT effects, bold 8-bit colors).
- **Typography**:
  - **Body/UI**: Inter (Clean, modern, readable).
  - **Headings/Accents**: Pixel/Retro font (e.g., Pixelify Sans, Press Start 2P) - _To be added_.
- **Assets**:
  - Logos: Full range of "Hoskbrew" logos (Stacked, Horizontal, Raised).
  - Mascot: Octopus.
  - Imagery: Cartridges, manuals, hardware (to be sourced/mocked based on descriptions).

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Language**: TypeScript
- **State Management**: React Context / Zustand (if needed)

## Core Pages

1.  **Home**: Hero (Mascot/Flagship Product), Services Overview, Featured Projects (Crystal Mines).
2.  **Services**: Manufacturing, Design, QA, Fulfillment.
3.  **Products**: Crystal Mines, Cartridges, PCBs.
4.  **RetroNomicon**: Indie dev quarterly promotion.
5.  **About**: Mission, Team, "Maker" ethos.
6.  **Contact**: Inquiry forms for manufacturing/publishing.

## Development Principles

- **Visual First**: Every component must look "designed". No default HTML styles.
- **Responsive**: Mobile-first, but desktop needs to shine (hover effects are key).
- **Interactive**: Scroll animations, hover states, micro-interactions.
- **Performance**: Optimize images, use variable fonts.

## File Structure

- `public/assets`: Raw images and fonts.
- `src/components`: Reusable UI components.
- `src/app`: Next.js pages.
- `src/styles`: Global styles and Tailwind config.
