# Movie Search App 🎬

A responsive and modern React application for searching movies using the TMDB API, built with TypeScript, TailwindCSS, and React Query. It includes infinite scroll, keyword suggestions, and robust unit testing.

---

## 🔧 Tech Stack

- **React** + **TypeScript**
- **TailwindCSS** for styling
- **React Query** for data fetching and caching
- **Axios** for HTTP requests
- **Jest** + **React Testing Library** for unit tests
- **TMDB API** for movie and keyword data

---

## 🚀 Features

- 🔍 Search for movies with instant results
- 📖 Keyword suggestions using TMDB's keyword API
- 🖼 Lazy-loaded images and infinite scroll
- 🌐 Language name resolution from ISO code
- 📱 Responsive design with modern UI
- ✅ Full unit test coverage for components, hooks, and APIs

---

## 📂 Project Structure

```
app/
├── api/               # API clients and utilities
├── components/        # UI components (SearchBar, MovieCard, etc.)
├── hooks/             # Custom hooks (useMovies, useIntersectionObserver)
├── routes/            # Route-level components (e.g., Home)
├── data/              # Static data like language list
```

---

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage
```

Tested using:

- Unit tests for all components
- Hooks and API logic
- Jest environment configured with support for IntersectionObserver and async queries

---

## 📦 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file and add:

```env
VITE_TMDB_API_TOKEN=your_tmdb_token_here
```

4. **Start the dev server**

```bash
npm run dev
```

---

## ✨ Bonus Feature

- The app includes a **movie overview toggle**, allowing users to expand/collapse descriptions interactively.
- Search input provides **autocomplete keyword suggestions** powered by the TMDB API.

---

## 📄 License

MIT
