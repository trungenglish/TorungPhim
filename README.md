# 🎬 Torung-Phim Web

Frontend project structure for **Torung-Phim**.  
This project follows a **feature-based architecture** for better scalability and maintainability.

---

## 📂 Folder Structure

```text
src/
  app/            # Application setup (store, routes, providers)
    store.ts      # Redux store or state management setup
    router.tsx    # Application routes
    providers/    # Global providers (theme, auth, query client, etc.)

  components/     # Reusable UI components across the app
    ui/           # Atomic UI components (Button, Input, Modal, etc.)
    constants/    # Global constants used across components

  features/       # Feature-based modules
    auth/         # Example feature: Authentication
      components/ # Feature-specific components
      constants/  # Feature-specific constants
      hooks/      # Feature-specific custom hooks
      services/   # API calls for the feature
      types/      # TypeScript types/interfaces for the feature
    movie/        # Another feature (e.g., Movie listing)

  hooks/          # Global custom hooks (used across multiple features)
    useLocalStorage.ts

  lib/            # Third-party or app-wide library configurations
    axiosClient.ts# Axios config instance
    i18n.ts       # Localization setup

  services/       # Global services (not tied to a single feature)
    uploadService.ts

  types/          # Global TypeScript types & interfaces
    User.ts
    ApiResponse.ts

  utils/          # Utility/helper functions
    formatDate.ts
    calculateDiscount.ts
    storage.ts

  index.tsx       # App entry point
```

## 🚀 Getting Started

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Start development server:
   ```sh
   pnpm dev
   ```
3. Build for production:
   ```sh
   pnpm build
   ```
