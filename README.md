# Daily Routine

A kid-friendly, fun productivity and creativity app with toons, popups, and gentle rewards. MVP includes:
- To‑Dos
- Shopping List
- Expenses (pocket money)
- Meal Tracker
- Creative Diary

## Quick start

1) Install dependencies
```bash
npm i
npm run dev
```

2) Create the GitHub repo (public) and push
```bash
bash create-repo.sh
```
- This creates `Uppi28/daily-routine` as public and pushes the code.
- Change `REPO_NAME` or `VISIBILITY` in `create-repo.sh` if desired.

3) Build
```bash
npm run build
npm run preview
```

## Tech

- React + TypeScript (Vite)
- React Router
- Framer Motion (animations)
- canvas-confetti (celebrations)
- Zustand (state) — to be wired as features grow

## Next steps

- Persist state (IndexedDB/Dexie)
- Add Shopping, Expenses, Meals, Diary functionality
- Add sounds, sticker picker, badges, and parental gate