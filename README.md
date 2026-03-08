# Cupcake

> Voice-powered accessibility agent making the web accessible to everyone, especially for blind and visually impaired users.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/badge/GitHub-Manavarya09-181717?logo=github)](https://github.com/Manavarya09/cupcake)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Electron](https://img.shields.io/badge/Electron-33.3-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)
[![Status](https://img.shields.io/badge/Status-Active%20Development-green)]()

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Quick Start](#quick-start)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Architecture](#architecture)
- [Configuration](#configuration)
- [API Integration](#api-integration)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Overview

Cupcake is a revolutionary accessibility application that empowers blind and visually impaired users to navigate and interact with any website using only their voice. By combining cutting-edge speech recognition, intelligent audio feedback, and smart content summarization, Cupcake transforms the web browsing experience into an intuitive, voice-controlled interface.

**Mission:** To break down digital barriers and create a truly inclusive web for everyone, regardless of visual ability.

### Why Cupcake?

- ✨ **Complete Voice Control** – No keyboard shortcuts to memorize, just speak naturally
- ✨ **Intelligent Context Awareness** – Understands page structure and content relevance
- ✨ **Lightning Fast** – Optimized for minimal latency and responsive interactions
- ✨ **Privacy Focused** – All API keys encrypted and stored locally
- ✨ **Developer Friendly** – Well-documented codebase with TypeScript strict mode

## Key Features

| Feature | Description |
|---------|-------------|
| **Voice Navigation** | Control websites entirely through natural voice commands |
| **Speech Recognition** | Advanced accuracy with OpenAI Whisper technology |
| **Audio Feedback** | High-quality text-to-speech for all interactions |
| **Smart Summaries** | AI-powered page content summarization |
| **Global Hotkeys** | Quick activation with system-wide keyboard shortcuts |
| **Session Persistence** | Remembers your preferences and API keys securely |
| **Real-Time Sync** | WebSocket integration for live backend communication |
| **Multi-Window** | Windows, macOS, and Linux support |

## Quick Start

### 60-Second Setup

```bash
# 1. Clone the repository
git clone https://github.com/Manavarya09/cupcake.git
cd cupcake

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env

# 4. Start development
npm run dev
```

**That's it!** Your Electron app with React frontend will launch automatically.

## Tech Stack

### Core Technologies

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Desktop** | Electron 33.3+ | Cross-platform desktop framework |
| **Frontend** | React 19.0+ | Modern UI library |
| **Language** | TypeScript 5.7+ | Type-safe JavaScript |
| **Styling** | Tailwind CSS 4.0+ | Utility-first CSS framework |
| **Build** | Vite 6.0+ | Lightning-fast bundler |
| **Hotkeys** | uiohook-napi 1.5+ | Global system hotkey capture |

### Service Integrations

| Service | Function |
|---------|----------|
| OpenAI Whisper | Speech-to-text recognition |
| Text-to-Speech | Voice synthesis & output |
| OpenClaw | AI backend services |
| WebSocket | Real-time bidirectional communication |

## Project Structure

```
cupcake/
│
├── electron/                    # Desktop application logic
│   ├── main/
│   │   ├── index.ts            # Application entry point
│   │   ├── windowManager.ts     # Window lifecycle management
│   │   ├── hotkeyManager.ts     # Global hotkey handler
│   │   ├── ipcHandlers.ts       # Inter-process communication
│   │   ├── managers/            # Business logic managers
│   │   │   ├── sessionManager.ts
│   │   │   ├── apiKeyManager.ts
│   │   │   └── openclawManager.ts
│   │   ├── services/            # External service wrappers
│   │   │   ├── whisperService.ts
│   │   │   ├── ttsService.ts
│   │   │   ├── summarizerService.ts
│   │   │   └── openclawClient.ts
│   │   └── utils/               # Helper utilities
│   │       ├── constants.ts
│   │       ├── deviceIdentity.ts
│   │       └── store.ts
│   └── preload/                 # IPC security bridge
│
├── src/                         # React frontend application
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # DOM entry point
│   ├── windows/                 # Window components
│   │   ├── sightlineBar/       # Main control UI
│   │   ├── config/             # Settings window
│   │   └── borderOverlay/      # Visual overlay
│   └── lib/                     # Frontend utilities
│       └── ipc.ts              # IPC bridge client
│
├── cupcake-app/                    # Marketing website
├── shared/                      # Shared TypeScript types
├── build/                       # Build configuration
├── scripts/                     # Setup & build scripts
│
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript config
├── vite.config.ts               # Build configuration
├── eslint.config.js             # Code quality
└── README.md                    # This file
```

## Installation

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or yarn/pnpm
- **macOS 10.13+** / **Windows 10+** / **Linux (Ubuntu 18.04+)**

### Step-by-Step Guide

#### 1. Clone Repository

```bash
git clone https://github.com/Manavarya09/cupcake.git
cd cupcake
```

#### 2. Install Dependencies

```bash
npm install
```

This installs all required packages including Electron, React, Vite, and service integrations.

#### 3. Environment Configuration

```bash
# Create environment file from template
cp .env.example .env

# Edit with your API credentials
# Required: OpenAI API key for Whisper
# Optional: OpenClaw service endpoint
```

#### 4. Build Native Modules (if needed)

```bash
npm run build:electron
```

#### 5. Optional: Bundle OpenClaw

```bash
npm run bundle-openclaw
```

## Development

### Starting the Development Server

```bash
npm run dev
```

This command:
1. Compiles TypeScript for Electron main process
2. Starts Vite dev server (`http://localhost:5173`)
3. Launches Electron with live reload
4. Enables hot-module replacement (HMR)

**Result:** Code changes instantly reflect in the running application.

### Building for Production

```bash
npm run build
```

Creates optimized bundles:
- `dist-electron/` – Compiled main process
- `dist/` – Optimized React bundle

### Preview Built Application

```bash
npm run preview
```

Launch the production build locally for testing.

### Available Scripts

```bash
npm run dev              # Development with hot reload
npm run build            # Production build
npm run preview          # Preview production build
npm run build:electron   # Compile main process only
npm run electron:dev     # Start Electron in dev mode
npm run bundle-openclaw  # Bundle OpenClaw SDK
```

## Architecture

### Application Flow

```
┌─────────────────────────────────────────────────────┐
│  Electron Main Process                              │
│  ┌──────────────────────────────────────────────┐   │
│  │ Window Manager                               │   │
│  │ - Creates/manages app windows                │   │
│  │ - Routes IPC messages                        │   │
│  └──────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────┐   │
│  │ Hotkey Manager                               │   │
│  │ - Global keyboard shortcuts                  │   │
│  │ - Voice activation triggers                  │   │
│  └──────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────┐   │
│  │ Services Layer                               │   │
│  │ - Whisper (speech recognition)               │   │
│  │ - TTS (text-to-speech)                       │   │
│  │ - Summarizer (content analysis)              │   │
│  │ - OpenClaw Client (backend communication)    │   │
│  └──────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────┐   │
│  │ Manager Layer                                │   │
│  │ - Session (user state)                       │   │
│  │ - API Keys (secure storage)                  │   │
│  │ - OpenClaw (service integration)             │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
           ↕ IPC Bridge (Preload)
┌─────────────────────────────────────────────────────┐
│  React Frontend (Renderer Process)                  │
│  ┌──────────────────────────────────────────────┐   │
│  │ Cupcake Bar Window                           │   │
│  │ - Main control interface                     │   │
│  │ - Waveform visualization                     │   │
│  │ - Real-time feedback                         │   │
│  └──────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────┐   │
│  │ Config Window                                │   │
│  │ - Settings management                        │   │
│  │ - API key configuration                      │   │
│  └──────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────┐   │
│  │ Border Overlay                               │   │
│  │ - Visual accessibility indicators            │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

### Security Model

- **Process Isolation** – Preload script enforces strict boundaries
- **No Remote Code** – Never load untrusted code as remote
- **Encrypted Storage** – API keys stored securely with Electron Store
- **Type Safety** – TypeScript strict mode prevents common vulnerabilities

## Configuration

### Configuration Files

| File | Purpose | Scope |
|------|---------|-------|
| `tsconfig.json` | TypeScript compiler options | Root |
| `tsconfig.app.json` | App-specific TS config | React |
| `electron/tsconfig.json` | Electron TS configuration | Main process |
| `vite.config.ts` | Build tool configuration | Bundling |
| `eslint.config.js` | Code quality rules | Linting |
| `.env.example` | Environment template | Secrets |

### Environment Variables

```env
# Required
VITE_DEV_SERVER_URL=http://localhost:5173

# API Keys (add your credentials)
OPENAI_API_KEY=sk-...
OPENCLAW_API_KEY=...
OPENCLAW_ENDPOINT=https://api.openclaw.io

# Optional Settings
LOG_LEVEL=info
ENABLE_METRICS=true
```

## API Integration

### Services

#### OpenAI Whisper
- **Purpose:** Speech-to-text recognition
- **Features:** Multi-language support, high accuracy, offline capable
- **API Key Required:** Yes

#### Text-to-Speech
- **Purpose:** Audio output generation
- **Features:** Customizable rate, tone, language support
- **Configuration:** Embedded service

#### OpenClaw
- **Purpose:** AI-powered backend services
- **Features:** Custom commands, advanced processing
- **Configuration:** Optional

#### WebSocket
- **Purpose:** Real-time bidirectional communication
- **Features:** Live updates, streaming data
- **Configuration:** Custom endpoint

## Roadmap

### Phase 1: Core (Current)
- Voice recognition & control
- Basic navigation commands
- TTS output

### Phase 2: Intelligence
- Advanced page understanding
- Custom command learning
- Context-aware assistance

### Phase 3: Expansion
- Browser extension support
- Mobile companion app
- Multi-language support

### Phase 4: Community
- Plugin system
- User feedback integration
- Open-source community building

## Development Guidelines

### Code Style

```typescript
// Use TypeScript strict mode
// Prefer interfaces over types
// Write descriptive variable names
// Keep functions focused and small
```

### Best Practices

1. **Type Safety** – No `any` types; use proper generics
2. **Error Handling** – Use try-catch for async operations
3. **Testing** – Write unit tests for business logic
4. **Documentation** – Comment complex algorithms
5. **Performance** – Profile before optimizing

### Commit Standards

We follow conventional commits:

```
feat: add new feature
fix: resolve bug
chore: maintenance tasks
docs: documentation updates
```

## Troubleshooting

### Development Issues

#### Port 5173 Already in Use

```bash
# Find process using the port
lsof -i :5173

# Kill the process
kill -9 <PID>
```

#### Electron Build Fails

```bash
# Clear build cache and rebuild
rm -rf dist-electron
npm run build:electron
```

#### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### Hot Reload Not Working

```bash
# Restart dev server
npm run dev
```

### Runtime Issues

#### High Memory Usage

- Close unnecessary browser tabs
- Reduce audio buffer size in settings
- Disable auto-summarization if not needed

#### Poor Speech Recognition

- Check microphone settings
- Ensure OpenAI API key is valid
- Verify internet connection
- Try speaking more clearly

#### TTS Output Issues

- Check system audio settings
- Verify TTS service endpoint
- Try restarting the application

## Contributing

We welcome contributions from the community! Here's how to get started:

### Before You Start

1. Check [Issues](https://github.com/Manavarya09/cupcake/issues) for existing discussions
2. Fork the repository
3. Create a feature branch

```bash
git checkout -b feature/your-amazing-feature
```

### Making Changes

1. Write clean, tested code
2. Follow our coding standards
3. Update relevant documentation
4. Create descriptive commit messages

```bash
git add .
git commit -m "feat: describe your amazing feature"
git push origin feature/your-amazing-feature
```

### Opening a Pull Request

1. Provide a clear description of changes
2. Include screenshots/recordings if UI changes
3. Link related issues
4. Respond to review feedback

## License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) file for details.

Users are free to use, modify, and distribute this software, provided they include the original license and copyright notice.

## Support

### Getting Help

- **Issues & Bugs** – [GitHub Issues](https://github.com/Manavarya09/cupcake/issues)
- **Discussions** – [GitHub Discussions](https://github.com/Manavarya09/cupcake/discussions)
- **Documentation** – Check the `/docs` folder for detailed guides

### Report a Bug

1. Check if the bug already exists
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs. actual behavior
   - Environment details (OS, Node version, etc.)

### Feature Requests

Create an issue with:
- Clear use case
- Expected behavior
- Suggested implementation (if any)

## Acknowledgments

Cupcake stands on the shoulders of incredible open-source projects:

- **[Electron](https://www.electronjs.org/)** – Desktop magic
- **[React](https://react.dev/)** – UI excellence
- **[Vite](https://vitejs.dev/)** – Lightning-fast builds
- **[TypeScript](https://www.typescriptlang.org/)** – Type safety
- **[OpenAI Whisper](https://openai.com/research/whisper/)** – Speech recognition
- **[Tailwind CSS](https://tailwindcss.com/)** – Beautiful styling

---

## 🎯 Our Vision

Cupcake is more than an app—it's a movement toward digital accessibility for all. By combining voice technology, AI, and thoughtful design, we're making the web a place where everyone can thrive, regardless of sight.

**Made with care for accessibility. Built by developers. For everyone.**

---

<div align="center">

**[GitHub](https://github.com/Manavarya09/cupcake) • [Issues](https://github.com/Manavarya09/cupcake/issues) • [Discussions](https://github.com/Manavarya09/cupcake/discussions)**

Questions? [Open an issue](https://github.com/Manavarya09/cupcake/issues/new) and we'll help!

</div>
