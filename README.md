# Ferrari SF90 Stradale — Immersive Scroll Showcase

A high-performance, cinematic, scroll-driven web experience inspired by the engineering precision of the Ferrari SF90 Stradale.

**Live Demo:**
[https://ferrarisf90-stradle.netlify.app/](https://ferrarisf90-stradle.netlify.app/)

---

## Overview

This project recreates the feeling of a luxury automotive launch website using modern frontend technologies.

The experience is built around a scroll-controlled animation system that synchronizes motion, content transitions, and UI overlays to create a seamless storytelling flow.

The goal is to deliver a hypercar-level digital experience with production-ready architecture and performance-focused implementation.

---

## Key Features

### Scroll-Based Cinematic Experience

* Phase-based scroll transitions
* Section-aware animation orchestration
* Smooth motion powered by Framer Motion

### Performance Optimized

* Built with Next.js App Router
* Optimized asset loading
* Minimal re-renders
* Smooth 60fps animation focus

### Fully Responsive

* Adaptive layout for mobile & desktop
* Optimized typography scaling
* Fluid spacing system using Tailwind CSS

### Centralized Data Architecture

* Modular car data configuration
* Dynamic specification rendering
* Clean separation of content and presentation

---

## Tech Stack

| Technology      | Purpose               |
| --------------- | --------------------- |
| Next.js (React) | Framework and Routing |
| Tailwind CSS    | Styling and Layout    |
| Framer Motion   | Animation Engine      |
| Netlify         | Deployment            |

---

## Project Structure

```
/app
  ├── layout.tsx
  ├── page.tsx

/components
  ├── Navbar.tsx
  ├── SF90Experience.tsx
  ├── SectionBlocks/

data
  ├── carData.ts

/public
  ├── images/
  ├── icons/
```

Architecture principles:

* Component-driven structure
* Data abstraction
* Animation isolation
* Scalable folder organization

---

## Local Development

```bash
git clone https://github.com/codebrak07/ferrarisf90-stradle.git
cd ferrarisf90-stradle
npm install
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## Author

codebrak07

Frontend Developer focused on immersive, high-performance web experiences.
