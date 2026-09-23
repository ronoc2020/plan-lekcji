# Architektura aplikacji

Ten katalog zawiera kod rozwijany modułowo. Aktualny `index.html` pozostaje źródłem istniejącej wizji i danych planu lekcji; podczas migracji nie usuwamy ani nie przepisujemy lekcji w tym pliku.

## Zasady

- `index.html` jest bezpiecznym punktem odniesienia i pozostaje działający na GitHub Pages.
- Nowe funkcje trafiają do modułów w `src/`.
- Moduły nie zawierają własnych kopii planu lekcji. Dane planu pozostają w jednym źródle.
- Stan użytkownika zapisuje się przez `src/core/storage.js`.
- Migracja odbywa się etapami; dopiero przetestowany moduł może przejąć odpowiedzialność za funkcję.
- Żaden moduł nie może usuwać lekcji, godzin, nauczycieli ani sal.

## Kolejność migracji

1. storage i state,
2. wspólne UI,
3. plan tygodniowy,
4. misje i postępy,
5. gry edukacyjne,
6. pupile i gospodarstwo,
7. ustawienia i eksport danych.

Do czasu zakończenia migracji pliki legacy pozostają zachowane.
