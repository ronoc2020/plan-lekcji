import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { listTasks, completeTask, resetProgress, stats } from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/tasks', (_req, res) => res.json({ tasks: listTasks(), stats: stats() }));
app.post('/api/tasks/:id/complete', (req, res) => {
  const task = completeTask(Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Nie znaleziono zadania.' });
  res.json({ task, stats: stats() });
});
app.post('/api/progress/reset', (_req, res) => { resetProgress(); res.json({ stats: stats() }); });
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Plan lekcji działa na http://localhost:${port}`));
