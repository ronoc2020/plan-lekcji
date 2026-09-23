# Mój plan lekcji

Darmowa, statyczna aplikacja webowa dla ucznia w wieku szkolnym. **Plan tygodniowy jest ekranem głównym** — dziecko od razu widzi lekcje wybranego dnia, sale, nauczycieli, następną lekcję i stan wykonania. Pozostałe funkcje są dostępne w osobnych zakładkach: Misje, Gry, Postępy i Więcej.

## Najważniejsze funkcje

Plan tygodniowy ma karty od poniedziałku do piątku, godziny rozpoczęcia i zakończenia, przedmiot, nauczyciela, salę oraz oznaczanie lekcji jako wykonanej. Plan można edytować lokalnie. Przycisk „Przywróć przykładowy plan” usuwa własne zmiany i przywraca bezpieczną kopię domyślną; nie kasuje XP, avatara ani wyników gier.

Religia jest **domyślnie ukryta**, ponieważ nie każdy uczeń na nią uczęszcza. W zakładce „Więcej” można ją dobrowolnie włączyć. To ustawienie jest zapisywane lokalnie.

Zakładka „Misje” zawiera krótkie zadania z matematyki, języka polskiego, angielskiego, historii, przyrody, geografii, informatyki i logiki. Zadania mają przewidywany czas 5–10 minut, poziom trudności, XP, filtry i blokady poziomów.

Zakładka „Gry” zawiera quiz z 10 pytaniami i wyjaśnieniami, Laboratorium par Memory oraz grę „Fakt czy fikcja?”. Gry mają progres, serię, feedback poprawnych i błędnych odpowiedzi, animacje, dźwięki Web Audio, jednorazowe bonusy XP i sezonowy świat odkrywców. Dźwięki można wyłączyć w nagłówku.

Sezonowy świat zmienia się w zależności od pory roku: Zimowa Kraina, Wiosenny Szlak, Letnia Wyspa lub Jesienny Szlak Wiedzy. Dotychczasowy XP jest zachowany, a świat wyświetla go jako postęp odkrywania.

W zakładce „Więcej” znajduje się także lokalny notatnik. Dziecko może zapisać pomysł, pracę domową albo pytanie do nauczyciela. Jest również Strefa słuchania: aplikacja pokazuje bezpieczne propozycje naukowe z kanału RSS po kliknięciu użytkownika, a wbudowane krótkie treści może czytać przez syntezę mowy przeglądarki. Gdy RSS jest niedostępny albo przeglądarka blokuje CORS, aplikacja pokazuje przygotowany bezpieczny zestaw zastępczy.

## Ochrona wcześniejszego postępu

Aplikacja migruje starsze klucze localStorage dla ukończonych zadań, avatara, quizu, Memory oraz Fakt/Fikcja. Nie usuwa danych starszej wersji podczas migracji. Nowy reset jest działaniem świadomym i wymaga potwierdzenia.

## Uruchomienie lokalne

Aplikacja nie wymaga Node.js, Expressa, SQLite ani backendu. Można otworzyć `index.html` bezpośrednio albo uruchomić prosty serwer plików:

```bash
python3 -m http.server 8080
```

Następnie otwórz `http://localhost:8080/`.

## GitHub Pages

Workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) wdraża katalog główny przy każdym pushu do `main`. W repozytorium ustaw **Settings → Pages → Source: GitHub Actions**.

Aplikacja jest dostępna pod adresem `https://ronoc2020.github.io/plan-lekcji/`. Odwołania do plików są względne (`./styles.css`, `./app.js`), więc działają w podkatalogu `/plan-lekcji/`.

## Prywatność

Postęp, plan, notatnik, profil, ustawienia i wyniki gier są przechowywane w `localStorage`. Dane pozostają wyłącznie w konkretnej przeglądarce i na konkretnym urządzeniu — nie synchronizują się automatycznie między telefonem i komputerem. Aplikacja nie wymaga konta ani własnego backendu. Kanał RSS jest pobierany dopiero po kliknięciu przycisku i ma bezpieczny lokalny fallback.

## Pliki

- `index.html` — shell aplikacji, plan, zakładki, edytor i modale;
- `styles.css` — responsywny interfejs, sezony, animacje, gry i formularze;
- `app.js` — plan, migracja localStorage, misje, sezon, dźwięki, notatnik, RSS i gry;
- `.github/workflows/pages.yml` — wdrożenie GitHub Pages.
