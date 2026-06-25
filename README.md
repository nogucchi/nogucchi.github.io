# Bem vindo ao repo do meu portfólio!

Esse é meu portfólio pessoal como UI/UX Designer e Desenvolvedora Front-End. Uma single-page application com informações sobre, olha só, eu! Objetivo desse portfólio é mostrar um pouco o que faço e para outras pessoas me conhecerem também!

## Stack

| Tecnologia                                            | Uso                                |
| ----------------------------------------------------- | ---------------------------------- |
| [SvelteKit 2](https://svelte.dev/docs/kit) + Svelte 5 | Framework principal (SSG/SPA)      |
| TypeScript                                            | Tipagem estática em todo o projeto |
| Tailwind CSS v4                                       | Estilização via utilitários        |
| tailwind-variants                                     | Variantes de componentes           |
| mode-watcher                                          | Tema claro/escuro                  |

## Funcionalidades

- **Tema claro/escuro** — alternância persistida no sistema operacional
- **Internacionalização** — PT-BR e EN, com solução própria sem dependências externas
- **Animações** — fade-in ao entrar na viewport com IntersectionObserver e outras em cards para deixar o site mais vivo :)!
- **Design responsivo** — layout adaptado para mobile, tablet e desktop

## Estrutura

```
src/
├── lib/
│   ├── actions/        # use:reveal, use:clickOutside
│   ├── components/
│   │   ├── sections/   # Hero, About, Projects, Contact
│   │   └── shared/     # Button, Chip, Select, SectionTitle, Header...
│   ├── i18n/           # t(key) + translations/en.json, pt-br.json
│   └── icons/          # Re-exports de @iconify-svelte/lucide e mdi
└── routes/
    ├── app.css         # Tokens de design (@theme), dark mode, animações
    └── +page.svelte    # Página principal — une as 4 seções
```

## Contato

- GitHub: [nogucchi](https://github.com/nogucchi)
- LinkedIn: [mariana-noguti](https://www.linkedin.com/in/mariana-noguti/)
- Email: [mahnoguti@gmail.com](mailto:mahnoguti@gmail.com)
