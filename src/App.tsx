import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import TodosPage from './pages/TodosPage';
import ShoppingPage from './pages/ShoppingPage';
import ExpensesPage from './pages/ExpensesPage';
import MealsPage from './pages/MealsPage';
import DiaryPage from './pages/DiaryPage';

export default function App() {
  const { pathname } = useLocation();
  return (
    <div className="app-shell">
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/meals" element={<MealsPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="*" element={<Navigate to="/todos" replace />} />
        </Routes>
      </main>
      <nav className="bottom-nav" aria-label="Main navigation">
        <Link className={`nav-item ${pathname.startsWith('/todos') ? 'active' : ''}`} to="/todos">✅ To‑Dos</Link>
        <Link className={`nav-item ${pathname.startsWith('/shopping') ? 'active' : ''}`} to="/shopping">🛒 Shop</Link>
        <Link className={`nav-item ${pathname.startsWith('/expenses') ? 'active' : ''}`} to="/expenses">💰 Money</Link>
        <Link className={`nav-item ${pathname.startsWith('/meals') ? 'active' : ''}`} to="/meals">🍽️ Meals</Link>
        <Link className={`nav-item ${pathname.startsWith('/diary') ? 'active' : ''}`} to="/diary">🎨 Diary</Link>
      </nav>
    </div>
  );
}