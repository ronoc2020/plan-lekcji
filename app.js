const TASKS = [
  { id: "math-operations", title: "Powtórka działań", subject: "Matematyka", description: "Rozwiąż 5 krótkich działań bez kalkulatora.", difficulty: "Łatwy", points: 10 },
  { id: "polish-reading", title: "Czytanie ze zrozumieniem", subject: "Język polski", description: "Przeczytaj wybrany tekst i zapisz trzy najważniejsze informacje.", difficulty: "Łatwy", points: 10 },
  { id: "english-words", title: "Słownictwo na start", subject: "Angielski", description: "Naucz się 10 nowych słów i ułóż z nimi zdania.", difficulty: "Łatwy", points: 10 },
  { id: "history-date", title: "Historyczna data", subject: "Historia", description: "Wybierz jedno wydarzenie i wyjaśnij, dlaczego było ważne.", difficulty: "Łatwy", points: 10 },
  { id: "nature-observe", title: "Obserwator przyrody", subject: "Przyroda", description: "Znajdź trzy organizmy w swoim otoczeniu i opisz ich cechy.", difficulty: "Łatwy", points: 10 },
  { id: "geography-map", title: "Mapa świata", subject: "Geografia", description: "Wskaż na mapie pięć państw i ich stolice.", difficulty: "Łatwy", points: 10 },
  { id: "computer-files", title: "Porządek w plikach", subject: "Informatyka", description: "Utwórz foldery i uporządkuj w nich pięć przykładowych plików.", difficulty: "Łatwy", points: 10 },
  { id: "logic-pattern", title: "Znajdź regułę", subject: "Logika", description: "Uzupełnij ciąg: 2, 4, 8, 16, ... i wyjaśnij regułę.", difficulty: "Łatwy", points: 10 },
  { id: "fractions", title: "Ułamki w praktyce", subject: "Matematyka", description: "Wykonaj działania na ułamkach zwykłych i sprawdź wynik.", difficulty: "Średni", points: 20 },
  { id: "polish-parts", title: "Części mowy", subject: "Język polski", description: "W pięciu zdaniach zaznacz rzeczowniki, czasowniki i przymiotniki.", difficulty: "Średni", points: 20 },
  { id: "english-dialogue", title: "Krótki dialog", subject: "Angielski", description: "Napisz ośmiowersowy dialog po angielsku na zakupach.", difficulty: "Średni", points: 20 },
  { id: "history-timeline", title: "Oś czasu wydarzeń", subject: "Historia", description: "Ułóż pięć wydarzeń historycznych w poprawnej kolejności.", difficulty: "Średni", points: 20 },
  { id: "nature-experiment", title: "Eksperyment obserwacyjny", subject: "Przyroda", description: "Zaplanuj doświadczenie i zapisz hipotezę oraz przewidywany wynik.", difficulty: "Średni", points: 20 },
  { id: "geography-climate", title: "Klimat i krajobraz", subject: "Geografia", description: "Porównaj klimat dwóch wybranych regionów świata.", difficulty: "Średni", points: 20 },
  { id: "computer-algorithm", title: "Algorytm krok po kroku", subject: "Informatyka", description: "Zapisz algorytm przygotowania kanapki w co najmniej sześciu krokach.", difficulty: "Średni", points: 20 },
  { id: "logic-sudoku", title: "Logiczna układanka", subject: "Logika", description: "Rozwiąż prostą łamigłówkę Sudoku lub Kakuro.", difficulty: "Średni", points: 20 },
  { id: "math-equations", title: "Równania z niewiadomą", subject: "Matematyka", description: "Rozwiąż pięć równań liniowych i pokaż tok rozumowania.", difficulty: "Trudny", points: 40 },
  { id: "polish-argument", title: "Siła argumentu", subject: "Język polski", description: "Napisz krótką wypowiedź argumentacyjną na wybrany temat.", difficulty: "Trudny", points: 40 },
  { id: "english-story", title: "Opowiadanie po angielsku", subject: "Angielski", description: "Napisz historię na 120 słów, używając trzech czasów.", difficulty: "Trudny", points: 40 },
  { id: "history-source", title: "Analiza źródła", subject: "Historia", description: "Przeanalizuj źródło historyczne: autora, czas, cel i wiarygodność.", difficulty: "Trudny", points: 40 },
  { id: "geography-data", title: "Dane geograficzne", subject: "Geografia", description: "Porównaj dane ludnościowe trzech państw na prostym wykresie.", difficulty: "Trudny", points: 40 },
  { id: "computer-web", title: "Mini strona WWW", subject: "Informatyka", description: "Zaprojektuj prostą stronę HTML z nagłówkiem, tekstem i listą.", difficulty: "Trudny", points: 40 },
  { id: "logic-deduction", title: "Mistrz dedukcji", subject: "Logika", description: "Rozwiąż zagadkę logiczną, zapisując wszystkie przesłanki i wniosek.", difficulty: "Trudny", points: 40 }
];

