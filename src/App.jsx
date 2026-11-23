import React, { useEffect, useRef, useState } from 'react';
import { translations } from './translations';

const REPO_URL = 'https://github.com/Ilay-dev/Rustify';
const AUTHOR_URL = 'https://github.com/Ilay-dev';
const RELEASES_URL = 'https://github.com/Ilay-dev/Rustify/releases';
const FALLBACK_DOWNLOAD_URL =
  'https://github.com/Ilay-dev/Rustify/releases/latest/download/Rustify-Setup.exe';
const LATEST_RELEASE_API = 'https://api.github.com/repos/Ilay-dev/Rustify/releases/latest';

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

function formatBytesToMB(bytes) {
  if (!bytes || Number.isNaN(bytes) || bytes <= 0) return '~14 MB';
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
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
  const [release, setRelease] = useState({
    version: 'v1.1.0',
    size: '~14 MB',
    downloadUrl: FALLBACK_DOWNLOAD_URL,
  });
  const [openFaq, setOpenFaq] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const t = translations[lang] || translations.en;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
  }, [lang, t.meta.title]);

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
        const tag = typeof data.tag_name === 'string' && data.tag_name.trim() ? data.tag_name.trim() : 'v1.1.0';
        const assets = Array.isArray(data.assets) ? data.assets : [];
        const installer =
          assets.find((a) => a && typeof a.name === 'string' && a.name.toLowerCase() === 'rustify-setup.exe') ||
          assets.find((a) => a && typeof a.name === 'string' && a.name.toLowerCase().endsWith('.exe'));

        setRelease({
          version: tag,
          size: installer && installer.size ? formatBytesToMB(installer.size) : '~14 MB',
          downloadUrl:
            installer && installer.browser_download_url
              ? installer.browser_download_url
              : FALLBACK_DOWNLOAD_URL,
        });
      } catch {
        // Offline or GitHub API rate limit — keep graceful fallback
      }
    }

    fetchLatestRelease();
    return () => controller.abort();
  }, []);

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

            <a href={release.downloadUrl} className="btn btn-primary btn-sm">
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
              <div className="hero-badge">
                <span className="hero-badge-dot" aria-hidden="true" />
                <span>{t.hero.badge}</span>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="hero-title">
                {t.hero.headlineTop}
                <span className="hero-title-muted">{t.hero.headlineBottom}</span>
              </h1>
            </Reveal>

            <Reveal delay={130}>
              <p className="hero-subtitle">{t.hero.subtitle}</p>
            </Reveal>

            <Reveal delay={190}>
              <div className="hero-actions">
                <a href={release.downloadUrl} className="btn btn-primary btn-lg">
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
            </Reveal>

            <Reveal delay={230}>
              <div className="hero-meta" aria-label="Release details">
                <span className="hero-meta-strong">{release.version}</span>
                <span className="hero-meta-sep" aria-hidden="true">·</span>
                <span className="hero-meta-strong">{release.size}</span>
                <span className="hero-meta-sep" aria-hidden="true">·</span>
                <span>{t.hero.platformMeta}</span>
                <span className="hero-meta-sep" aria-hidden="true">·</span>
                <span>{t.hero.licenseMeta}</span>
              </div>
            </Reveal>

            <Reveal delay={280}>
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
                  <a href={release.downloadUrl} className="btn btn-primary btn-lg">
                    <DownloadIcon size={18} />
                    <span>{t.cta.downloadCta}</span>
                  </a>
                  <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg"
                  >
                    <GitHubIcon size={18} />
                    <span>{t.cta.githubCta}</span>
                  </a>
                </div>

                <a
                  href={RELEASES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-meta-link"
                >
                  <span>
                    {release.version} · {release.size} · {t.cta.releasesText}
                  </span>
                  <ArrowUpRightIcon />
                </a>
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
    </div>
  );
}
