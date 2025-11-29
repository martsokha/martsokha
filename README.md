# Oleh Martsokha

Software engineer focused on AI infrastructure and data tooling. I build developer tools and backend systems, primarily using Rust for high-performance applications and web services.

## Current Work

### Privacy & Data Redaction Platform

Building [Nvisy](https://github.com/nvisycom) - A complete open-source redaction platform with SDKs, integrations, server infrastructure, web and desktop applications:

- **[Server](https://github.com/nvisycom/server)** - Rust backend with async processing pipelines for document redaction and PII detection
- **[Desktop App](https://github.com/nvisycom/desktop)** - Vue.js application with Tauri for cross-platform redaction workflows
- **Platform & Web App** - Complete redaction suite with API and web interface
- **SDKs & Integrations** - Client libraries and third-party integrations

### Data Scraping Infrastructure

Maintaining **[Spire](https://github.com/spire-rs/spire)** - A Rust toolkit for building high-performance web scrapers with concurrent request handling, automatic retries, and structured data extraction.

### AI SDKs

Building Rust SDKs for AI services to use in other projects:

- **[RunPod SDK](https://github.com/martsokha/runpod)** - Type-safe bindings for GPU compute orchestration, serverless deployments, and pod management
- **[Portkey SDK](https://github.com/martsokha/portkey)** - AI gateway client handling routing, fallbacks, and observability across multiple LLM providers

## Technical Focus

Most of my work involves:

- **Web Development in Rust** - Building APIs and backend services with axum and tokio
- **AI Infrastructure** - SDK development, API integrations, and observability tooling
- **Data Systems** - High-performance data processing, scraping, and ETL pipelines
- **Desktop Applications** - Cross-platform tools using Tauri and Vue.js

## This Website

Personal blog built with [Astro](https://astro.build). Writing about system design, Rust development, and building developer tools.

### Stack

- **Framework**: Astro 5 with Vue.js components
- **Styling**: TailwindCSS with custom design system
- **Syntax Highlighting**: Shiki with Catppuccin themes
- **Deployment**: Cloudflare Pages with GitHub Actions
- **Formatting**: Biome

### Running Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Links

- [Bluesky](https://bsky.app/profile/martsokha.com)
- [GitHub](https://github.com/martsokha)
- [LinkedIn](https://linkedin.com/in/martsokha)
- [Email](mailto:hello@martsokha.com)
