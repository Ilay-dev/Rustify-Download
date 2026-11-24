export const translations = {
  en: {
    meta: {
      title: 'Rustify — Native Rust Music Player for Windows & Linux by Ilay Schönknecht',
    },
    nav: {
      features: 'Features',
      preview: 'Preview',
      install: 'Setup',
      linux: 'Linux',
      specs: 'Specs',
      download: 'Download',
      switchLangAria: 'Switch language',
    },
    hero: {
      headlineTop: 'Pure Rust Speed.',
      headlineBottom: 'Liquid Glass Audio.',
      subtitle:
        'A native, offline-first local music player for Windows & Linux (Arch, Ubuntu, Mint). Built in pure Rust with AI DJ Automix, -14 LUFS loudness normalization, a 5-band real-time EQ, synced karaoke lyrics, and a dedicated FFT visualizer.',
      platformSwitchAria: 'Select operating system',
      windowsTab: 'Windows',
      linuxTab: 'Linux',
      downloadCta: 'Download for Windows',
      githubCta: 'GitHub',
      linuxDebCta: 'Ubuntu / Mint (.deb)',
      linuxArchCta: 'Arch Linux (.pkg.tar.zst)',
      linuxGuideLink: 'Linux Install Guide',
      linuxTarballLink: 'Universal .tar.gz',
      platformMeta: 'Windows 10/11 64-bit',
      linuxPlatformMeta: 'Linux x86_64 · Arch / Ubuntu / Mint',
      licenseMeta: 'Free & Open Source · MIT',
      previewAlt: 'Rustify Desktop Music Player Main Interface',
      previewLabel: 'Rustify · Monochrome Liquid Glass UI',
      previewStatus: 'Native Engine',
    },
    stats: [
      { value: '< 30 MB', label: 'RAM Footprint' },
      { value: '100%', label: 'Pure Rust Native' },
      { value: '-14 LUFS', label: 'Studio Loudness' },
      { value: '0%', label: 'Electron or Cloud' },
    ],
    features: {
      eyebrow: 'CORE ARCHITECTURE',
      title: 'Engineered for pure local playback.',
      subtitle:
        'Every millisecond of audio DSP, beat-grid analysis, and UI rendering runs natively on your machine with zero browser bloat.',
      items: [
        {
          id: 'rust-ui',
          span: 'wide',
          tag: 'NATIVE ENGINE',
          title: 'Pure Rust & Liquid Glass UI',
          description:
            'Instant startup, razor-sharp 60+ FPS rendering, and under 30 MB of RAM on Windows and Linux. Zero Electron, zero Chromium overhead — crafted with a calm monochrome obsidian glass aesthetic.',
          highlights: ['< 30 MB RAM', 'Zero Electron', 'Windows & Linux'],
        },
        {
          id: 'lufs',
          span: 'normal',
          tag: 'ITU-R BS.1770',
          title: 'Loudness Normalization (-14 LUFS)',
          description:
            'Studio-grade perceptual loudness metering keeps every track at a balanced -14 LUFS target without ever touching your volume slider.',
        },
        {
          id: 'eq',
          span: 'normal',
          tag: 'REAL-TIME DSP',
          title: '5-Band Real-Time Equalizer',
          description:
            'Shape Sub-Bass through crisp Treble live with zero latency, plus tuned Bass Boost and Hardstyle presets ready in one click.',
        },
        {
          id: 'automix',
          span: 'wide',
          tag: 'BEAT-THIS + CAMELOT WHEEL',
          title: 'AI DJ Automix',
          description:
            'Neural beat-grid phase locking meets harmonic Camelot Wheel key chaining and a surgical 220 Hz Bass-Swap EQ for effortless, club-grade transitions between your local tracks.',
          highlights: ['Beat-Grid Phase Lock', 'Camelot Key Chaining', '220 Hz Bass-Swap EQ'],
        },
        {
          id: 'lyrics',
          span: 'normal',
          tag: 'LRCLIB SYNC',
          title: 'Synchronized Karaoke Lyrics',
          description:
            'Live auto-scrolling timed lyrics fetched from LRCLIB with click-to-seek navigation on any line.',
        },
        {
          id: 'visualizer',
          span: 'normal',
          tag: 'DEDICATED FFT WINDOW',
          title: 'Built-in AudioVisualizer',
          description:
            'Pop out a dedicated high-framerate FFT spectrum window for App Audio, System Audio Loopback (WASAPI / PipeWire), or Microphone input.',
        },
        {
          id: 'discord',
          span: 'normal',
          tag: 'SYSTEM INTEGRATION',
          title: 'Discord RPC, SMTC & MPRIS',
          description:
            'Broadcast your current track cleanly to Discord while controlling playback seamlessly via Windows SMTC and Linux MPRIS media keys.',
        },
        {
          id: 'local',
          span: 'full',
          tag: 'OFFLINE-FIRST PRIVACY',
          title: '100% Local & Private Library',
          description:
            'Your music never leaves your drive. Full support for MP3, FLAC, WAV, OGG, and M4A with instant folder import, built-in Cover Manager, and a floating Mini-Widget.',
          formats: ['MP3', 'FLAC', 'WAV', 'OGG', 'M4A', 'Folder Import', 'Cover Manager', 'Mini-Widget'],
        },
      ],
    },
    showcase: {
      eyebrow: 'PREVIEW & QUICK START',
      title: 'Drop in your folder. Press play.',
      subtitle:
        'No subscriptions, no library lock-in, no account walls. Rustify reads your existing local music folders and structures tracks cleanly.',
      previewAlt: 'Rustify Local Folder Import Interface',
      previewTag: 'Local Folder Import',
      conventionLabel: 'Smart filename detection',
      conventionValue: 'Title - Artist.mp3',
      conventionHint: 'Reads embedded ID3/FLAC tags automatically and falls back cleanly to filename parsing.',
      steps: [
        {
          num: '01',
          title: 'Download & Install',
          description:
            'Run Rustify-Setup.exe on Windows 10/11 or install the native Linux package (.deb, .pkg.tar.zst, or .tar.gz) in seconds.',
        },
        {
          num: '02',
          title: 'Select Your Music Folder',
          description:
            'Point Rustify to any local directory containing MP3, FLAC, WAV, OGG, or M4A tracks. Covers and metadata load automatically.',
        },
        {
          num: '03',
          title: 'Mix, Tune & Visualize',
          description:
            'Enable AI DJ Automix, dial in the 5-band EQ, follow synced lyrics, or open the standalone FFT AudioVisualizer.',
        },
      ],
    },
    linuxInstall: {
      eyebrow: 'LINUX PACKAGES & SETUP',
      title: 'Native Linux builds. Ready in seconds.',
      subtitle:
        'Official x86_64 packages with desktop launcher integration, PipeWire/PulseAudio audio, MPRIS media keys, and Wayland/X11 support.',
      tabsAria: 'Select Linux distribution',
      downloadBtn: 'Download',
      copy: 'Copy',
      copied: 'Copied!',
      copyAria: 'Copy command to clipboard',
      packageLabel: 'Package',
      distros: {
        arch: {
          tab: 'Arch Linux',
          title: 'Arch Linux',
          subtitle: 'Arch / Manjaro / EndeavourOS / CachyOS',
          formatBadge: '.pkg.tar.zst',
          steps: [
            {
              num: '01',
              title: 'Install package with pacman',
              desc: 'Installs the native Rustify binary, desktop entry, and icons cleanly via pacman.',
              cmdKey: 'archInstall',
            },
            {
              num: '02',
              title: 'System Audio Visualizer (optional)',
              desc: 'Required only for desktop system audio loopback in the FFT Visualizer — already preinstalled on modern Arch/PipeWire setups.',
              cmdKey: 'archPipewire',
            },
            {
              num: '03',
              title: 'Launch Rustify',
              desc: 'Open Rustify from your application menu or launch it directly from the terminal.',
              cmdKey: 'launch',
            },
          ],
        },
        ubuntu: {
          tab: 'Ubuntu',
          title: 'Ubuntu',
          subtitle: '22.04 LTS / 24.04 LTS+',
          formatBadge: '.deb',
          steps: [
            {
              num: '01',
              title: 'Install .deb package via apt',
              desc: 'Automatically resolves and installs all required system dependencies.',
              cmdKey: 'debInstall',
            },
            {
              num: '02',
              title: 'Launch Rustify',
              desc: 'Start Rustify from the Application Launcher or run it from your terminal.',
              cmdKey: 'launch',
            },
          ],
        },
        mint: {
          tab: 'Linux Mint',
          title: 'Linux Mint',
          subtitle: '21.x / 22.x Cinnamon, MATE, XFCE',
          formatBadge: '.deb',
          steps: [
            {
              num: '01',
              title: 'Easy (GUI)',
              desc: 'Double-click the downloaded .deb file and click "Install Package" in GDebi — no terminal needed.',
            },
            {
              num: '02',
              title: 'Or install via Terminal',
              desc: 'Prefer the command line? Install the package and resolve dependencies in one step:',
              cmdKey: 'debInstall',
            },
            {
              num: '03',
              title: 'Launch Rustify',
              desc: 'Open via Linux Mint Menu → Sound & Video → Rustify, or launch from the terminal.',
              cmdKey: 'launch',
            },
          ],
        },
        tarball: {
          tab: 'Universal (.tar.gz)',
          title: 'Universal Linux',
          subtitle: 'Fedora, openSUSE, Debian & any x86_64 distro',
          formatBadge: '.tar.gz',
          steps: [
            {
              num: '01',
              title: 'Extract & run local installer (no root)',
              desc: 'Installs cleanly into ~/.local/bin and adds a Rustify desktop entry to your App Menu without requiring sudo.',
              cmdKey: 'tarballInstall',
            },
            {
              num: '02',
              title: 'Launch Rustify',
              desc: 'Open Rustify from your application menu or run it directly in your terminal.',
              cmdKey: 'launch',
            },
          ],
        },
      },
    },
    lyricsShowcase: {
      eyebrow: 'SYNCHRONIZED LYRICS & VISUALIZER',
      title: 'Live lyrics in the player and on the FFT stage.',
      subtitle:
        'Open the full karaoke lyrics view from the player bar or overlay the previous, current, and upcoming lines directly inside the AudioVisualizer (Top or Bottom).',
      appCardTitle: 'In-App Karaoke Lyrics',
      appCardTag: 'Click-to-Seek · LRCLIB',
      appCardDesc:
        'Automatically fetches and caches timed .lrc lyrics, auto-scrolls in sync, and jumps to any line with a single click.',
      appAlt: 'Rustify In-App Synchronized Lyrics View',
      vizCardTitle: 'AudioVisualizer 3-Line Overlay',
      vizCardTag: 'Top / Bottom · Toggleable',
      vizCardDesc:
        'Centered live lyrics right inside the 60+ FPS FFT spectrum window — previous and next lines softly dimmed, active line crisp and bright.',
      vizAlt: 'Rustify AudioVisualizer with 3-Line Synchronized Lyrics',
    },
    specs: {
      eyebrow: 'CONTROLS & SPECS',
      title: 'Built for effortless desktop control.',
      shortcutsTitle: 'Controls & Shortcuts',
      shortcuts: [
        { keys: 'Space', action: 'Play / Pause' },
        { keys: '← / →', action: 'Seek or Skip Track' },
        { keys: '↑ / ↓', action: 'Adjust Volume' },
        { keys: 'M', action: 'Toggle Mute' },
        { keys: 'Media Keys', action: 'Native Windows SMTC & Linux MPRIS' },
      ],
      techTitle: 'Technical Specifications',
      techItems: [
        { label: 'Operating System', value: 'Windows 10 / 11 & Linux (Arch, Ubuntu, Mint)' },
        { label: 'Architecture', value: '100% Pure Rust Native Binary' },
        { label: 'Audio Formats', value: 'MP3, FLAC, WAV, OGG, M4A' },
        { label: 'Loudness Target', value: '-14 LUFS (ITU-R BS.1770)' },
        { label: 'Automix Engine', value: 'beat-this + Camelot Wheel' },
        { label: 'License', value: 'MIT Open Source' },
      ],
      faqTitle: 'Quick Answers',
      faqs: [
        {
          q: 'How does Rustify work on Linux (Wayland, PipeWire, MPRIS, Discord)?',
          a: 'Rustify runs natively on both Wayland and X11. Audio playback and the FFT System Audio Visualizer work seamlessly with PipeWire and PulseAudio, hardware media keys integrate via MPRIS (D-Bus), and Discord Rich Presence connects automatically to native Linux Discord installations.',
        },
        {
          q: 'Why does Windows SmartScreen show a warning?',
          a: 'Rustify is a free, independent open-source project without a paid commercial code-signing certificate. Click "More info" → "Run anyway", or inspect and compile the full source code yourself on GitHub.',
        },
        {
          q: 'Does Rustify work completely offline?',
          a: 'Yes. Library playback, 5-band EQ, -14 LUFS loudness normalization, AI DJ Automix, and the FFT AudioVisualizer run 100% locally. Network access is only optionally used for LRCLIB lyrics and Discord Rich Presence.',
        },
        {
          q: 'How does AI DJ Automix transition tracks?',
          a: 'Rustify analyzes exact beat grids with beat-this, orders compatible keys using the Camelot Wheel, aligns phase on the beat, and applies a 220 Hz Bass-Swap EQ so transitions sound tight and musical.',
        },
        {
          q: 'Is Rustify really under 30 MB of RAM?',
          a: 'Yes. Because Rustify is compiled directly to native machine code in Rust without Electron or an embedded web browser, memory usage typically stays below 30 MB during playback.',
        },
      ],
    },
    cta: {
      badge: 'FREE & OPEN SOURCE',
      title: 'Ready to listen without limits?',
      subtitle:
        'Download the official Windows installer or native Linux packages straight from GitHub Releases — fast, private, and built in pure Rust.',
      windowsCta: 'Windows (.exe)',
      debCta: 'Ubuntu / Mint (.deb)',
      archCta: 'Arch Linux (.pkg.tar.zst)',
      tarballLink: 'Universal .tar.gz',
      linuxGuideLink: 'Linux Guide',
      githubCta: 'GitHub',
      releasesText: 'View all releases & changelog',
    },
    footer: {
      tagline: 'Rustify · Built in Rust by',
      license: 'MIT License',
      repoLink: 'Repository',
      releasesLink: 'Releases',
      authorLink: 'Ilay Schönknecht (Ilay-dev)',
    },
  },

  de: {
    meta: {
      title: 'Rustify — Nativer Rust-Musikplayer für Windows & Linux von Ilay Schönknecht',
    },
    nav: {
      features: 'Features',
      preview: 'Vorschau',
      install: 'Setup',
      linux: 'Linux',
      specs: 'Details',
      download: 'Download',
      switchLangAria: 'Sprache wechseln',
    },
    hero: {
      headlineTop: 'Reine Rust-Power.',
      headlineBottom: 'Liquid-Glass-Audio.',
      subtitle:
        'Ein nativer, lokaler Musikplayer für Windows & Linux (Arch, Ubuntu, Mint) — komplett in reinem Rust entwickelt. Mit AI DJ Automix, -14 LUFS Lautheitsnormalisierung, 5-Band-Echtzeit-EQ, synchronisierten Karaoke-Lyrics und eigenem FFT-Visualizer.',
      platformSwitchAria: 'Betriebssystem auswählen',
      windowsTab: 'Windows',
      linuxTab: 'Linux',
      downloadCta: 'Für Windows herunterladen',
      githubCta: 'GitHub',
      linuxDebCta: 'Ubuntu / Mint (.deb)',
      linuxArchCta: 'Arch Linux (.pkg.tar.zst)',
      linuxGuideLink: 'Linux Installationsanleitung',
      linuxTarballLink: 'Universal .tar.gz',
      platformMeta: 'Windows 10/11 64-Bit',
      linuxPlatformMeta: 'Linux x86_64 · Arch / Ubuntu / Mint',
      licenseMeta: 'Kostenlos & Open Source · MIT',
      previewAlt: 'Rustify Desktop-Musikplayer Hauptansicht',
      previewLabel: 'Rustify · Monochrome Liquid Glass UI',
      previewStatus: 'Native Engine',
    },
    stats: [
      { value: '< 30 MB', label: 'RAM-Verbrauch' },
      { value: '100%', label: 'Reines Rust Nativ' },
      { value: '-14 LUFS', label: 'Studio-Lautheit' },
      { value: '0%', label: 'Electron oder Cloud' },
    ],
    features: {
      eyebrow: 'KERNARCHITEKTUR',
      title: 'Entwickelt für kompromisslosen lokalen Sound.',
      subtitle:
        'Jede Millisekunde Audio-DSP, Beat-Analyse und UI-Rendering läuft nativ auf deinem PC — ganz ohne Browser-Ballast.',
      items: [
        {
          id: 'rust-ui',
          span: 'wide',
          tag: 'NATIVE ENGINE',
          title: 'Pure Rust & Liquid Glass UI',
          description:
            'Sofortiger Start, flüssiges 60+ FPS Rendering und unter 30 MB RAM auf Windows und Linux. Kein Electron, kein Chromium-Overhead — verpackt in einer ruhigen, monochromen Obsidian-Glass-Oberfläche.',
          highlights: ['< 30 MB RAM', 'Kein Electron', 'Windows & Linux'],
        },
        {
          id: 'lufs',
          span: 'normal',
          tag: 'ITU-R BS.1770',
          title: 'Lautheitsnormalisierung (-14 LUFS)',
          description:
            'Präzise Studio-Lautheitsmessung hält jeden Track automatisch auf konstanten -14 LUFS — ohne ständiges Nachregeln der Lautstärke.',
        },
        {
          id: 'eq',
          span: 'normal',
          tag: 'ECHTZEIT-DSP',
          title: '5-Band-Echtzeit-Equalizer',
          description:
            'Regle Sub-Bass bis klare Höhen live ohne Latenz — inklusive abgestimmter Bass-Boost- und Hardstyle-Presets per Klick.',
        },
        {
          id: 'automix',
          span: 'wide',
          tag: 'BEAT-THIS + CAMELOT WHEEL',
          title: 'AI DJ Automix',
          description:
            'Neuronales Beat-Grid-Phase-Locking trifft auf harmonisches Camelot-Wheel-Key-Chaining und einen präzisen 220-Hz-Bass-Swap-EQ für nahtlose Übergänge in Club-Qualität.',
          highlights: ['Beat-Grid Phase Lock', 'Camelot Key-Chaining', '220 Hz Bass-Swap EQ'],
        },
        {
          id: 'lyrics',
          span: 'normal',
          tag: 'LRCLIB SYNC',
          title: 'Synchronisierte Karaoke-Lyrics',
          description:
            'Live mitscrollende Songtexte über LRCLIB — ein Klick auf eine Zeile springt sofort zur exakten Stelle im Track.',
        },
        {
          id: 'visualizer',
          span: 'normal',
          tag: 'EIGENES FFT-FENSTER',
          title: 'Integrierter AudioVisualizer',
          description:
            'Eigenes, hochflüssiges FFT-Spektrumfenster für App-Audio, System-Audio-Loopback (WASAPI / PipeWire) oder Mikrofoneingang.',
        },
        {
          id: 'discord',
          span: 'normal',
          tag: 'SYSTEMINTEGRATION',
          title: 'Discord RPC, SMTC & MPRIS',
          description:
            'Zeige deinen aktuellen Song sauber in Discord und steuere die Wiedergabe direkt über Windows-SMTC- und Linux-MPRIS-Medientasten.',
        },
        {
          id: 'local',
          span: 'full',
          tag: '100% LOKAL & PRIVAT',
          title: 'Deine Bibliothek bleibt auf deinem PC',
          description:
            'Keine Cloud, kein Tracking. Volle Unterstützung für MP3, FLAC, WAV, OGG und M4A mit schnellem Ordner-Import, Cover Manager und schwebendem Mini-Widget.',
          formats: ['MP3', 'FLAC', 'WAV', 'OGG', 'M4A', 'Ordner-Import', 'Cover Manager', 'Mini-Widget'],
        },
      ],
    },
    showcase: {
      eyebrow: 'VORSCHAU & SCHNELLSTART',
      title: 'Ordner wählen. Play drücken.',
      subtitle:
        'Keine Abos, kein Account-Zwang, kein Import-Stress. Rustify liest deine vorhandenen lokalen Musikordner direkt ein.',
      previewAlt: 'Rustify Lokaler Ordner-Import Ansicht',
      previewTag: 'Lokaler Ordner-Import',
      conventionLabel: 'Smarte Dateinamen-Erkennung',
      conventionValue: 'Titel - Künstler.mp3',
      conventionHint: 'Liest eingebettete ID3/FLAC-Tags automatisch aus und nutzt Dateinamen als sauberen Fallback.',
      steps: [
        {
          num: '01',
          title: 'Herunterladen & installieren',
          description:
            'Starte Rustify-Setup.exe unter Windows 10/11 oder installiere das native Linux-Paket (.deb, .pkg.tar.zst oder .tar.gz) in Sekunden.',
        },
        {
          num: '02',
          title: 'Musikordner importieren',
          description:
            'Wähle einen beliebigen lokalen Ordner mit MP3-, FLAC-, WAV-, OGG- oder M4A-Dateien. Cover und Metadaten erscheinen sofort.',
        },
        {
          num: '03',
          title: 'Mixen, abstimmen & visualisieren',
          description:
            'Aktiviere AI DJ Automix, stelle den 5-Band-EQ ein, nutze Live-Lyrics oder öffne das FFT-AudioVisualizer-Fenster.',
        },
      ],
    },
    linuxInstall: {
      eyebrow: 'LINUX-PAKETE & INSTALLATION',
      title: 'Native Linux-Builds. In Sekunden installiert.',
      subtitle:
        'Offizielle x86_64-Pakete mit App-Menü-Integration, PipeWire/PulseAudio, MPRIS-Medientasten und Wayland/X11-Support.',
      tabsAria: 'Linux-Distribution auswählen',
      downloadBtn: 'Herunterladen',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      copyAria: 'Befehl in die Zwischenablage kopieren',
      packageLabel: 'Paket',
      distros: {
        arch: {
          tab: 'Arch Linux',
          title: 'Arch Linux',
          subtitle: 'Arch / Manjaro / EndeavourOS / CachyOS',
          formatBadge: '.pkg.tar.zst',
          steps: [
            {
              num: '01',
              title: 'Paket über pacman installieren',
              desc: 'Installiert die native Rustify-Binary, den Desktop-Eintrag und Icons sauber über pacman.',
              cmdKey: 'archInstall',
            },
            {
              num: '02',
              title: 'System-Audio-Visualizer (optional)',
              desc: 'Nur für Desktop-System-Audio-Loopback im FFT-Visualizer nötig — auf modernen Arch/PipeWire-Systemen bereits vorinstalliert.',
              cmdKey: 'archPipewire',
            },
            {
              num: '03',
              title: 'Rustify starten',
              desc: 'Über das App-Menü („Rustify“) oder direkt im Terminal starten.',
              cmdKey: 'launch',
            },
          ],
        },
        ubuntu: {
          tab: 'Ubuntu',
          title: 'Ubuntu',
          subtitle: '22.04 LTS / 24.04 LTS+',
          formatBadge: '.deb',
          steps: [
            {
              num: '01',
              title: '.deb-Paket über apt installieren',
              desc: 'Löst automatisch alle benötigten Systemabhängigkeiten auf und installiert Rustify.',
              cmdKey: 'debInstall',
            },
            {
              num: '02',
              title: 'Rustify starten',
              desc: 'Über den Anwendungsstarter („Rustify“) oder direkt im Terminal öffnen.',
              cmdKey: 'launch',
            },
          ],
        },
        mint: {
          tab: 'Linux Mint',
          title: 'Linux Mint',
          subtitle: '21.x / 22.x Cinnamon, MATE, XFCE',
          formatBadge: '.deb',
          steps: [
            {
              num: '01',
              title: 'Einfach (GUI)',
              desc: 'Doppelklick auf die heruntergeladene .deb-Datei → „Paket installieren“ (GDebi) — ganz ohne Terminal.',
            },
            {
              num: '02',
              title: 'Alternativ im Terminal',
              desc: 'Schnelle Installation inklusive automatischer Abhängigkeiten per Befehl:',
              cmdKey: 'debInstall',
            },
            {
              num: '03',
              title: 'Rustify starten',
              desc: 'Start über das Linux-Mint-Menü → Sound & Video → Rustify oder direkt per Terminal.',
              cmdKey: 'launch',
            },
          ],
        },
        tarball: {
          tab: 'Universal (.tar.gz)',
          title: 'Universal Linux',
          subtitle: 'Fedora, openSUSE, Debian & jede x86_64-Distro',
          formatBadge: '.tar.gz',
          steps: [
            {
              num: '01',
              title: 'Entpacken & lokal installieren (ohne Root)',
              desc: 'Installiert sauber nach ~/.local/bin inklusive App-Menü-Eintrag — ganz ohne sudo-Rechte.',
              cmdKey: 'tarballInstall',
            },
            {
              num: '02',
              title: 'Rustify starten',
              desc: 'Über das App-Menü („Rustify“) oder direkt per Terminal starten.',
              cmdKey: 'launch',
            },
          ],
        },
      },
    },
    lyricsShowcase: {
      eyebrow: 'SYNCHRONISIERTE LYRICS & VISUALIZER',
      title: 'Live-Songtexte im Player und direkt im AudioVisualizer.',
      subtitle:
        'Öffne die volle Karaoke-Ansicht über die Player-Bar oder blende vorherige, aktuelle und nächste Zeile zentriert im AudioVisualizer ein (Oben oder Unten).',
      appCardTitle: 'Karaoke-Lyrics in der App',
      appCardTag: 'Click-to-Seek · LRCLIB',
      appCardDesc:
        'Lädt und cached automatisch getimte .lrc-Songtexte, scrollt synchron mit und springt per Klick auf jede Zeile exakt zur Stelle.',
      appAlt: 'Rustify Synchronisierte Lyrics Ansicht in der App',
      vizCardTitle: 'AudioVisualizer 3-Zeilen-Overlay',
      vizCardTag: 'Oben / Unten · Umschaltbar',
      vizCardDesc:
        'Zentrierte Live-Lyrics direkt im 60+ FPS FFT-Fenster — vorherige und nächste Zeile dezent grau, aktuelle Zeile groß und gestochen scharf.',
      vizAlt: 'Rustify AudioVisualizer mit 3-Zeilen-Lyrics-Overlay',
    },
    specs: {
      eyebrow: 'STEUERUNG & DATEN',
      title: 'Gemacht für deinen täglichen Desktop-Flow.',
      shortcutsTitle: 'Steuerung & Tastenkürzel',
      shortcuts: [
        { keys: 'Leertaste', action: 'Play / Pause' },
        { keys: '← / →', action: 'Spulen oder Titel wechseln' },
        { keys: '↑ / ↓', action: 'Lautstärke anpassen' },
        { keys: 'M', action: 'Stummschalten' },
        { keys: 'Medientasten', action: 'Native Windows-SMTC & Linux-MPRIS' },
      ],
      techTitle: 'Technische Daten',
      techItems: [
        { label: 'Betriebssystem', value: 'Windows 10 / 11 & Linux (Arch, Ubuntu, Mint)' },
        { label: 'Architektur', value: '100% Pure Rust Native Binary' },
        { label: 'Audioformate', value: 'MP3, FLAC, WAV, OGG, M4A' },
        { label: 'Lautheitsziel', value: '-14 LUFS (ITU-R BS.1770)' },
        { label: 'Automix-Engine', value: 'beat-this + Camelot Wheel' },
        { label: 'Lizenz', value: 'MIT Open Source' },
      ],
      faqTitle: 'Häufige Fragen',
      faqs: [
        {
          q: 'Wie läuft Rustify unter Linux (Wayland, PipeWire, MPRIS, Discord)?',
          a: 'Rustify läuft nativ unter Wayland und X11. Wiedergabe und der FFT-System-Audio-Visualizer funktionieren nahtlos mit PipeWire und PulseAudio, Hardware-Medientasten werden über MPRIS (D-Bus) unterstützt und Discord Rich Presence verbindet sich automatisch mit nativen Linux-Discord-Clients.',
        },
        {
          q: 'Warum zeigt Windows SmartScreen eine Warnung an?',
          a: 'Rustify ist ein kostenloses Open-Source-Projekt ohne kostenpflichtiges kommerzielles Code-Signing-Zertifikat. Klicke auf „Weitere Informationen“ → „Trotzdem ausführen“ oder prüfe und baue den Quellcode direkt über GitHub.',
        },
        {
          q: 'Funktioniert Rustify komplett offline?',
          a: 'Ja. Lokale Wiedergabe, 5-Band-EQ, -14 LUFS Lautheitsnormalisierung, AI DJ Automix und der FFT-AudioVisualizer laufen zu 100% offline. Internet wird optional nur für LRCLIB-Lyrics und Discord Rich Presence genutzt.',
        },
        {
          q: 'Wie funktionieren die AI DJ Automix Übergänge?',
          a: 'Rustify erkennt exakte Beat-Grids mit beat-this, kombiniert harmonische Tonarten über das Camelot Wheel, synchronisiert die Phase auf den Beat und blendet mit einem 220-Hz-Bass-Swap-EQ sauber über.',
        },
        {
          q: 'Verbraucht Rustify wirklich weniger als 30 MB RAM?',
          a: 'Ja. Da Rustify direkt in nativen Maschinencode kompiliert wird und ohne Electron oder eingebetteten Browser auskommt, liegt der Arbeitsspeicherbedarf typischerweise unter 30 MB.',
        },
      ],
    },
    cta: {
      badge: 'KOSTENLOS & OPEN SOURCE',
      title: 'Bereit für lokalen Sound ohne Ballast?',
      subtitle:
        'Lade den offiziellen Windows-Installer oder native Linux-Pakete direkt über GitHub Releases herunter — schnell, privat und in reinem Rust.',
      windowsCta: 'Windows (.exe)',
      debCta: 'Ubuntu / Mint (.deb)',
      archCta: 'Arch Linux (.pkg.tar.zst)',
      tarballLink: 'Universal .tar.gz',
      linuxGuideLink: 'Linux-Anleitung',
      githubCta: 'GitHub',
      releasesText: 'Alle Releases & Changelog ansehen',
    },
    footer: {
      tagline: 'Rustify · Entwickelt in Rust von',
      license: 'MIT-Lizenz',
      repoLink: 'Repository',
      releasesLink: 'Releases',
      authorLink: 'Ilay Schönknecht (Ilay-dev)',
    },
  },
};
