# Plan lekcji — Quest

Darmowa, statyczna aplikacja edukacyjna po polsku. Działa bez serwera, backendu, Node.js, Expressa i zewnętrznej bazy danych, dlatego można ją bez dodatkowych kosztów hostować na **GitHub Pages**.

## Funkcje

- 23 zadania z matematyki, języka polskiego, angielskiego, historii, przyrody, geografii, informatyki i logiki;
- trzy poziomy trudności: Łatwy, Średni i Trudny, z różną liczbą XP;
- odblokowywanie poziomów od 0, 30 i 80 XP;
- jednokrotne zaliczanie zadań i ochrona przed wielokrotnym naliczaniem punktów;
- filtry: Wszystkie, Do zrobienia i Ukończone;
- poziom ucznia oraz rangi: Odkrywca, Praktyk, Mistrz i Legenda;
- ciemny, responsywny interfejs, animacje wejścia, hover, ukończenia i odpowiedzi;
- quiz z 10 losowanymi pytaniami, losową kolejnością odpowiedzi i bonusem do 50 XP;
- druga mini-gra „Fakt czy fikcja?” z bonusem do 25 XP;
- komunikaty toast, modal quizu, reset postępu z potwierdzeniem i obsługa uszkodzonych danych localStorage;
- bezpieczne wstawianie treści przez `escapeHtml`.

## Uruchomienie lokalne

To jest strona statyczna. Wystarczy otworzyć `index.html` w przeglądarce. Do wygodnego testowania ścieżek i routingu możesz użyć dowolnego prostego serwera plików, na przykład:

```bash
python3 -m http.server 8080
```

Następnie otwórz `http://localhost:8080/`. Aplikacja nie wykonuje żadnych wywołań API.

## GitHub Pages

Workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) wdraża zawartość katalogu głównego przy każdym pushu do gałęzi `main`. W ustawieniach repozytorium wybierz **Settings → Pages → Source: GitHub Actions**. Po wdrożeniu aplikacja będzie dostępna pod adresem:

`https://<nazwa-użytkownika>.github.io/plan-lekcji/`

Odwołania do CSS i JavaScript są względne (`./styles.css`, `./app.js`), więc działają również w podkatalogu `/plan-lekcji/`.

## Zapis postępu

Postęp jest przechowywany w `localStorage` przeglądarki. Oznacza to, że zapis działa tylko w konkretnej przeglądarce i na konkretnym urządzeniu; nie synchronizuje się między telefonem i komputerem i może zostać utracony po wyczyszczeniu danych witryny. Aplikacja nie przesyła postępu na serwer.

## Struktura

- `index.html` — główny dokument aplikacji;
- `styles.css` — responsywny ciemny interfejs;
- `app.js` — zadania, localStorage, XP, filtry i mini-gry;
- `.github/workflows/pages.yml` — wdrożenie na GitHub Pages.
