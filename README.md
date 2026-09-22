# Plan lekcji — Mądre misje

Darmowa, statyczna aplikacja edukacyjna po polsku. Działa bez serwera, backendu, Node.js, Expressa i zewnętrznej bazy danych, dlatego można ją bez dodatkowych kosztów hostować na **GitHub Pages**.

## Co zostało dopracowane

- 24 krótkie misje z matematyki, języka polskiego, angielskiego, historii, przyrody, geografii, informatyki, logiki i powtórki;
- zadania opisują przewidywany czas wykonania (5, 7 lub 10 minut), cel ćwiczenia i konkretny, mały krok — bez przeciążania ucznia;
- brak religii w planie: każdy może korzystać z aplikacji niezależnie od tego, na jakie zajęcia chodzi;
- dobrowolny wybór wyglądu profilu: Chłopiec, Dziewczynka albo Bez wyboru; wybór nie zmienia treści zadań ani punktacji;
- trzy poziomy trudności i odblokowywanie od 0, 30 oraz 80 XP;
- jednokrotne zaliczanie misji, filtry, filtrowanie po przedmiocie i codzienny licznik wykonanych kroków;
- poziomy ucznia: Odkrywca, Praktyk, Mistrz i Legenda;
- dopracowany ciemny interfejs z animacjami wejścia, hover, odpowiedzi, postępu i kart 3D;
- **Misja: Quiz** — 10 losowanych pytań, seria poprawnych odpowiedzi, progres, limit do 50 XP i wyjaśnienie każdej odpowiedzi;
- **Laboratorium par** — memory z sześcioma parami pojęcie–znaczenie, bez presji czasu, z naliczaniem bonusu zależnym od koncentracji;
- **Fakt czy fikcja?** — pięć zdań, informacja zwrotna i wyjaśnienie po każdej odpowiedzi;
- wyniki gier są zapisywane tylko raz, a ponowna gra służy powtórce bez wielokrotnego naliczania bonusu;
- `escapeHtml`, bezpieczny odczyt/zapis localStorage, aria-labels, potwierdzenie resetu i komunikaty toast.

## Uruchomienie lokalne

To jest strona statyczna. Możesz otworzyć `index.html` bezpośrednio w przeglądarce. Do wygodnego testowania użyj prostego serwera plików:

```bash
python3 -m http.server 8080
```

Następnie otwórz `http://localhost:8080/`. Aplikacja nie wykonuje żadnych wywołań API.

## GitHub Pages

Workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) wdraża zawartość katalogu głównego przy każdym pushu do gałęzi `main`. W ustawieniach repozytorium wybierz **Settings → Pages → Source: GitHub Actions**. Po wdrożeniu aplikacja będzie dostępna pod adresem:

`https://<nazwa-użytkownika>.github.io/plan-lekcji/`

Odwołania do CSS i JavaScript są względne (`./styles.css`, `./app.js`), więc działają również w podkatalogu `/plan-lekcji/`.

## Zapis postępu

Postęp i profil są przechowywane w `localStorage` przeglądarki. Zapis działa tylko w konkretnej przeglądarce i na konkretnym urządzeniu; nie synchronizuje się między telefonem i komputerem i może zostać utracony po wyczyszczeniu danych witryny. Aplikacja nie przesyła postępu na serwer.

## Struktura

- `index.html` — główny dokument aplikacji;
- `styles.css` — responsywny ciemny interfejs, animacje i karty memory;
- `app.js` — misje, profile, localStorage, XP, filtry i mini-gry;
- `.github/workflows/pages.yml` — wdrożenie na GitHub Pages.
