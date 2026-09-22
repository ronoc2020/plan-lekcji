# Refaktoryzacja modułowa

Branch `refactor/modular-architecture` zawiera bezpieczny fundament pod dalszą rozbudowę.

## Co zostało zachowane

- istniejący `index.html` bez usuwania planu lekcji;
- istniejące godziny, nauczyciele, sale i dni;
- obecny wygląd i działająca wersja GitHub Pages;
- dotychczasowy `app.js` i `styles.css` jako pliki legacy do czasu migracji;
- brak backendu — aplikacja nadal jest zgodna z GitHub Pages.

## Nowe moduły

- `src/core/storage.js` — bezpieczny zapis, odczyt, eksport danych;
- `src/core/state.js` — stan domyślny i zapis stanu;
- `src/core/store.js` — centralny magazyn stanu i nawigacja;
- `src/core/events.js` — nazwy zdarzeń aplikacji;
- `src/config/features.js` — kontrola funkcji eksperymentalnych;
- `src/ui/dom.js` — wspólne funkcje DOM;
- `src/app.js` — punkt wejścia przyszłej warstwy modułowej.

## Następny etap

Najpierw należy przenieść dane planu do `src/config/schedule.js` przez mechaniczny, automatyczny transfer 1:1. Nie wolno wpisywać planu ręcznie ani skracać listy lekcji. Następnie można przenosić renderowanie kolejnych funkcji, testując każdy etap na GitHub Pages.
