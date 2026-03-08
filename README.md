# Cupcake

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Electron](https://img.shields.io/badge/Electron-33.3-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

## Overview

Cupcake is a powerful accessibility agent designed to make any website usable with just your voice. It enables blind users and those with visual impairments to navigate and interact with web content through voice commands and intelligent audio feedback.

## Key Features

- ✦ **Voice-First Interface** – Control websites entirely through natural voice commands
- ✦ **Real-Time Audio Processing** – Advanced speech recognition with OpenAI Whisper
- ✦ **Text-to-Speech Output** – High-quality voice feedback for all interactions
- ✦ **Smart Summarization** – Intelligently summarize page content for quick understanding
- ✦ **Cross-Platform** – Works on macOS with support for Windows and Linux
- ✦ **Hotkey Support** – Global hotkeys for quick activation and control
- ✦ **Session Management** – Persistent user sessions and API key handling
- ✦ **WebSocket Integration** – Real-time communication with backend services

## Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Runtime** | Electron | 33.3+ |
| **UI Framework** | React | 19.0+ |
| **Language** | TypeScript | 5.7+ |
| **Styling** | Tailwind CSS | 4.0+ |
| **Build Tool** | Vite | 6.0+ |
| **Speech Recognition** | OpenAI Whisper | Latest |
| **State Management** | Electron Store | 10.0+ |
| **Global Hotkeys** | uiohook-napi | 1.5+ |

## Project Structure

```
cupcake/
├── electron/                 # Electron main process and preload scripts
│   ├── main/                # Main process entry point
│   │   ├── managers/        # API, OpenClaw, and session managers
│   │   ├── services/        # Whisper, TTS, summarizer services
│   │   └── utils/           # Constants, device identity, store utilities
│   └── preload/             # Preload scripts for IPC security
├── src/                      # React frontend application
│   ├── windows/             # Window components (BorderOverlay, Config, SightlineBar)
│   └── lib/                 # IPC utilities
├── thea-app/                # Marketing website (React + Vite)
├── shared/                  # Shared TypeScript types
├── build/                   # Build artifacts and configuration
└── scripts/                 # Build and setup scripts
```

## Getting Started

### Prerequisites

- **Node.js** 18+ or latest LTS version
- **npm** 9+ or your preferred package manager
- **macOS** 10.13+ (currently primary target)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manavarya09/cupcake.git
   cd cupcake
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys and configuration
   ```

4. **Bundle OpenClaw (optional)**
   ```bash
   npm run bundle-openclaw
   ```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

This command:
- Compiles TypeScript for the Electron main process
- Starts the Vite dev server on `http://localhost:5173`
- Launches Electron with live reload capabilities

### Building

Create a production build:

```bash
npm run build
```

This generates:
- Compiled Electron main process in `dist-electron/`
- Optimized React bundle via Vite

### Preview

Build and preview the application:

```bash
npm run preview
```

## Architecture

### Electron Main Process

The main Electron process manages:
- **Window Management** – Creates and controls application windows
- **IPC Communication** – Secure inter-process communication with the renderer
- **Hotkey Management** – Global keyboard shortcuts for voice activation
- **Services** – Whisper (speech recognition), TTS (text-to-speech), summarization
- **API Integration** – OpenClaw and other backend services
- **Session Persistence** – User data and API key storage

### React Frontend

The frontend provides:
- **Cupcake Bar** – Main control interface with waveform visualization
- **Config Window** – Settings and API key management
- **Border Overlay** – Visual indicators for accessibility features
- **Cross-app Communication** – IPC bridge for secure electron interaction

## Configuration

Key configuration files:

| File | Purpose |
|------|---------|
| `tsconfig.json` | TypeScript configuration |
| `vite.config.ts` | Vite bundler configuration |
| `electron/tsconfig.json` | Electron-specific TypeScript config |
| `build/entitlements.mac.plist` | macOS security entitlements |
| `.env.example` | Environment variables template |

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with Electron |
| `npm run build` | Build for production |
| `npm run preview` | Build and preview the application |
| `npm run build:electron` | Compile Electron main process only |
| `npm run electron:dev` | Start Electron in dev mode |
| `npm run bundle-openclaw` | Bundle OpenClaw SDK |

## API Integration

Cupcake integrates with:

- **OpenAI Whisper** – Speech-to-text recognition
- **Text-to-Speech Services** – Voice output generation
- **OpenClaw** – Backend AI services
- Custom backend via WebSocket connections

## Environment Setup

Create a `.env` file with:

```env
VITE_DEV_SERVER_URL=http://localhost:5173
# Add your API keys and service endpoints
```

## Features in Detail

### Voice Recognition
Powered by OpenAI Whisper for accurate, context-aware speech recognition. Supports continuous listening and multi-turn conversations.

### Text-to-Speech
High-quality voice output with customizable speech rate and tone, optimized for accessibility standards.

### Accessibility
- WCAG compliant components
- Screen reader compatible
- Keyboard-only navigation
- Voice command support

### Performance
- Optimized bundling with Vite
- Efficient IPC communication
- Native module integration for system hotkeys
- Minimal memory footprint

## Development Guidelines

### Code Style

- **TypeScript** strict mode enabled
- **ESLint** with React plugin configured
- **Prettier** formatting (via ESLint)

### Type Safety

All code is fully typed with TypeScript. Avoid `any` types; use proper generics and interfaces.

### IPC Security

All inter-process communication is handled through the preload script. Never expose remote APIs directly to the renderer process.

## Troubleshooting

### Port 5173 Already in Use
```bash
# Kill the process using port 5173
lsof -i :5173
kill -9 <PID>
```

### Electron Build Fails
```bash
# Clear build artifacts and reinstall
rm -rf dist-electron
npm run build:electron
```

### Missing Dependencies
```bash
# Reinstall node modules
rm -rf node_modules package-lock.json
npm install
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes with clear messages
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License – see [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation in the codebase
- Review TypeScript types for API contracts

## Acknowledgments

Built with:
- [Electron](https://www.electronjs.org/) – Desktop application framework
- [React](https://react.dev/) – UI framework
- [Vite](https://vitejs.dev/) – Build tool
- [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript
- [OpenAI Whisper](https://openai.com/research/whisper/) – Speech recognition
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS

---

Made with care for accessibility.
