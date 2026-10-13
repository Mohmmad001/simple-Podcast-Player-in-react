# 🎧 Podcast Player

A React podcast player where you can listen to podcasts, browse the full list, and organize them into your own playlists.

## Features

- **Audio player:** play/pause, next/previous, seek bar with live current time, volume control
- **All Podcasts:** browse the full list and click any episode to play it
- **Playlists:** create and delete playlists, search for podcasts and add them to a playlist (duplicates are prevented)
- **Playlist playback:** click a podcast inside a playlist and the player switches to that playlist's queue
- **Routing:** switch between *All Podcasts* and *PlayLists* pages without a page reload

## Tech Stack

- React (functional components + Hooks)
- React Router DOM
- Context API
- Material UI Icons
- CSS (Flexbox)
- Vite

## What I Built / Concepts Used

- **State management with Context API:** one shared `InfoContext` holds the current track index, active list, playlists, and the original podcast list, so the player, list, and playlists stay in sync without prop drilling
- **React Hooks:** `useState` for UI and data state, `useEffect` for the playback timer (with interval cleanup), `useRef` to control the HTML5 `<audio>` element directly, `useContext` to consume shared state
- **Client-side routing:** `BrowserRouter`, `Routes`, `Route`, and `Link` for page navigation
- **Component composition:** reusable `Container` layout component using `props.children`, plus separate `Header`, `PodCastPlayer`, `PodCastList`, `PlayList`, and `SinglePlayList` components
- **Lists and keys:** dynamic rendering with `.map()` and stable `key`s
- **Immutable state updates:** spread operator, `map`, and `filter` for adding and removing playlists and podcasts
- **Controlled inputs:** playlist name input and live search-to-add filtering
- **Conditional rendering and styling:** play/pause icon toggle and active-track highlighting
- **HTML5 Audio API:** `play()`, `pause()`, `currentTime`, `duration`, `volume`, and `onLoadedMetadata`

## Project Structure

​```
src/
├── App.jsx              # Context provider, routes, initial data
├── main.jsx             # Entry point
├── All.jsx              # "All Podcasts" page
├── PlayList.jsx         # Playlists page
├── SinglePlayList.jsx   # Single playlist with search-to-add
├── PodCastPlayer.jsx    # Audio player controls
├── PodCastList.jsx      # Podcast list
├── Header.jsx           # Navigation bar
└── Container.jsx        # Layout wrapper
​```

## Getting Started

​```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run dev
​```

Place your `.mp3` files in `public/podcasts/` (named `podcast1.mp3`, `podcast2.mp3`, etc.) to match the sources in `App.jsx`.

## 🚧 Planned Features

- **File upload:** upload your own `.mp3` files, save them, and add them to playlists (this is the feature I'm currently working toward)
- Persist playlists with `localStorage`
- Auto-play the next track when one ends
- Responsive layout for mobile

## 🤝 Contributing & Contact

Contributions, ideas, and feedback are welcome! If you'd like to help build the file upload feature, open an issue or a pull request, or reach out to me directly:
through my email or linkedin in my github profile