const QUIZ_QUESTIONS = [
  { question: "Ile to jest 7 × 8?", answers: ["54", "56", "64", "48"], correct: "56" },
  { question: "Która planeta jest najbliżej Słońca?", answers: ["Mars", "Wenus", "Merkury", "Jowisz"], correct: "Merkury" },
  { question: "Jak nazywa się osoba opowiadająca wydarzenia w utworze?", answers: ["Narrator", "Bohater", "Autor", "Redaktor"], correct: "Narrator" },
  { question: "What is the opposite of ‘hot’?", answers: ["Warm", "Cold", "Fast", "Big"], correct: "Cold" },
  { question: "W którym kierunku zachodzi Słońce?", answers: ["Na wschodzie", "Na północy", "Na zachodzie", "Na południu"], correct: "Na zachodzie" },
  { question: "Ile boków ma sześciokąt?", answers: ["5", "6", "7", "8"], correct: "6" },
  { question: "Jak nazywa się najdłuższa rzeka w Polsce?", answers: ["Odra", "Wisła", "Warta", "Bug"], correct: "Wisła" },
  { question: "Co oznacza skrót CPU?", answers: ["Pamięć", "Procesor", "Dysk", "Monitor"], correct: "Procesor" },
  { question: "Ile wynosi 1/2 + 1/4?", answers: ["1/6", "2/6", "3/4", "1"], correct: "3/4" },
  { question: "Który gaz jest niezbędny ludziom do oddychania?", answers: ["Tlen", "Azot", "Hel", "Wodór"], correct: "Tlen" }
];

const TRUTH_QUESTIONS = [
  { question: "Woda zamarza w temperaturze 0°C.", correct: true },
  { question: "Stolicą Australii jest Sydney.", correct: false },
  { question: "Trójkąt ma zawsze trzy boki.", correct: true },
  { question: "HTML jest językiem programowania.", correct: false },
  { question: "Ziemia krąży wokół Słońca.", correct: true }
];

const STORAGE_KEYS = { completedTasks: "planLekcji.completedTasks.v2", quiz: "planLekcji.quizCompleted.v2", quizPoints: "planLekcji.quizPoints.v2", truth: "planLekcji.truthCompleted.v2", truthPoints: "planLekcji.truthPoints.v2" };
const UNLOCK_XP = { "Łatwy": 0, "Średni": 30, "Trudny": 80 };
let activeFilter = "all";
let gameType = "quiz";
let gameQuestions = [];
let gameIndex = 0;
let gameScore = 0;
let toastTimeout;
const $ = (selector) => document.querySelector(selector);

function readJson(key, fallback) { try { const parsed = JSON.parse(localStorage.getItem(key)); return Array.isArray(parsed) ? parsed : fallback; } catch { return fallback; } }
function completedTaskIds() { return readJson(STORAGE_KEYS.completedTasks, []).filter(id => TASKS.some(task => task.id === id)); }
function saveTaskIds(ids) { try { localStorage.setItem(STORAGE_KEYS.completedTasks, JSON.stringify([...new Set(ids)])); } catch { showToast("Nie udało się zapisać postępu."); } }
function boolValue(key) { try { return localStorage.getItem(key) === "true"; } catch { return false; } }
function numberValue(key) { const value = Number(localStorage.getItem(key)); return Number.isFinite(value) && value >= 0 ? value : 0; }
function taskXP(ids = completedTaskIds()) { return TASKS.filter(task => ids.includes(task.id)).reduce((sum, task) => sum + task.points, 0); }
function totalXP() { return taskXP() + numberValue(STORAGE_KEYS.quizPoints) + numberValue(STORAGE_KEYS.truthPoints); }
function progress() { const ids = completedTaskIds(); return { ids, count: ids.length, points: totalXP() }; }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character])); }
function difficultyClass(difficulty) { return difficulty === "Średni" ? "medium" : difficulty === "Trudny" ? "hard" : ""; }
function levelData(xp) { const level = Math.floor(xp / 50) + 1; const rank = level >= 5 ? "Legenda" : level >= 4 ? "Mistrz" : level >= 2 ? "Praktyk" : "Odkrywca"; return { level, rank }; }

