# Integracja

Na branchu dodano integrację stanu pupili z istniejącym DOM-em. Moduł rozpoznaje zarówno selektory `data-game-panel="pets"`, `data-games-panel="pets"`, jak i istniejące karty oznaczone `data-pet-id` oraz akcje `data-pet-action`.

Aby aktywować runtime w `index.html`, aplikacja musi załadować po istniejącym kodzie:

```html
<script type="module" src="./src/app.js"></script>
```

Nie dodano automatycznej zmiany do monolitycznego `index.html`, ponieważ jego inline JavaScript jest obecnie źródłem istniejącej wizji i planu; bezpieczne podłączenie wymaga potwierdzenia selektorów panelu w przeglądarce. Po dodaniu skryptu plan lekcji pozostaje nienaruszony, a moduł tylko rozszerza panel pupili.
