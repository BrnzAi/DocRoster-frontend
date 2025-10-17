# DocRoster - Angular Edition

DocRoster is now powered by **Angular 20** with a fully redesigned SCSS styling system. The project delivers an authentication experience (вход, регистрация, восстановление) and an immersive doctor search dashboard inspired by the original React + Tailwind prototype.

## ✨ Highlights

- **Angular 20 + Standalone Components** – Modern architecture without NgModules for simplified composition.
- **SCSS Design System** – Carefully crafted glassmorphism theme with reusable tokens and responsive layouts.
- **Complete Auth Flow** – Login, registration and password recovery screens with loading states and validation hints.
- **Search Workspace** – Rich dashboard with фильтрами, карточками врачей, уведомлениями и детальной карточкой специалиста.
- **Accessibility First** – Semantic markup, ARIA labels and keyboard friendly controls.

## 🏗 Project Structure

```
src/
├── app/
│   ├── app.component.{ts,html,scss}          # Root shell and navigation
│   └── components/
│       ├── auth/                              # Authentication screen
│       ├── register/                          # Registration form with terms
│       ├── recover/                           # Password recovery flow
│       └── search/                            # Search dashboard and doctor cards
├── assets/                                    # Brand assets and imagery
├── index.html                                 # Application entry template
├── main.ts                                    # Standalone bootstrap
├── styles.scss                                # Global tokens and resets
└── test.ts                                    # Angular testing bootstrap
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```

### Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/` to see the application.

### Production Build
```bash
npm run build
```

---

### Deploying to GitHub Pages

See [`guides/github-pages-deployment.md`](guides/github-pages-deployment.md) for end-to-end deployment steps, including how to build the dedicated `docs/` bundle and configure your repository settings.

## 🧪 Testing & Linting

Angular CLI scaffolding is ready for future automated tests and linting:

```bash
npm test      # Karma + Jasmine (config scaffolded)
npm run lint  # Placeholder for future lint rules
```

## 📐 Styling Philosophy

- Shared design tokens live in `styles.scss` using CSS custom properties.
- Component specific SCSS embraces BEM naming for clarity.
- Glassmorphism cards, subtle shadows and responsive clamps recreate the Tailwind look & feel without utilities.

## 📄 License

Released under the MIT License. Feel free to extend the Angular implementation to integrate real backend APIs, i18n or state management as next steps.