function renderStats() {
  const state = progress(); const level = levelData(state.points); const percent = TASKS.length ? state.count / TASKS.length * 100 : 0;
  $("#completedValue").textContent = `${state.count} / ${TASKS.length}`; $("#pointsValue").textContent = state.points; $("#levelValue").textContent = level.level; $("#rankValue").textContent = level.rank; $("#progressBar").style.width = `${percent}%`; $(".progress").setAttribute("aria-valuenow", String(Math.round(percent)));
  const missingMedium = Math.max(0, UNLOCK_XP["Średni"] - state.points); const missingHard = Math.max(0, UNLOCK_XP["Trudny"] - state.points); $("#unlockHint").textContent = missingHard ? `Średnie zadania od 30 XP · trudne od 80 XP · do trudnych brakuje ${missingHard} XP` : "Wszystkie poziomy są odblokowane — wybierz swoje wyzwanie!";
  $("#quizStatus").textContent = boolValue(STORAGE_KEYS.quiz) ? `✓ Zaliczone · +${numberValue(STORAGE_KEYS.quizPoints)} XP` : "Bonus dostępny"; $("#truthStatus").textContent = boolValue(STORAGE_KEYS.truth) ? `✓ Zaliczone · +${numberValue(STORAGE_KEYS.truthPoints)} XP` : "Bonus dostępny"; $("#startQuizButton").disabled = boolValue(STORAGE_KEYS.quiz); $("#startTruthButton").disabled = boolValue(STORAGE_KEYS.truth); void missingMedium;
}

