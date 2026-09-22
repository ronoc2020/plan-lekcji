# Mój plan lekcji

Darmowa, statyczna aplikacja webowa dla ucznia. **Plan tygodniowy jest ekranem głównym** — dziecko od razu widzi lekcje wybranego dnia, sale, nauczycieli, następną lekcję i stan wykonania. Pozostałe funkcje są dostępne w osobnych zakładkach: Misje, Gry, Postępy i Więcej.

## Główne funkcje

Plan tygodniowy ma osobne karty dla poniedziałku–piątku, przełączanie dni bez przeładowania strony, godziny rozpoczęcia i zakończenia, przedmiot, nauczyciela, salę oraz oznaczanie lekcji jako wykonanej. Aktualnie wybrany dzień jest wyróżniony, a panel boczny pokazuje postęp dnia i następną lekcję.

Religia jest **domyślnie ukryta**, ponieważ nie każdy uczeń na nią uczęszcza. W zakładce „Więcej” można ją dobrowolnie włączyć. Ta opcja jest zapisywana lokalnie.

Zakładka „Misje” zawiera krótkie, nieprzeciążające zadania z matematyki, języka polskiego, angielskiego, historii, przyrody, geografii, informatyki i logiki. Zadania mają przewidywany czas 5–10 minut, poziom trudności, XP, filtry i blokady poziomów.

Zakładka „Gry” zawiera quiz z 10 pytaniami i wyjaśnieniami, Laboratorium par Memory oraz grę „Fakt czy fikcja?”. Gry mają własny progres, feedback poprawnych i błędnych odpowiedzi, animacje i jednorazowe bonusy XP.

Zakładka „Postępy” pokazuje poziom ucznia, rangę, XP, ukończone lekcje, misje i gry. „Więcej” pozwala zmienić widoczność religii, przywrócić zaznaczenia planu albo wyzerować cały lokalny postęp.

## Uruchomienie lokalne

Aplikacja nie wymaga Node.js, Expressa, SQLite ani backendu. Można otworzyć `index.html` bezpośrednio albo uruchomić prosty serwer plików:

```bash
python3 -m http.server 8080
```

Następnie otwórz `http://localhost:8080/`.

## GitHub Pages

Workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) wdraża katalog główny przy każdym pushu do `main`. W repozytorium ustaw **Settings → Pages → Source: GitHub Actions**.

Aplikacja jest dostępna pod:

`https://ronoc2020.github.io/plan-lekcji/`

Odwołania do plików są względne (`./styles.css`, `./app.js`), więc działają w podkatalogu `/plan-lekcji/`.

## Prywatność i zapis

Postęp, zaznaczenia lekcji, profil, widoczność religii i wyniki gier są przechowywane w `localStorage`. Dane pozostają wyłącznie w konkretnej przeglądarce i na konkretnym urządzeniu — nie synchronizują się automatycznie między telefonem i komputerem. Aplikacja nie przesyła danych na serwer.

## Pliki

- `index.html` — główny shell aplikacji i zakładki;
- `styles.css` — responsywny interfejs, plan, animacje i gry;
- `app.js` — plan tygodniowy, misje, localStorage i mini-gry;
- `.github/workflows/pages.yml` — wdrożenie GitHub Pages.
