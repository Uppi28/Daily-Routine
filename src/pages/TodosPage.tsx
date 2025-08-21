import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ToonGuide } from '../components/ToonGuide';

type Todo = { id: string; title: string; done: boolean; rewardXp: number };

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: 'Brush teeth', done: false, rewardXp: 5 },
    { id: '2', title: 'Make bed', done: false, rewardXp: 5 },
  ]);
  const [toonMessages, setToonMessages] = useState<{ id: string; text: string; autoCloseMs?: number }[]>([]);

  function celebrate() {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
  }

  function completeTodo(id: string) {
    setTodos((ts) => ts.map((t) => (t.id === id ? { ...t, done: true } : t)));
    celebrate();
    setToonMessages((ms) => [
      ...ms,
      { id: crypto.randomUUID(), text: 'Great job! You earned 5 XP and a shiny sticker!', autoCloseMs: 3500 },
    ]);
  }

  function addTodo() {
    const title = prompt('What would you like to do?');
    if (!title) return;
    setTodos((ts) => [...ts, { id: crypto.randomUUID(), title, done: false, rewardXp: 5 }]);
  }

  return (
    <div className="screen">
      <header className="header">
        <h1>Today’s To‑Dos</h1>
        <button className="btn add" onClick={addTodo}>
          + Add
        </button>
      </header>

      <ul className="card-list">
        {todos.map((t) => (
          <motion.li
            key={t.id}
            className={`card todo ${t.done ? 'done' : ''}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <button
              className="check"
              aria-label={t.done ? 'Completed' : 'Mark done'}
              onClick={() => !t.done && completeTodo(t.id)}
              disabled={t.done}
            >
              {t.done ? '✅' : '⬜️'}
            </button>
            <span className="title">{t.title}</span>
            <span className="xp">+{t.rewardXp} XP</span>
          </motion.li>
        ))}
      </ul>

      <ToonGuide
        messageQueue={toonMessages}
        onDismiss={(id) => setToonMessages((ms) => ms.filter((m) => m.id !== id))}
      />
    </div>
  );
}