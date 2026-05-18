# Project Landing Page

This project is a monorepo containing a Strapi v5 backend and a Next.js frontend.

## Prerequisites

- Node.js (version 20 or higher)
- pnpm (for frontend)
- npm (for backend)

## Project Structure

- `server/`: Strapi v5 Headless CMS.
- `web/`: Next.js App Router frontend.

## Backend Setup (Strapi)

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env` and fill in the required values.
   ```bash
   cp .env.example .env
   ```

4. Import Seed Data (Important):
   This repository contains a database export so you don't have to populate the content from scratch. Run this command to import the data and images:
   ```bash
   npm run strapi import -f seed-data.tar.gz -- --force
   ```
   *(Please log in to the admin panel using the email and password provided separately).*

5. Run the development server:
   ```bash
   npm run dev
   ```
   The admin panel will be available at [http://localhost:1337/admin](http://localhost:1337/admin).

## Frontend Setup (Next.js)

1. Navigate to the web directory:

   ```bash
   cd web
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Configure environment variables:
   Create a `.env.local` file with the following content:

   ```env
   NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
   ```

4. Run the development server:
   ```bash
   pnpm run dev
   ```
   The website will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables

### Backend (.env)

- `HOST`: The host for the Strapi server (default: 0.0.0.0).
- `PORT`: The port for the Strapi server (default: 1337).
- `APP_KEYS`: Randomly generated keys for the application.
- `API_TOKEN_SALT`: Salt for API tokens.
- `ADMIN_JWT_SECRET`: Secret for admin JWT.
- `TRANSFER_TOKEN_SALT`: Salt for transfer tokens.
- `JWT_SECRET`: Secret for JWT.

### Frontend (.env.local)

- `NEXT_PUBLIC_STRAPI_API_URL`: The URL of the Strapi backend (default: http://localhost:1337).

## Development Guidelines

- Use Server Components by default.
- Adhere to the SCSS styling conventions and avoid TailwindCSS.
- Ensure proper error handling using Next.js error and loading boundaries.
