# Rustify Download

Official download landing page for **[Rustify](https://github.com/Ilay-dev/Rustify)** — a native, pure Rust local music player for Windows 10/11 featuring a Monochrome Liquid Glass UI, AI DJ Automix, `-14 LUFS` loudness normalization, 5-band real-time EQ, synchronized lyrics, and an FFT AudioVisualizer.

## Features

- **Monochrome Liquid Glass Design** — obsidian `#050507` palette, specular glass cards, architectural grid overlay, zero neon clutter
- **Automatic Language Detection (`DE` / `EN`)** — detects `navigator.language` on load with an instant manual `DE / EN` toggle
- **Live GitHub Release Integration** — automatically fetches version tag, installer size, and direct `Rustify-Setup.exe` download URL from `Ilay-dev/Rustify` releases (with offline fallback)
- **Responsive & Accessible** — mobile-first layout (`360px` to `1440px+`), hardware-accelerated scroll reveal animations, and `prefers-reduced-motion` support
- **GitHub Pages Ready** — preconfigured Vite `base: '/Rustify-Download/'` and GitHub Actions deployment workflow

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## License

MIT — Built by [Ilay-dev](https://github.com/Ilay-dev).
