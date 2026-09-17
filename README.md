# Laura Portfolio

A responsive personal portfolio website built with React and Chakra UI. It presents a short introduction, project highlights, social links, and a professional footer in a single-page layout.

## Overview

This project is a personal portfolio for Laura, designed to showcase:

- a hero/landing section with profile image and bio
- social media/contact links in the fixed header
- a featured projects section with project cards
- smooth in-page navigation to the projects area
- a mobile-friendly responsive layout
- a dark theme with modern UI styling

## Features

- Fixed header with quick access to social profiles and the Projects section
- Smooth-scroll navigation using anchor links
- Scroll-based header hide/show effect
- Responsive project card grid for desktop and smaller screens
- Accessibility-friendly links and semantic section structure
- Deployment setup for GitHub Pages

## Tech Stack

- React 18
- Create React App
- Chakra UI
- Font Awesome icons
- CSS for custom page styling

## Project Structure

```text
src/
├── App.js
├── App.css
├── components/
│   ├── Card.js
│   ├── Footer.js
│   ├── FullScreenSection.js
│   ├── Header.js
│   ├── LandingSection.js
│   └── ProjectsSection.js
├── images/
├── index.css
├── index.js
└── setupTests.js
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the app in development mode:

```bash
npm start
```

3. Open the app in your browser at:

```text
http://localhost:3000
```

## Production Build

To generate a production build:

```bash
npm run build
```

## Deployment

This app is configured for GitHub Pages deployment.

To publish the build:

```bash
npm run deploy
```

The project includes the required `homepage` field and deploy script in `package.json`.

## Notes

The portfolio content is currently tailored to Laura's profile and includes project examples such as:

- Online Scheduling Tool
- Commerce
- Network
- Restaurant website

Each card links to its corresponding GitHub repository so visitors can review the source code for individual projects.