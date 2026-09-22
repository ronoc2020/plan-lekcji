# Aktualna integracja

Moduły są przeznaczone do uruchomienia przez `index.html` po dodaniu na końcu body:

```html
<script type="module" src="./src/app.js"></script>
```

`src/app.js` importuje teraz storage/state/store, audio, zegar gry, dane pupili i gospodarstwa oraz style efektów. Istniejąca aplikacja pozostaje źródłem planu lekcji i dotychczasowego UI.

## Ważna weryfikacja

Moduły ES nie mogą być uruchomione przez przeglądarkę, dopóki `index.html` nie załaduje `src/app.js`. Nie należy deklarować pełnej integracji bez sprawdzenia tego skryptu w kodzie strony i w konsoli przeglądarki.
