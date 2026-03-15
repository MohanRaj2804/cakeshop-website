# CakeShop Frontend

This is a React + Vite TypeScript frontend for the CakeShop project.

## Setup

1. Copy `.env.example` to `.env` and adjust `VITE_API_URL` if your backend isn't running on localhost:5000.
2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. A browser window should open at http://localhost:5173 (Vite default).

## Features & API

- Sign up and sign in forms call `/api/auth/register` and `/api/auth/login` using `src/services/api.ts`.
- Auth state is managed via `src/context/AuthContext.tsx` and stored in `localStorage`.
- Cakes page fetches `/api/cakes` and renders dynamic list; backend must supply JSON array of cakes.

## Scripts

- `npm run lint` -- runs eslint on project.
- `npm run build` -- builds the project for production.
- `npm run preview` -- preview built app.

## Notes

- API base URL is driven by `VITE_API_URL` environment variable.
- You can deploy separately; just ensure CORS is allowed on backend.
