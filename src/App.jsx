import React, { useEffect, useRef, useState } from 'react';
import { translations } from './translations';

const REPO_URL = 'https://github.com/Ilay-dev/Rustify';
const AUTHOR_URL = 'https://github.com/Ilay-dev';
const RELEASES_URL = 'https://github.com/Ilay-dev/Rustify/releases';
const LATEST_RELEASE_API = 'https://api.github.com/repos/Ilay-dev/Rustify/releases/latest';

const DEFAULT_VERSION = 'v1.4.0';

const FALLBACK_ASSETS = {
  windows: {
    name: 'Rustify-Setup.exe',
    url: 'https://github.com/Ilay-dev/Rustify/releases/latest/download/Rustify-Setup.exe',
    size: '~14 MB',
  },
  deb: {
    name: 'rustify_1.4.0_amd64.deb',
    url: 'https://github.com/Ilay-dev/Rustify/releases/latest/download/rustify_1.4.0_amd64.deb',
    size: '~10 MB',
  },
  arch: {
    name: 'rustify-1.4.0-1-x86_64.pkg.tar.zst',
    url: 'https://github.com/Ilay-dev/Rustify/releases/latest/download/rustify-1.4.0-1-x86_64.pkg.tar.zst',
    size: '~10 MB',
  },
  tarball: {
    name: 'rustify-1.4.0-linux-x86_64.tar.gz',
    url: 'https://github.com/Ilay-dev/Rustify/releases/latest/download/rustify-1.4.0-linux-x86_64.tar.gz',
    size: '~10 MB',
  },
};

const EXT_RELEASE_API = 'https://api.github.com/repos/Ilay-dev/r-audio-pkg/releases/latest';
const EXT_FALLBACK_ASSETS = {
  windows: {
    name: 'Rustify-Setup.exe',
    url: 'https://github.com/Ilay-dev/r-audio-pkg/releases/latest/download/Rustify-Setup.exe',
    size: '~14 MB',
  },
  mint: {
    name: 'rustify-private_1.4.0_amd64.deb',
    url: 'https://github.com/Ilay-dev/r-audio-pkg/releases/latest/download/rustify-private_1.4.0_amd64.deb',
    size: '~15 MB',
  },
  arch: {
    name: 'rustify-1.4.0-1-x86_64.pkg.tar.zst',
    url: 'https://github.com/Ilay-dev/r-audio-pkg/releases/latest/download/rustify-1.4.0-1-x86_64.pkg.tar.zst',
    size: '~17 MB',
  },
};

const DISTRO_KEYS = ['arch', 'ubuntu', 'mint', 'tarball'];

const BASE = import.meta.env.BASE_URL;

function detectBrowserLanguage() {
  if (typeof navigator === 'undefined') return 'en';
  const candidates =
    Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language || 'en'];
  const primary = String(candidates[0] || 'en').toLowerCase();
  return primary.startsWith('de') ? 'de' : 'en';
}

function detectInitialPlatform() {
  if (typeof navigator === 'undefined') return 'windows';
  const ua = String(navigator.userAgent || '').toLowerCase();
  const plat = String(navigator.platform || '').toLowerCase();
  if ((ua.includes('linux') || plat.includes('linux')) && !ua.includes('android')) {
    return 'linux';
  }
  return 'windows';
}

function formatBytesToMB(bytes, fallback = '~14 MB') {
  if (!bytes || Number.isNaN(bytes) || bytes <= 0) return fallback;
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

function resolveAsset(asset, fallback) {
  if (!asset || !asset.browser_download_url) return fallback;
  return {
    name: typeof asset.name === 'string' && asset.name.trim() ? asset.name.trim() : fallback.name,
    url: asset.browser_download_url,
    size: formatBytesToMB(asset.size, fallback.size),
  };
}

/* Lightweight hardware-accelerated scroll reveal */
function Reveal({ children, delay = 0, className = '', as: Component = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

/* Top viewport scroll progress indicator */
function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const update = () => {
      rafId = null;
      const bar = barRef.current;
      if (!bar) return;
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div ref={barRef} className="scroll-progress-bar" style={{ transform: 'scaleX(0)' }} />
    </div>
  );
}

/* Crisp inline SVG icons (zero external dependencies) */
function DownloadIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

function GitHubIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.08 11.08 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function WindowsIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5.55 10.65 4.5v7.05H3V5.55Zm8.65-1.19L21 3v8.55h-9.35V4.36ZM3 12.55h7.65v7.05L3 18.55v-6Zm8.65 0H21V21l-9.35-1.36v-7.09Z" />
    </svg>
  );
}

function TerminalIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function CopyIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChevronDownIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ArrowUpRightIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function KeyboardIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2.5" />
      <path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M18 13h.01M9 13h6" />
    </svg>
  );
}

function CpuIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  );
}

function FeatureIcon({ id }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (id) {
    case 'rust-ui':
      return (
        <svg {...props}>
          <path d="M13 2 4 14h7l-1 8 10-12h-7l0-8Z" />
        </svg>
      );
    case 'lufs':
      return (
        <svg {...props}>
          <path d="M3 12h3l2-6 4 12 3-8 2 2h4" />
        </svg>
      );
    case 'eq':
      return (
        <svg {...props}>
          <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" />
          <path d="M2 14h4M10 8h4M18 16h4" />
        </svg>
      );
    case 'automix':
      return (
        <svg {...props}>
          <circle cx="8" cy="12" r="5" />
          <circle cx="16" cy="12" r="5" />
          <circle cx="8" cy="12" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'lyrics':
      return (
        <svg {...props}>
          <path d="M4 7h12M4 12h16M4 17h9" />
          <path d="M18 15v5a2 2 0 1 1-1.5-1.93V14l4-1v2" />
        </svg>
      );
    case 'visualizer':
      return (
        <svg {...props}>
          <path d="M4 18v-4M8 18V8M12 18V5M16 18v-8M20 18v-3" />
        </svg>
      );
    case 'discord':
      return (
        <svg {...props}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
        </svg>
      );
    case 'local':
    default:
      return (
        <svg {...props}>
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
          <path d="M12 11v4M10 13h4" />
        </svg>
      );
  }
}

export default function App() {
  const [lang, setLang] = useState(detectBrowserLanguage);
  const [platform, setPlatform] = useState(detectInitialPlatform);
  const [activeDistro, setActiveDistro] = useState('arch');
  const [copiedId, setCopiedId] = useState('');
  const copyTimerRef = useRef(null);

  const [release, setRelease] = useState({
    version: DEFAULT_VERSION,
    assets: FALLBACK_ASSETS,
  });
  const [extOpen, setExtOpen] = useState(false);
  const [extRelease, setExtRelease] = useState({
    version: DEFAULT_VERSION,
    assets: EXT_FALLBACK_ASSETS,
  });
  const extLoadedRef = useRef(false);
  const keyBufRef = useRef('');
  const [openFaq, setOpenFaq] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const t = translations[lang] || translations.en;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
  }, [lang, t.meta.title]);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && extOpen) {
        setExtOpen(false);
        return;
      }
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || (e.target && e.target.isContentEditable)) {
        return;
      }
      if (typeof e.key === 'string' && e.key.length === 1) {
        const next = (keyBufRef.current + e.key.toLowerCase()).slice(-4);
        keyBufRef.current = next;
        if (next === 'alle') {
          keyBufRef.current = '';
          setExtOpen(true);
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [extOpen]);

  useEffect(() => {
    if (!extOpen || extLoadedRef.current) return;
    extLoadedRef.current = true;
    const controller = new AbortController();

    async function fetchExtRelease() {
      try {
        const res = await fetch(EXT_RELEASE_API, {
          signal: controller.signal,
          headers: { Accept: 'application/vnd.github+json' },
        });
        if (!res.ok) return;
        const data = await res.json();
        const tag =
          typeof data.tag_name === 'string' && data.tag_name.trim()
            ? data.tag_name.trim()
            : DEFAULT_VERSION;
        const assets = Array.isArray(data.assets) ? data.assets : [];

        const winAsset =
          assets.find(
            (a) => a && typeof a.name === 'string' && a.name.toLowerCase() === 'rustify-setup.exe'
          ) ||
          assets.find((a) => a && typeof a.name === 'string' && a.name.toLowerCase().endsWith('.exe'));
        const mintAsset = assets.find(
          (a) => a && typeof a.name === 'string' && a.name.toLowerCase().endsWith('.deb')
        );
        const archAsset = assets.find(
          (a) => a && typeof a.name === 'string' && a.name.toLowerCase().endsWith('.pkg.tar.zst')
        );

        setExtRelease({
          version: tag,
          assets: {
            windows: resolveAsset(winAsset, EXT_FALLBACK_ASSETS.windows),
            mint: resolveAsset(mintAsset, EXT_FALLBACK_ASSETS.mint),
            arch: resolveAsset(archAsset, EXT_FALLBACK_ASSETS.arch),
          },
        });
      } catch {
        // Keep graceful fallback
      }
    }

    fetchExtRelease();
    return () => controller.abort();
  }, [extOpen]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchLatestRelease() {
      try {
        const res = await fetch(LATEST_RELEASE_API, {
          signal: controller.signal,
          headers: { Accept: 'application/vnd.github+json' },
        });
        if (!res.ok) return;
        const data = await res.json();
        const tag =
          typeof data.tag_name === 'string' && data.tag_name.trim()
            ? data.tag_name.trim()
            : DEFAULT_VERSION;
        const assets = Array.isArray(data.assets) ? data.assets : [];

        const winAsset =
          assets.find(
            (a) => a && typeof a.name === 'string' && a.name.toLowerCase() === 'rustify-setup.exe'
          ) ||
          assets.find((a) => a && typeof a.name === 'string' && a.name.toLowerCase().endsWith('.exe'));

        const debAsset = assets.find(
          (a) => a && typeof a.name === 'string' && a.name.toLowerCase().endsWith('.deb')
        );

        const archAsset = assets.find(
          (a) => a && typeof a.name === 'string' && a.name.toLowerCase().endsWith('.pkg.tar.zst')
        );

        const tarballAsset = assets.find(
          (a) => a && typeof a.name === 'string' && a.name.toLowerCase().endsWith('.tar.gz')
        );

        setRelease({
          version: tag,
          assets: {
            windows: resolveAsset(winAsset, FALLBACK_ASSETS.windows),
            deb: resolveAsset(debAsset, FALLBACK_ASSETS.deb),
            arch: resolveAsset(archAsset, FALLBACK_ASSETS.arch),
            tarball: resolveAsset(tarballAsset, FALLBACK_ASSETS.tarball),
          },
        });
      } catch {
        // Offline or GitHub API rate limit — keep graceful v1.4.0 fallback
      }
    }

    fetchLatestRelease();
    return () => controller.abort();
  }, []);

  const handleCopyCommand = async (id, text) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedId(id);
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current);
      copyTimerRef.current = window.setTimeout(() => setCopiedId(''), 2000);
    } catch {
      // Ignore clipboard failures in restricted contexts
    }
  };

  const handleHeroPointerMove = (e) => {
    if (
      typeof window !== 'undefined' &&
      (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !window.matchMedia('(pointer: fine)').matches)
    ) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: Number((-py * 4.5).toFixed(2)),
      ry: Number((px * 5.5).toFixed(2)),
    });
  };

  const resetHeroTilt = () => setTilt({ rx: 0, ry: 0 });

  const { windows: winAsset, deb: debAsset, arch: archAsset, tarball: tarballAsset } = release.assets;

  const distroAssetMap = {
    arch: archAsset,
    ubuntu: debAsset,
    mint: debAsset,
    tarball: tarballAsset,
  };

  const commandMap = {
    archInstall: `sudo pacman -U ${archAsset.name}`,
    archPipewire: 'sudo pacman -S --needed pipewire-pulse',
    debInstall: `sudo apt update && sudo apt install ./${debAsset.name}`,
    tarballInstall: `tar -xzf ${tarballAsset.name} && cd rustify-linux && ./install.sh`,
    launch: 'rustify',
  };

  const currentDistro = t.linuxInstall.distros[activeDistro] || t.linuxInstall.distros.arch;
  const currentDistroAsset = distroAssetMap[activeDistro] || archAsset;
  const navDownloadHref = platform === 'linux' ? '#linux-install' : winAsset.url;

  return (
    <div className="page-shell">
      <ScrollProgress />

      {/* Architectural Obsidian Background */}
      <div className="bg-grid-overlay" aria-hidden="true" />
      <div className="bg-orb bg-orb--top" aria-hidden="true" />
      <div className="bg-orb bg-orb--left" aria-hidden="true" />
      <div className="bg-orb bg-orb--right" aria-hidden="true" />

      {/* Floating Glass Navbar */}
      <header className="navbar-wrap">
        <nav className="navbar" aria-label="Main navigation">
          <a href="#top" className="brand">
            <img src={`${BASE}rustify_256.png`} alt="Rustify Logo" className="brand-logo" width="28" height="28" />
            <span>Rustify</span>
          </a>

          <div className="nav-links">
            <a href="#features" className="nav-link">{t.nav.features}</a>
            <a href="#preview" className="nav-link">{t.nav.preview}</a>
            <a href="#install" className="nav-link">{t.nav.install}</a>
            <a href="#linux-install" className="nav-link">{t.nav.linux}</a>
            <a href="#specs" className="nav-link">{t.nav.specs}</a>
          </div>

          <div className="nav-actions">
            <div className="lang-toggle" role="group" aria-label={t.nav.switchLangAria}>
              <button
                type="button"
                className={`lang-btn ${lang === 'de' ? 'is-active' : ''}`}
                onClick={() => setLang('de')}
                aria-pressed={lang === 'de'}
              >
                DE
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            <a href={navDownloadHref} className="btn btn-primary btn-sm">
              <DownloadIcon size={14} />
              <span>{t.nav.download}</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <Reveal delay={0}>
              <h1 className="hero-title">
                {t.hero.headlineTop}
                <span className="hero-title-muted">{t.hero.headlineBottom}</span>
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <p className="hero-subtitle">{t.hero.subtitle}</p>
            </Reveal>

            <Reveal delay={120}>
              <div className="platform-switch-wrap">
                <div className="platform-toggle" role="group" aria-label={t.hero.platformSwitchAria}>
                  <button
                    type="button"
                    className={`platform-btn ${platform === 'windows' ? 'is-active' : ''}`}
                    onClick={() => setPlatform('windows')}
                    aria-pressed={platform === 'windows'}
                  >
                    <WindowsIcon size={14} />
                    <span>{t.hero.windowsTab}</span>
                  </button>
                  <button
                    type="button"
                    className={`platform-btn ${platform === 'linux' ? 'is-active' : ''}`}
                    onClick={() => setPlatform('linux')}
                    aria-pressed={platform === 'linux'}
                  >
                    <TerminalIcon size={14} />
                    <span>{t.hero.linuxTab}</span>
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              {platform === 'windows' ? (
                <div className="hero-actions">
                  <a href={winAsset.url} className="btn btn-primary btn-lg">
                    <DownloadIcon size={18} />
                    <span>{t.hero.downloadCta}</span>
                  </a>
                  <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg"
                  >
                    <GitHubIcon size={18} />
                    <span>{t.hero.githubCta}</span>
                  </a>
                </div>
              ) : (
                <>
                  <div className="hero-actions">
                    <a href={debAsset.url} className="btn btn-primary btn-lg">
                      <DownloadIcon size={18} />
                      <span>{t.hero.linuxDebCta}</span>
                    </a>
                    <a href={archAsset.url} className="btn btn-secondary btn-lg">
                      <DownloadIcon size={18} />
                      <span>{t.hero.linuxArchCta}</span>
                    </a>
                  </div>
                  <div className="hero-sublinks">
                    <a href="#linux-install" className="hero-sublink">
                      <TerminalIcon size={13} />
                      <span>{t.hero.linuxGuideLink}</span>
                    </a>
                    <span className="hero-meta-sep" aria-hidden="true">·</span>
                    <a href={tarballAsset.url} className="hero-sublink">
                      <DownloadIcon size={13} />
                      <span>{t.hero.linuxTarballLink}</span>
                    </a>
                    <span className="hero-meta-sep" aria-hidden="true">·</span>
                    <a
                      href={REPO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-sublink"
                    >
                      <GitHubIcon size={13} />
                      <span>{t.hero.githubCta}</span>
                    </a>
                  </div>
                </>
              )}
            </Reveal>

            <Reveal delay={190}>
              {platform === 'windows' ? (
                <div className="hero-meta" aria-label="Release details">
                  <span>{t.hero.platformMeta}</span>
                  <span className="hero-meta-sep" aria-hidden="true">·</span>
                  <span className="hero-meta-strong">{release.version}</span>
                  <span className="hero-meta-sep" aria-hidden="true">·</span>
                  <span className="hero-meta-strong">{winAsset.size}</span>
                  <span className="hero-meta-sep" aria-hidden="true">·</span>
                  <span>{t.hero.licenseMeta}</span>
                </div>
              ) : (
                <div className="hero-meta" aria-label="Release details">
                  <span>{t.hero.linuxPlatformMeta}</span>
                  <span className="hero-meta-sep" aria-hidden="true">·</span>
                  <span className="hero-meta-strong">{release.version}</span>
                  <span className="hero-meta-sep" aria-hidden="true">·</span>
                  <span>{t.hero.licenseMeta}</span>
                </div>
              )}
            </Reveal>

            <Reveal delay={240}>
              <div className="hero-preview-stage" id="preview">
                <div
                  className="hero-preview-card"
                  onMouseMove={handleHeroPointerMove}
                  onMouseLeave={resetHeroTilt}
                  style={{
                    transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                  }}
                >
                  <div className="hero-preview-chrome">
                    <div className="chrome-dots" aria-hidden="true">
                      <span className="chrome-dot" />
                      <span className="chrome-dot" />
                      <span className="chrome-dot" />
                    </div>
                    <span className="chrome-label">{t.hero.previewLabel}</span>
                    <span className="chrome-pill">{t.hero.previewStatus}</span>
                  </div>
                  <div className="hero-preview-frame">
                    <img
                      src={`${BASE}preview_main.png`}
                      alt={t.hero.previewAlt}
                      className="hero-preview-img"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Key Architecture Stats Strip */}
        <section className="stats-section" aria-label="Performance metrics">
          <div className="container">
            <Reveal>
              <div className="stats-grid">
                {t.stats.map((stat) => (
                  <div key={stat.label} className="stat-cell">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Feature Bento Grid */}
        <section className="section" id="features">
          <div className="container">
            <Reveal>
              <div className="section-header">
                <span className="eyebrow">{t.features.eyebrow}</span>
                <h2 className="section-title">{t.features.title}</h2>
                <p className="section-subtitle">{t.features.subtitle}</p>
              </div>
            </Reveal>

            <div className="bento-grid">
              {t.features.items.map((item, idx) => {
                const spanClass =
                  item.span === 'wide'
                    ? 'bento-wide'
                    : item.span === 'full'
                      ? 'bento-full'
                      : '';

                return (
                  <Reveal key={item.id} delay={Math.min(idx * 55, 280)} className={spanClass}>
                    <article className="glass-card glass-card--interactive feature-card">
                      {item.span === 'full' ? (
                        <div className="feature-card--full-inner">
                          <div className="feature-card--full-copy">
                            <div className="feature-card-top" style={{ marginBottom: 14 }}>
                              <div className="feature-icon-box">
                                <FeatureIcon id={item.id} />
                              </div>
                              <span className="feature-tag">{item.tag}</span>
                            </div>
                            <h3 className="feature-title">{item.title}</h3>
                            <p className="feature-desc">{item.description}</p>
                          </div>

                          {item.formats && (
                            <div className="feature-pills feature-card--full-pills">
                              {item.formats.map((chip) => (
                                <span key={chip} className="pill-chip">
                                  {chip}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <>
                          <div>
                            <div className="feature-card-top" style={{ marginBottom: 16 }}>
                              <div className="feature-icon-box">
                                <FeatureIcon id={item.id} />
                              </div>
                              <span className="feature-tag">{item.tag}</span>
                            </div>
                            <h3 className="feature-title">{item.title}</h3>
                            <p className="feature-desc">{item.description}</p>
                          </div>

                          {item.highlights && (
                            <div className="feature-pills">
                              {item.highlights.map((chip) => (
                                <span key={chip} className="pill-chip">
                                  {chip}
                                </span>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Preview / Local Import Showcase & Quick-Start */}
        <section className="section" id="install">
          <div className="container">
            <Reveal>
              <div className="section-header">
                <span className="eyebrow">{t.showcase.eyebrow}</span>
                <h2 className="section-title">{t.showcase.title}</h2>
                <p className="section-subtitle">{t.showcase.subtitle}</p>
              </div>
            </Reveal>

            <div className="showcase-grid">
              <Reveal delay={60}>
                <div className="glass-card showcase-media">
                  <div className="showcase-media-header">
                    <div className="chrome-dots" aria-hidden="true">
                      <span className="chrome-dot" />
                      <span className="chrome-dot" />
                      <span className="chrome-dot" />
                    </div>
                    <span>{t.showcase.previewTag}</span>
                  </div>
                  <div className="showcase-img-wrap">
                    <img
                      src={`${BASE}preview_import.png`}
                      alt={t.showcase.previewAlt}
                      loading="lazy"
                    />
                  </div>
                  <div className="convention-box">
                    <div className="convention-head">
                      <span className="convention-label">{t.showcase.conventionLabel}</span>
                      <code className="convention-code">{t.showcase.conventionValue}</code>
                    </div>
                    <p className="convention-hint">{t.showcase.conventionHint}</p>
                  </div>
                </div>
              </Reveal>

              <div className="steps-stack">
                {t.showcase.steps.map((step, idx) => (
                  <Reveal key={step.num} delay={90 + idx * 75}>
                    <div className="glass-card glass-card--interactive step-card">
                      <div className="step-num">{step.num}</div>
                      <div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-desc">{step.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Linux Installation Guide */}
        <section className="section" id="linux-install">
          <div className="container">
            <Reveal>
              <div className="section-header">
                <span className="eyebrow">{t.linuxInstall.eyebrow}</span>
                <h2 className="section-title">{t.linuxInstall.title}</h2>
                <p className="section-subtitle">{t.linuxInstall.subtitle}</p>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <div className="glass-card linux-guide-card">
                <div
                  className="distro-tabs"
                  role="tablist"
                  aria-label={t.linuxInstall.tabsAria}
                >
                  {DISTRO_KEYS.map((key) => {
                    const distro = t.linuxInstall.distros[key];
                    const isSelected = activeDistro === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        role="tab"
                        id={`tab-${key}`}
                        aria-selected={isSelected}
                        aria-controls={`panel-${key}`}
                        className={`distro-tab ${isSelected ? 'is-active' : ''}`}
                        onClick={() => setActiveDistro(key)}
                      >
                        <span className="distro-tab-name">{distro.tab}</span>
                      </button>
                    );
                  })}
                </div>

                <div
                  id={`panel-${activeDistro}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${activeDistro}`}
                  className="distro-panel"
                >
                  <div className="distro-header">
                    <div className="distro-header-info">
                      <div className="distro-title-row">
                        <h3 className="distro-title">{currentDistro.title}</h3>
                        <span className="distro-format-tag">{currentDistro.formatBadge}</span>
                      </div>
                      <p className="distro-subtitle">{currentDistro.subtitle}</p>
                      <div className="distro-file-meta">
                        <span className="distro-file-label">{t.linuxInstall.packageLabel}:</span>
                        <code className="distro-file-name">{currentDistroAsset.name}</code>
                        <span className="hero-meta-sep" aria-hidden="true">·</span>
                        <span className="distro-file-size">{currentDistroAsset.size}</span>
                        <span className="hero-meta-sep" aria-hidden="true">·</span>
                        <span className="distro-file-size">{release.version}</span>
                      </div>
                    </div>

                    <a
                      href={currentDistroAsset.url}
                      className="btn btn-primary distro-download-btn"
                    >
                      <DownloadIcon size={16} />
                      <span>
                        {t.linuxInstall.downloadBtn} {currentDistro.formatBadge}
                      </span>
                    </a>
                  </div>

                  <ol className="distro-steps">
                    {currentDistro.steps.map((step) => {
                      const cmdText = step.cmdKey ? commandMap[step.cmdKey] : null;
                      const stepCopyId = `${activeDistro}-${step.num}`;
                      const isCopied = copiedId === stepCopyId;

                      return (
                        <li key={step.num} className="distro-step">
                          <div className="step-num distro-step-num">{step.num}</div>
                          <div className="distro-step-body">
                            <h4 className="distro-step-title">{step.title}</h4>
                            <p className="distro-step-desc">{step.desc}</p>

                            {cmdText && (
                              <div className="cmd-block">
                                <div className="cmd-scroll">
                                  <span className="cmd-prompt" aria-hidden="true">$</span>
                                  <code className="cmd-code">{cmdText}</code>
                                </div>
                                <button
                                  type="button"
                                  className={`copy-btn ${isCopied ? 'is-copied' : ''}`}
                                  onClick={() => handleCopyCommand(stepCopyId, cmdText)}
                                  aria-label={t.linuxInstall.copyAria}
                                >
                                  {isCopied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
                                  <span>{isCopied ? t.linuxInstall.copied : t.linuxInstall.copy}</span>
                                </button>
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Synchronized Lyrics & Visualizer Showcase */}
        <section className="section" id="lyrics">
          <div className="container">
            <Reveal>
              <div className="section-header">
                <span className="eyebrow">{t.lyricsShowcase.eyebrow}</span>
                <h2 className="section-title">{t.lyricsShowcase.title}</h2>
                <p className="section-subtitle">{t.lyricsShowcase.subtitle}</p>
              </div>
            </Reveal>

            <div className="lyrics-showcase-grid">
              <Reveal delay={50}>
                <article className="glass-card glass-card--interactive lyrics-media-card">
                  <div className="showcase-media-header">
                    <div className="chrome-dots" aria-hidden="true">
                      <span className="chrome-dot" />
                      <span className="chrome-dot" />
                      <span className="chrome-dot" />
                    </div>
                    <span>{t.lyricsShowcase.appCardTag}</span>
                  </div>
                  <div className="showcase-img-wrap">
                    <img
                      src={`${BASE}preview_lyrics.png`}
                      alt={t.lyricsShowcase.appAlt}
                      loading="lazy"
                    />
                  </div>
                  <div className="lyrics-media-copy">
                    <h3>{t.lyricsShowcase.appCardTitle}</h3>
                    <p>{t.lyricsShowcase.appCardDesc}</p>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={110}>
                <article className="glass-card glass-card--interactive lyrics-media-card">
                  <div className="showcase-media-header">
                    <div className="chrome-dots" aria-hidden="true">
                      <span className="chrome-dot" />
                      <span className="chrome-dot" />
                      <span className="chrome-dot" />
                    </div>
                    <span>{t.lyricsShowcase.vizCardTag}</span>
                  </div>
                  <div className="showcase-img-wrap">
                    <img
                      src={`${BASE}preview_visualizer_lyrics.png`}
                      alt={t.lyricsShowcase.vizAlt}
                      loading="lazy"
                    />
                  </div>
                  <div className="lyrics-media-copy">
                    <h3>{t.lyricsShowcase.vizCardTitle}</h3>
                    <p>{t.lyricsShowcase.vizCardDesc}</p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Controls, Tech Specs & FAQ */}
        <section className="section" id="specs">
          <div className="container">
            <Reveal>
              <div className="section-header">
                <span className="eyebrow">{t.specs.eyebrow}</span>
                <h2 className="section-title">{t.specs.title}</h2>
              </div>
            </Reveal>

            <div className="specs-grid">
              <Reveal delay={50}>
                <div className="glass-card panel-card">
                  <h3 className="panel-title">
                    <KeyboardIcon />
                    <span>{t.specs.shortcutsTitle}</span>
                  </h3>
                  <ul className="shortcut-list">
                    {t.specs.shortcuts.map((row) => (
                      <li key={row.keys} className="shortcut-row">
                        <kbd className="kbd-badge">{row.keys}</kbd>
                        <span className="shortcut-action">{row.action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={110}>
                <div className="glass-card panel-card">
                  <h3 className="panel-title">
                    <CpuIcon />
                    <span>{t.specs.techTitle}</span>
                  </h3>
                  <ul className="tech-list">
                    {t.specs.techItems.map((row) => (
                      <li key={row.label} className="tech-row">
                        <span className="tech-label">{row.label}</span>
                        <span className="tech-value">{row.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="glass-card panel-card">
                <h3 className="panel-title" style={{ marginBottom: 8 }}>
                  {t.specs.faqTitle}
                </h3>
                <div className="faq-list">
                  {t.specs.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={faq.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                        <button
                          type="button"
                          className="faq-trigger"
                          aria-expanded={isOpen}
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        >
                          <span>{faq.q}</span>
                          <span className="faq-chevron">
                            <ChevronDownIcon />
                          </span>
                        </button>
                        <div className="faq-body">
                          <div className="faq-answer-wrap">
                            <p className="faq-answer">{faq.a}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Bottom Download CTA Card */}
        <section className="cta-section" aria-label="Download Rustify">
          <div className="container">
            <Reveal>
              <div className="glass-card cta-card">
                <span className="cta-badge">{t.cta.badge}</span>
                <h2 className="cta-title">{t.cta.title}</h2>
                <p className="cta-subtitle">{t.cta.subtitle}</p>

                <div className="cta-actions">
                  <a href={winAsset.url} className="btn btn-primary btn-lg">
                    <WindowsIcon size={16} />
                    <span>{t.cta.windowsCta}</span>
                  </a>
                  <a href={debAsset.url} className="btn btn-secondary btn-lg">
                    <DownloadIcon size={17} />
                    <span>{t.cta.debCta}</span>
                  </a>
                  <a href={archAsset.url} className="btn btn-secondary btn-lg">
                    <DownloadIcon size={17} />
                    <span>{t.cta.archCta}</span>
                  </a>
                </div>

                <div className="cta-sublinks">
                  <a href={tarballAsset.url} className="cta-meta-link">
                    <DownloadIcon size={13} />
                    <span>{t.cta.tarballLink}</span>
                  </a>
                  <span className="hero-meta-sep" aria-hidden="true">·</span>
                  <a href="#linux-install" className="cta-meta-link">
                    <TerminalIcon size={13} />
                    <span>{t.cta.linuxGuideLink}</span>
                  </a>
                  <span className="hero-meta-sep" aria-hidden="true">·</span>
                  <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-meta-link"
                  >
                    <GitHubIcon size={13} />
                    <span>{t.cta.githubCta}</span>
                  </a>
                  <span className="hero-meta-sep" aria-hidden="true">·</span>
                  <a
                    href={RELEASES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-meta-link"
                  >
                    <span>
                      {release.version} · {t.cta.releasesText}
                    </span>
                    <ArrowUpRightIcon />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={`${BASE}rustify_256.png`} alt="" width="20" height="20" className="brand-logo" style={{ width: 20, height: 20, borderRadius: 5 }} />
            <span>
              {t.footer.tagline}{' '}
              <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer">
                {t.footer.authorLink}
              </a>{' '}
              · {t.footer.license}
            </span>
          </div>

          <div className="footer-links">
            <a href="#linux-install">{t.nav.linux}</a>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              {t.footer.repoLink}
            </a>
            <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
              {t.footer.releasesLink}
            </a>
            <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer">
              github.com/Ilay-dev
            </a>
          </div>
        </div>
      </footer>

      {extOpen && (
        <div
          className="ext-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Rustify Full Edition Downloads"
          onClick={(e) => {
            if (e.target === e.currentTarget) setExtOpen(false);
          }}
        >
          <div className="glass-card ext-modal">
            <div className="ext-modal-header">
              <div>
                <h2 className="ext-modal-title">
                  {lang === 'de' ? 'Rustify — Vollversion' : 'Rustify — Full Edition'}
                </h2>
                <p className="ext-modal-subtitle">
                  {lang === 'de'
                    ? `${extRelease.version} · Windows, Linux Mint & Arch Linux (inkl. YouTube, Spotify & Amazon Sync)`
                    : `${extRelease.version} · Windows, Linux Mint & Arch Linux (incl. YouTube, Spotify & Amazon Sync)`}
                </p>
              </div>
              <button
                type="button"
                className="ext-close-btn"
                onClick={() => setExtOpen(false)}
                aria-label={lang === 'de' ? 'Schließen' : 'Close'}
              >
                ×
              </button>
            </div>

            <div className="ext-grid">
              {/* Windows */}
              <div className="ext-card">
                <div className="ext-card-top">
                  <div className="ext-card-name">
                    <WindowsIcon size={16} />
                    <span>Windows 10 / 11</span>
                  </div>
                  <span className="ext-card-meta">{extRelease.assets.windows.size}</span>
                </div>
                <p className="ext-card-file">{extRelease.assets.windows.name}</p>
                <a href={extRelease.assets.windows.url} className="btn btn-primary btn-sm ext-dl-btn">
                  <DownloadIcon size={14} />
                  <span>{lang === 'de' ? 'Windows Setup (.exe)' : 'Windows Installer (.exe)'}</span>
                </a>
              </div>

              {/* Linux Mint */}
              <div className="ext-card">
                <div className="ext-card-top">
                  <div className="ext-card-name">
                    <TerminalIcon size={16} />
                    <span>Linux Mint (21 / 22)</span>
                  </div>
                  <span className="ext-card-meta">{extRelease.assets.mint.size}</span>
                </div>
                <p className="ext-card-file">{extRelease.assets.mint.name}</p>
                <a href={extRelease.assets.mint.url} className="btn btn-primary btn-sm ext-dl-btn">
                  <DownloadIcon size={14} />
                  <span>{lang === 'de' ? 'Mint Paket (.deb)' : 'Mint Package (.deb)'}</span>
                </a>
                <div className="cmd-block ext-cmd">
                  <code className="cmd-code">{`sudo apt update && sudo apt install ./${extRelease.assets.mint.name}`}</code>
                  <button
                    type="button"
                    className={`copy-btn ${copiedId === 'ext-mint' ? 'is-copied' : ''}`}
                    onClick={() =>
                      handleCopyCommand(
                        'ext-mint',
                        `sudo apt update && sudo apt install ./${extRelease.assets.mint.name}`
                      )
                    }
                  >
                    {copiedId === 'ext-mint' ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
                  </button>
                </div>
              </div>

              {/* Arch Linux */}
              <div className="ext-card">
                <div className="ext-card-top">
                  <div className="ext-card-name">
                    <TerminalIcon size={16} />
                    <span>Arch Linux</span>
                  </div>
                  <span className="ext-card-meta">{extRelease.assets.arch.size}</span>
                </div>
                <p className="ext-card-file">{extRelease.assets.arch.name}</p>
                <a href={extRelease.assets.arch.url} className="btn btn-primary btn-sm ext-dl-btn">
                  <DownloadIcon size={14} />
                  <span>{lang === 'de' ? 'Arch Paket (.pkg.tar.zst)' : 'Arch Package (.pkg.tar.zst)'}</span>
                </a>
                <div className="cmd-block ext-cmd">
                  <code className="cmd-code">{`sudo pacman -U ${extRelease.assets.arch.name}`}</code>
                  <button
                    type="button"
                    className={`copy-btn ${copiedId === 'ext-arch' ? 'is-copied' : ''}`}
                    onClick={() =>
                      handleCopyCommand('ext-arch', `sudo pacman -U ${extRelease.assets.arch.name}`)
                    }
                  >
                    {copiedId === 'ext-arch' ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
