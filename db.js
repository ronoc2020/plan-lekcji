import Database from 'better-sqlite3';

const db = new Database('data.sqlite');
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    subject TEXT NOT NULL,
    description TEXT NOT NULL,
    difficulty TEXT NOT NULL CHECK (difficulty IN ('Łatwy','Średni','Trudny')),
    points INTEGER NOT NULL DEFAULT 10,
    order_index INTEGER NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS completions (
    task_id INTEGER PRIMARY KEY,
    completed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(task_id) REFERENCES tasks(id) ON DELETE CASCADE
  );
`);

const count = db.prepare('SELECT COUNT(*) AS count FROM tasks').get().count;
if (!count) {
  const add = db.prepare('INSERT INTO tasks (title, subject, description, difficulty, points, order_index) VALUES (?, ?, ?, ?, ?, ?)');
  const seed = db.transaction(() => [
    ['Powtórka działań', 'Matematyka', 'Rozwiąż 5 krótkich działań bez kalkulatora.', 'Łatwy', 10, 1],
    ['Czytanie ze zrozumieniem', 'Język polski', 'Przeczytaj tekst i odpowiedz na pytania.', 'Łatwy', 10, 2],
    ['Ułamki w praktyce', 'Matematyka', 'Wykonaj działania na ułamkach zwykłych.', 'Średni', 20, 3],
    ['Eksperyment obserwacyjny', 'Przyroda', 'Opisz trzy zmiany zachodzące w wybranym doświadczeniu.', 'Średni', 20, 4],
    ['Mistrz logicznych zagadek', 'Logika', 'Rozwiąż zagadkę w maksymalnie 5 minut.', 'Trudny', 40, 5]
  ].forEach(add));
  seed();
}

export function listTasks() {
  return db.prepare(`SELECT t.*, c.completed_at AS completedAt FROM tasks t LEFT JOIN completions c ON c.task_id=t.id ORDER BY t.order_index`).all();
}
export function completeTask(id) {
  const task = db.prepare('SELECT * FROM tasks WHERE id=?').get(id);
  if (!task) return null;
  db.prepare('INSERT OR IGNORE INTO completions (task_id) VALUES (?)').run(id);
  return db.prepare(`SELECT t.*, c.completed_at AS completedAt FROM tasks t LEFT JOIN completions c ON c.task_id=t.id WHERE t.id=?`).get(id);
}
export function resetProgress() { db.prepare('DELETE FROM completions').run(); }
export function stats() {
  return db.prepare(`SELECT COUNT(t.id) total, COUNT(c.task_id) completed, COALESCE(SUM(CASE WHEN c.task_id IS NOT NULL THEN t.points ELSE 0 END),0) points FROM tasks t LEFT JOIN completions c ON c.task_id=t.id`).get();
}
