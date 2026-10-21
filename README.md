# HP.dev — Developer Portfolio

A personal developer portfolio that showcases my projects, tech stack, resume and contact links. Built with plain HTML, CSS and JavaScript, with no frameworks or build tools.

**Live site:** https://hpdevportfo.netlify.app
**Repository:** https://github.com/JerrySanjay/Task1.git

## Features

- **Dark and light theme toggle.** A button in the header switches the theme by toggling a `dark-mode` class on the page.
- **Smooth scrolling navigation.** The sticky header links, the "See my projects" button and the "Get in touch" button all scroll smoothly to their sections.
- **Project cards with a details popup.** Each project has a "View Details" button that opens a modal. It closes with the × button, by clicking outside it, or by pressing Escape.
- **Tech stack section** laid out with CSS Grid in four categories: Languages, Frontend, Backend and Tools. It switches to 2 columns at 768px and 1 column at 480px.
- **Resume section** with a timeline of experience, education and certification, plus a download button.
- **Contact section** with email and social links.
- **Sticky header** that stays visible while scrolling.

## Tech stack

| Area | Tools |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox, CSS Grid, media queries, transitions) |
| Behaviour | Vanilla JavaScript (DOM manipulation, `scrollIntoView`, event listeners) |
| Font | Poppins (Google Fonts) |
| Hosting | GitHub Pages / Netlify / Vercel |

## Project structure

```
portfolio/
├── index.html    # page structure and content
├── style.css     # layout, theme and component styles
├── script.js     # theme toggle, smooth scroll buttons, project modal
├── Images/       # favicon and images
└── README.md
```

## Run locally

1. Clone the repo:
   ```bash
   git clone https://github.com/JerrySanjay/Task1.git
   cd portfolio
   ```
2. Open `index.html` in a browser, or use the VS Code **Live Server** extension.

## How it works

- **Theme toggle:** `script.js` toggles the `dark-mode` class on `<body>`. The CSS has matching `.dark-mode` rules that change the colors, and the button icon switches between ☾ and ☀.
- **Smooth scrolling:** `scroll-behavior: smooth` on `html` handles the nav links, and `scrollIntoView({ behavior: "smooth" })` handles the hero buttons.
- **Project modal:** each "View Details" button stores its text in `data-title` and `data-description` attributes. JavaScript reads them, fills the modal and adds a `show` class to display it.

## Deployment

**GitHub Pages:** Settings → Pages → Deploy from a branch → `main` / root.
**Netlify:** drag and drop the folder at app.netlify.com/drop.
**Vercel:** import the GitHub repo and click Deploy.

## Future improvements

- Make the full layout responsive on small screens and finish the mobile menu.
- Save the chosen theme with `localStorage`.
- Add real links to the project code, live demos and social profiles.
- Add a downloadable resume PDF.

## Author

**Hariprasath**
GitHub: [@JerrySanjay](https://github.com/JerrySanjay/Task1.git) · LinkedIn: [your-username](linkedin.com/in/hariprasath-s-585a8430a) · Email: hariprasathhp2812@gmail.com