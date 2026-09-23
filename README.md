# Plan lekcji · Szlak Odkrywców

Darmowa, statyczna aplikacja dla ucznia. Działa jako **vanilla HTML, CSS i JavaScript**, bez kont, serwera, bazy danych, zewnętrznych CDN-ów czy płatnych narzędzi. Jest przygotowana dla GitHub Pages i działa także offline po zapisaniu strony w pamięci przeglądarki.

## Co oferuje aplikacja

Plan tygodniowy jest ekranem startowym. Uczeń widzi lekcje wybranego dnia, godziny, sale, nauczycieli, następną lekcję oraz własne oznaczenia wykonania. Plan można edytować lokalnie. Religia jest opcjonalna i domyślnie ukryta.

Zakładka **Misje** zawiera bibliotekę **34 zestawów zadań** z matematyki, języka polskiego, angielskiego, przyrody, geografii, historii, informatyki, plastyki, muzyki, techniki i edukacji zdrowotnej. Każdy zestaw ma trzy konkretne ćwiczenia, pole na własną odpowiedź, podpowiedzi, poziom trudności, przewidywany czas i XP. Bibliotekę można filtrować po przedmiocie, statusie i wyszukiwać po treści.

Zakładka **Gry** zawiera pięć minigier: Quiz, Laboratorium par Memory, Fakt czy fikcja?, Słowny trop oraz Szybki sprint. Gry mają losowane rundy, wyjaśnienia odpowiedzi, rekordy oraz dzienny bonus XP. Nie ma limitu ćwiczeń — po odebraniu bonusu można dalej grać dla wyniku.

System postępów obejmuje XP, poziomy, osiem odznak i album sześciu zwierzęcych towarzyszy. Zwierzęta odblokowują się automatycznie wraz z XP i można wybrać aktywnego towarzysza. Motyw aplikacji automatycznie rozpoznaje sezon według daty urządzenia. Uczeń może przełączyć go ręcznie na zimę, wiosnę, lato lub jesień, a także wyłączyć łagodne animacje.

Notatnik zapisuje dane lokalnie. Formularz opinii otwiera domyślną aplikację pocztową z odbiorcą `ronoc2020@gmail.com` i tematem **„Aplikacja Plan Lekcji”**. Statyczna strona nie wysyła wiadomości samodzielnie — wysłanie zawsze zatwierdza uczeń lub opiekun w swojej poczcie.

## Kompatybilność danych

Istniejące klucze `localStorage` pozostają bez zmian. Aplikacja zachowuje i migruje starsze dane ukończonych zadań, profilu, Quizu, Memory, Fakt czy fikcja? oraz dotychczasowego XP. Nowe dane progresji są zapisywane w `planLekcji.progress.v5` z wersjonowaniem i migracją. Reset wymaga świadomego potwierdzenia.

## Uruchomienie lokalne

Aplikacja nie wymaga instalacji zależności. Otwórz `index.html` bezpośrednio lub uruchom zwykły serwer plików:

```bash
python3 -m http.server 8080
```

Następnie przejdź pod adres `http://localhost:8080/`.

## GitHub Pages

Workflow [`.github/workflows/pages.yml`](./.github/workflows/pages.yml) wdraża katalog główny przy każdym pushu do `main`. W ustawieniach repozytorium wybierz **Settings → Pages → Source: GitHub Actions**. Aplikacja korzysta wyłącznie ze ścieżek względnych (`./styles.css`, `./app.js`), dlatego działa w podkatalogu `/plan-lekcji/`.

## Prywatność i bezpieczeństwo

Postęp, plan, profil, notatnik i preferencje są przechowywane wyłącznie w `localStorage` konkretnej przeglądarki. Nie ma backendu, śledzenia, analityki, zewnętrznych kanałów RSS ani zdalnych fontów. Tekst użytkownika z notatnika i formularza opinii nie jest wstawiany przez `innerHTML`; interfejs buduje elementy DOM z użyciem `textContent`.

## Pliki

| Plik | Rola |
| --- | --- |
| `index.html` | Dostępny, semantyczny układ aplikacji, zakładki i modale. |
| `styles.css` | Mobile-first UI, pełna responsywność, cztery motywy sezonowe i preferencje ruchu. |
| `app.js` | Plan, lokalne migracje, biblioteka zadań, gry, postępy, odznaki, zwierzęta i e-mail `mailto:`. |
| `.github/workflows/pages.yml` | Publikacja na GitHub Pages. |
