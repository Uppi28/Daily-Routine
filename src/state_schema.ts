export type UserSettings = {
  theme: 'light' | 'dark';
  sounds: boolean;
  reducedMotion: boolean;
  notifications: boolean;
};

export type Todo = {
  id: string;
  title: string;
  done: boolean;
  dueDate?: string;
  rewardXp: number;
  createdAt: string;
  updatedAt: string;
};

export type ShoppingItem = {
  id: string;
  name: string;
  qty: number;
  categoryEmoji: string;
  done: boolean;
  createdAt: string;
};

export type Expense = {
  id: string;
  type: 'income' | 'spend';
  amount: number;
  note?: string;
  categoryEmoji?: string;
  createdAt: string;
};

export type MealEntry = {
  id: string;
  date: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  emoji: string;
  photoUrl?: string;
  notes?: string;
};

export type Sticker = { id: string; name: string; url: string };

export type DiaryEntry = {
  id: string;
  date: string;
  text?: string;
  stickers: Sticker[];
  moodEmoji?: string;
  promptId?: string;
};

export type Rewards = {
  xp: number;
  coins: number;
  streaks: { todosStreakDays: number };
  badges: string[];
};