function renderTasks() {
  const state = progress(); const visible = TASKS.filter(task => { const done = state.ids.includes(task.id); return activeFilter === "completed" ? done : activeFilter === "open" ? !done : true; });
  if (!visible.length) { $("#tasks").innerHTML = '<div class="empty-state">Brak zadań w tym widoku.</div>'; return; }
  $("#tasks").innerHTML = visible.map((task, index) => { const done = state.ids.includes(task.id); const required = UNLOCK_XP[task.difficulty]; const locked = !done && state.points < required; const missing = required - state.points; return `<article class="task-card ${done ? "completed" : ""} ${locked ? "locked" : ""}" style="animation-delay:${index * 55}ms"><div class="task-number">${String(TASKS.indexOf(task) + 1).padStart(2, "0")}</div><div class="task-content"><div class="task-heading"><div><h3 class="task-title">${escapeHtml(task.title)}</h3><span class="task-subject">${escapeHtml(task.subject)}</span></div><span class="difficulty ${difficultyClass(task.difficulty)}">${escapeHtml(task.difficulty)}</span></div><p class="task-description">${escapeHtml(task.description)}</p><div class="task-meta"><span class="xp">+${task.points} XP</span>${done ? '<button class="complete-button" disabled>✓ Ukończone</button>' : locked ? `<span class="lock-note" title="To zadanie jest zablokowane">🔒 Brakuje ${missing} XP</span>` : `<button class="complete-button" data-task-id="${escapeHtml(task.id)}" type="button">Ukończ zadanie</button>`}</div></div></article>`; }).join("");
  document.querySelectorAll(".complete-button[data-task-id]").forEach(button => button.addEventListener("click", () => completeTask(button.dataset.taskId)));
}
function render() { renderStats(); renderTasks(); }
function completeTask(taskId) { const ids = completedTaskIds(); const task = TASKS.find(item => item.id === taskId); if (!task || ids.includes(taskId)) return; if (totalXP() < UNLOCK_XP[task.difficulty]) { showToast(`To zadanie odblokuje się po zdobyciu ${UNLOCK_XP[task.difficulty]} XP.`); return; } saveTaskIds([...ids, taskId]); showToast(`+${task.points} XP — świetna robota!`); render(); }
function showToast(message) { const toast = $("#toast"); clearTimeout(toastTimeout); toast.textContent = message; toast.classList.add("visible"); toastTimeout = setTimeout(() => toast.classList.remove("visible"), 2400); }
function setFilter(filter) { activeFilter = filter; document.querySelectorAll(".filter-button").forEach(button => button.classList.toggle("active", button.dataset.filter === filter)); renderTasks(); }
function resetProgress() { if (!confirm("Czy na pewno chcesz wyzerować cały postęp? Tej operacji nie można cofnąć.")) return; Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key)); showToast("Postęp został wyzerowany."); render(); }
function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }
function openGame(type) { gameType = type; gameQuestions = shuffle(type === "quiz" ? QUIZ_QUESTIONS : TRUTH_QUESTIONS); gameIndex = 0; gameScore = 0; $("#modalKicker").innerHTML = `${type === "quiz" ? "MINI GRA" : "PRAWDA / FAŁSZ"} · <span id="quizCounter"></span>`; $("#quizModal").classList.remove("hidden"); renderGameQuestion(); }
function closeGame() { $("#quizModal").classList.add("hidden"); }
function renderGameQuestion() { const current = gameQuestions[gameIndex]; $("#quizCounter").textContent = `${gameIndex + 1} / ${gameQuestions.length}`; $("#modalTitle").textContent = current.question; $("#quizMessage").textContent = ""; const answers = gameType === "quiz" ? shuffle(current.answers).map(answer => ({ label: answer, value: answer })) : shuffle([{ label: "Prawda", value: true }, { label: "Fałsz", value: false }]); $("#quizAnswers").innerHTML = answers.map(answer => `<button class="answer-button" data-answer="${escapeHtml(String(answer.value))}" type="button">${escapeHtml(answer.label)}</button>`).join(""); document.querySelectorAll(".answer-button").forEach(button => button.addEventListener("click", () => answerGame(button.dataset.answer))); }
function answerGame(value) { const current = gameQuestions[gameIndex]; const correct = gameType === "quiz" ? value === current.correct : String(current.correct) === value; const buttons = document.querySelectorAll(".answer-button"); buttons.forEach(button => { button.disabled = true; if ((gameType === "quiz" && button.dataset.answer === current.correct) || (gameType !== "quiz" && button.dataset.answer === String(current.correct))) button.classList.add("correct"); }); if (!correct) [...buttons].find(button => button.dataset.answer === value)?.classList.add("wrong"); if (correct) gameScore += 1; $("#quizMessage").textContent = correct ? "Dobrze! Świetna odpowiedź." : "Nie tym razem — poprawna odpowiedź jest zaznaczona."; setTimeout(() => { gameIndex += 1; gameIndex < gameQuestions.length ? renderGameQuestion() : finishGame(); }, 700); }
function finishGame() { const maxPoints = gameType === "quiz" ? 50 : 25; const earned = Math.round(gameScore / gameQuestions.length * maxPoints); const already = boolValue(gameType === "quiz" ? STORAGE_KEYS.quiz : STORAGE_KEYS.truth); $("#quizCounter").textContent = "WYNIK"; $("#modalTitle").textContent = `${gameType === "quiz" ? "Quiz" : "Gra"} ukończona: ${gameScore}/${gameQuestions.length}`; $("#quizAnswers").innerHTML = '<div class="quiz-result">🎉</div>'; $("#quizMessage").textContent = already ? "Ta mini-gra była już wcześniej zaliczona." : `Zdobywasz ${earned} XP!`; if (!already) { const completeKey = gameType === "quiz" ? STORAGE_KEYS.quiz : STORAGE_KEYS.truth; const pointsKey = gameType === "quiz" ? STORAGE_KEYS.quizPoints : STORAGE_KEYS.truthPoints; localStorage.setItem(completeKey, "true"); localStorage.setItem(pointsKey, String(earned)); showToast(`Mini-gra ukończona: +${earned} XP`); renderStats(); renderTasks(); } }

document.querySelectorAll(".filter-button").forEach(button => button.addEventListener("click", () => setFilter(button.dataset.filter)));
$("#resetButton").addEventListener("click", resetProgress); $("#startQuizButton").addEventListener("click", () => openGame("quiz")); $("#startTruthButton").addEventListener("click", () => openGame("truth")); $("#closeQuizButton").addEventListener("click", closeGame); $("#quizModal").addEventListener("click", event => { if (event.target.id === "quizModal") closeGame(); }); document.addEventListener("keydown", event => { if (event.key === "Escape") closeGame(); });
render();
