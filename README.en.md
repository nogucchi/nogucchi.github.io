# Welcome to my portfolio repo!

This is my personal portfolio as a UI/UX Designer and Front-End Developer. A single-page application with information about, well, me! The goal of this portfolio is to show a bit of what I do and let other people get to know me too!

## Stack

| Technology                                            | Usage                                |
| ----------------------------------------------------- | ------------------------------------ |
| [SvelteKit 2](https://svelte.dev/docs/kit) + Svelte 5 | Main framework (SSG/SPA)             |
| TypeScript                                            | Static typing throughout the project |
| Tailwind CSS v4                                       | Utility-first styling                |
| tailwind-variants                                     | Component variant logic              |
| mode-watcher                                          | Light/dark theme                     |

## Features

- **Light/dark theme** — toggle persisted to the operating system preference
- **Internationalization** — PT-BR and EN, with a custom zero-dependency solution
- **Animations** — fade-in on viewport entry with IntersectionObserver and card animations to keep the site lively :)!
- **Responsive design** — layout adapted for mobile, tablet and desktop

## Structure

```
src/
├── lib/
│   ├── actions/        # use:reveal, use:clickOutside
│   ├── components/
│   │   ├── sections/   # Hero, About, Projects, Contact
│   │   └── shared/     # Button, Chip, Select, SectionTitle, Header...
│   ├── i18n/           # t(key) + translations/en.json, pt-br.json
│   └── icons/          # Re-exports from @iconify-svelte/lucide and mdi
└── routes/
    ├── app.css         # Design tokens (@theme), dark mode, animations
    └── +page.svelte    # Main page — brings all 4 sections together
```

## Contact

- GitHub: [nogucchi](https://github.com/nogucchi)
- LinkedIn: [mariana-noguti](https://www.linkedin.com/in/mariana-noguti/)
- Email: [mahnoguti@gmail.com](mailto:mahnoguti@gmail.com)
