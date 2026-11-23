export const translations = {
  en: {
    meta: {
      title: 'Rustify — Native Rust Music Player for Windows',
    },
    nav: {
      features: 'Features',
      preview: 'Preview',
      install: 'Setup',
      specs: 'Specs',
      download: 'Download',
      switchLangAria: 'Switch language',
    },
    hero: {
      headlineTop: 'Pure Rust Speed.',
      headlineBottom: 'Liquid Glass Audio.',
      subtitle:
        'A native, offline-first local music player for Windows. Built in pure Rust with AI DJ Automix, -14 LUFS loudness normalization, a 5-band real-time EQ, synced karaoke lyrics, and a dedicated FFT visualizer.',
      downloadCta: 'Download Rustify',
      githubCta: 'GitHub',
      platformMeta: 'Windows 10/11 64-bit',
      licenseMeta: 'Free & Open Source · MIT',
      installerNote: 'Direct GitHub Release · Rustify-Setup.exe',
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
            'Instant startup, razor-sharp 60+ FPS rendering, and under 30 MB of RAM. Zero Electron, zero Chromium overhead — crafted with a calm monochrome obsidian glass aesthetic.',
          highlights: ['< 30 MB RAM', 'Zero Electron', 'Instant Launch'],
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
            'Pop out a dedicated high-framerate FFT spectrum window for App Audio, Windows System Audio Loopback, or Microphone input.',
        },
        {
          id: 'discord',
          span: 'normal',
          tag: 'SYSTEM INTEGRATION',
          title: 'Discord Rich Presence & SMTC',
          description:
            'Broadcast your current track cleanly to Discord while controlling playback seamlessly via Windows hardware media keys.',
        },
        {
          id: 'local',
          span: 'full',
          tag: 'OFFLINE-FIRST PRIVACY',
          title: '100% Local & Private Library',
          description:
            'Your music never leaves your drive. Full support for MP3, FLAC, WAV, OGG, and M4A with instant PC folder import, built-in Cover Manager, and a floating Mini-Widget.',
          formats: ['MP3', 'FLAC', 'WAV', 'OGG', 'M4A', 'PC Folder Import', 'Cover Manager', 'Mini-Widget'],
        },
      ],
    },
    showcase: {
      eyebrow: 'PREVIEW & QUICK START',
      title: 'Drop in your folder. Press play.',
      subtitle:
        'No subscriptions, no library lock-in, no account walls. Rustify reads your existing Windows folders and structures tracks cleanly.',
      previewAlt: 'Rustify Local Folder Import Interface',
      previewTag: 'Local Folder Import',
      conventionLabel: 'Smart filename detection',
      conventionValue: 'Title - Artist.mp3',
      conventionHint: 'Reads embedded ID3/FLAC tags automatically and falls back cleanly to filename parsing.',
      steps: [
        {
          num: '01',
          title: 'Download & Run Installer',
          description:
            'Download Rustify-Setup.exe directly from GitHub Releases and install in seconds on Windows 10 or 11 (64-bit).',
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
    specs: {
      eyebrow: 'CONTROLS & SPECS',
      title: 'Built for effortless desktop control.',
      shortcutsTitle: 'Controls & Shortcuts',
      shortcuts: [
        { keys: 'Space', action: 'Play / Pause' },
        { keys: '← / →', action: 'Seek or Skip Track' },
        { keys: '↑ / ↓', action: 'Adjust Volume' },
        { keys: 'M', action: 'Toggle Mute' },
        { keys: 'Media Keys', action: 'Native Windows SMTC Control' },
      ],
      techTitle: 'Technical Specifications',
      techItems: [
        { label: 'Operating System', value: 'Windows 10 / 11 (64-bit)' },
        { label: 'Architecture', value: '100% Pure Rust Native Binary' },
        { label: 'Audio Formats', value: 'MP3, FLAC, WAV, OGG, M4A' },
        { label: 'Loudness Target', value: '-14 LUFS (ITU-R BS.1770)' },
        { label: 'Automix Engine', value: 'beat-this + Camelot Wheel' },
        { label: 'License', value: 'MIT Open Source' },
      ],
      faqTitle: 'Quick Answers',
      faqs: [
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
        'Download the official Windows installer straight from GitHub Releases — fast, private, and built in pure Rust.',
      downloadCta: 'Download Rustify-Setup.exe',
      githubCta: 'View on GitHub',
      releasesText: 'View all releases & changelog',
    },
    footer: {
      tagline: 'Rustify · Built in Rust by',
      license: 'MIT License',
      repoLink: 'Repository',
      releasesLink: 'Releases',
      authorLink: 'Ilay-dev',
    },
  },

  de: {
    meta: {
      title: 'Rustify — Nativer Rust-Musikplayer für Windows',
    },
    nav: {
      features: 'Features',
      preview: 'Vorschau',
      install: 'Installation',
      specs: 'Details',
      download: 'Download',
      switchLangAria: 'Sprache wechseln',
    },
    hero: {
      headlineTop: 'Reine Rust-Power.',
      headlineBottom: 'Liquid-Glass-Audio.',
      subtitle:
        'Ein nativer, lokaler Musikplayer für Windows — komplett in reinem Rust entwickelt. Mit AI DJ Automix, -14 LUFS Lautheitsnormalisierung, 5-Band-Echtzeit-EQ, synchronisierten Karaoke-Lyrics und eigenem FFT-Visualizer.',
      downloadCta: 'Rustify herunterladen',
      githubCta: 'GitHub',
      platformMeta: 'Windows 10/11 64-Bit',
      licenseMeta: 'Kostenlos & Open Source · MIT',
      installerNote: 'Direkter GitHub-Release · Rustify-Setup.exe',
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
            'Sofortiger Start, flüssiges 60+ FPS Rendering und unter 30 MB RAM. Kein Electron, kein Chromium-Overhead — verpackt in einer ruhigen, monochromen Obsidian-Glass-Oberfläche.',
          highlights: ['< 30 MB RAM', 'Kein Electron', 'Sofort startklar'],
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
            'Eigenes, hochflüssiges FFT-Spektrumfenster für App-Audio, Windows-System-Audio-Loopback oder Mikrofoneingang.',
        },
        {
          id: 'discord',
          span: 'normal',
          tag: 'SYSTEMINTEGRATION',
          title: 'Discord Rich Presence & SMTC',
          description:
            'Zeige deinen aktuellen Song sauber in Discord und steuere die Wiedergabe direkt über Windows-Medientasten.',
        },
        {
          id: 'local',
          span: 'full',
          tag: '100% LOKAL & PRIVAT',
          title: 'Deine Bibliothek bleibt auf deinem PC',
          description:
            'Keine Cloud, kein Tracking. Volle Unterstützung für MP3, FLAC, WAV, OGG und M4A mit schnellem PC-Ordner-Import, Cover Manager und schwebendem Mini-Widget.',
          formats: ['MP3', 'FLAC', 'WAV', 'OGG', 'M4A', 'PC-Ordner-Import', 'Cover Manager', 'Mini-Widget'],
        },
      ],
    },
    showcase: {
      eyebrow: 'VORSCHAU & INSTALLATION',
      title: 'Ordner wählen. Play drücken.',
      subtitle:
        'Keine Abos, kein Account-Zwang, kein Import-Stress. Rustify liest deine vorhandenen Windows-Musikordner direkt ein.',
      previewAlt: 'Rustify Lokaler Ordner-Import Ansicht',
      previewTag: 'Lokaler Ordner-Import',
      conventionLabel: 'Smarte Dateinamen-Erkennung',
      conventionValue: 'Titel - Künstler.mp3',
      conventionHint: 'Liest eingebettete ID3/FLAC-Tags automatisch aus und nutzt Dateinamen als sauberen Fallback.',
      steps: [
        {
          num: '01',
          title: 'Installer herunterladen & starten',
          description:
            'Lade Rustify-Setup.exe direkt über GitHub Releases herunter und installiere Rustify in Sekunden auf Windows 10/11 (64-Bit).',
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
    specs: {
      eyebrow: 'STEUERUNG & DATEN',
      title: 'Gemacht für deinen täglichen Desktop-Flow.',
      shortcutsTitle: 'Steuerung & Tastenkürzel',
      shortcuts: [
        { keys: 'Leertaste', action: 'Play / Pause' },
        { keys: '← / →', action: 'Spulen oder Titel wechseln' },
        { keys: '↑ / ↓', action: 'Lautstärke anpassen' },
        { keys: 'M', action: 'Stummschalten' },
        { keys: 'Medientasten', action: 'Native Windows-SMTC-Steuerung' },
      ],
      techTitle: 'Technische Daten',
      techItems: [
        { label: 'Betriebssystem', value: 'Windows 10 / 11 (64-Bit)' },
        { label: 'Architektur', value: '100% Pure Rust Native Binary' },
        { label: 'Audioformate', value: 'MP3, FLAC, WAV, OGG, M4A' },
        { label: 'Lautheitsziel', value: '-14 LUFS (ITU-R BS.1770)' },
        { label: 'Automix-Engine', value: 'beat-this + Camelot Wheel' },
        { label: 'Lizenz', value: 'MIT Open Source' },
      ],
      faqTitle: 'Häufige Fragen',
      faqs: [
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
        'Lade den offiziellen Windows-Installer direkt über GitHub Releases herunter — schnell, privat und in reinem Rust.',
      downloadCta: 'Rustify-Setup.exe herunterladen',
      githubCta: 'Auf GitHub ansehen',
      releasesText: 'Alle Releases & Changelog ansehen',
    },
    footer: {
      tagline: 'Rustify · Entwickelt in Rust von',
      license: 'MIT-Lizenz',
      repoLink: 'Repository',
      releasesLink: 'Releases',
      authorLink: 'Ilay-dev',
    },
  },
};
