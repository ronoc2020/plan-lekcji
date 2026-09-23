# Plan lekcji · Szlak Odkrywców

Darmowa, statyczna aplikacja edukacyjna dla ucznia klasy 3. Działa w **vanilla HTML, CSS i JavaScript**, bez backendu, kont, bazy danych, zewnętrznych bibliotek, CDN-ów i płatnych usług. Projekt jest przygotowany do pracy offline oraz publikacji na GitHub Pages.

## Demo

- Aplikacja: <https://ronoc2020.github.io/plan-lekcji/>
- Repozytorium: <https://github.com/ronoc2020/plan-lekcji>

## Funkcje

### Plan lekcji

Ekran startowy pokazuje tygodniowy plan z godzinami, nauczycielami, salami, następną lekcją i oznaczeniami wykonania. Zawiera dokładny rozkład od poniedziałku do piątku, podwójne lekcje, długą przerwę, świetlicę oraz lekcję religii jako opcję domyślnie ukrytą. Plan można edytować lokalnie, bez zmiany danych w repozytorium.

### Biblioteka misji

Zakładka **Misje** zawiera 34 zestawy zadań. Każdy zestaw składa się z trzech konkretnych ćwiczeń oraz pola na własną odpowiedź i podpowiedzi. Bibliotekę można przeszukiwać i filtrować po przedmiocie, poziomie oraz statusie wykonania. Dostępne są między innymi matematyka, język polski, angielski, przyroda, geografia, historia, informatyka, plastyka, muzyka, technika i edukacja zdrowotna.

### Gry edukacyjne

Zakładka **Gry** zawiera dwie główne gry oraz krótsze minigry:

- **Zwierzakowa Farma** — 12 pupili zależnych od motywu ucznia, statystyki energii, głodu, szczęścia i zdrowia, karmienie, zabawa, odpoczynek, prezenty, zdjęcia, relacje, kolekcja, wyprawy i sklep;
- **Gospodarstwo** — 8 typów zwierząt, produkty, koszyk, sprzedaż, odblokowania, rozbudowa budynku i cykl dnia zależny od godziny urządzenia;
- **Matematyczny Tropiciel** — pięć pytań matematycznych, XP oraz odblokowywanie kolejnych towarzyszy;
- **Misja: Quiz** — losowane pytania i wyjaśnienia;
- **Laboratorium par** — gra Memory z ośmioma parami;
- **Fakt czy fikcja?** — ćwiczenie krytycznego myślenia;
- **Słowny trop** — układanie haseł z liter;
- **Szybki sprint** — krótkie działania matematyczne.

### Postępy i personalizacja

System obejmuje XP, poziomy, odznaki, rekordy gier, album sześciu towarzyszy oraz lokalne statystyki sesji. Dostępne są dwa profile wizualne: **Odkrywca** z motywem niebieskim i dinozaurami oraz **Odkrywczyni** z motywem różowym i magicznymi stworzeniami.

Motyw sezonowy może działać automatycznie albo być wybrany ręcznie:

- Zimowa Przystań,
- Wiosenna Polana,
- Letnia Wyspa,
- Jesienny Szlak Wiedzy.

Zmiana sezonu aktualizuje gradienty, kolory, komunikaty, ilustracje emoji i dedykowane efekty: jesienne liście, wiosenne płatki, letnie rozbłyski oraz zimowe płatki śniegu. Gradienty są animowane w CSS i działają na GitHub Pages bez dodatkowych zasobów. Interakcje, odpowiedzi i zmiany sezonu mają krótkie dźwięki generowane lokalnie przez Web Audio API — bez plików audio i bez zewnętrznych usług. Animacje można wyłączyć w ustawieniach; aplikacja respektuje również `prefers-reduced-motion`.

### Notatnik i opinie

Notatnik zapisuje treść wyłącznie lokalnie. Formularz opinii przygotowuje wiadomość `mailto:` do `ronoc2020@gmail.com` z tematem **„Aplikacja Plan Lekcji”**. Statyczna aplikacja nie ma serwera SMTP, dlatego nie wysyła wiadomości samodzielnie — otwiera domyślny program pocztowy, a wysyłkę zatwierdza użytkownik.

## Uruchomienie lokalne

Projekt nie wymaga instalowania zależności. Można otworzyć `index.html` bezpośrednio albo uruchomić lokalny serwer:

```bash
python3 -m http.server 8080
```

Następnie otwórz <http://localhost:8080/>.

## Struktura repozytorium

| Ścieżka | Przeznaczenie |
| --- | --- |
| `index.html` | Semantyczny układ aplikacji, zakładki oraz modale. |
| `styles.css` | Style mobile-first, responsywność, gradienty, motywy i animacje. |
| `app.js` | Plan, dane misji, gry, progres, ekonomia farm, sezony i obsługa zapisu. |
| `.github/workflows/pages.yml` | Automatyczne wdrożenie katalogu głównego na GitHub Pages. |
| `.gitignore` | Wykluczenie lokalnych sekretów `.env`. |

Nie ma katalogów `src/`, `Old/` ani `docs/`, ponieważ nie są używane przez bieżącą wersję aplikacji. Repozytorium zawiera tylko pliki potrzebne do uruchomienia, publikacji i dokumentacji projektu.

## Dane lokalne i kompatybilność

Aplikacja nie korzysta z backendu. Plan, wykonane lekcje, misje, profil, ustawienia, notatnik, XP oraz postępy gier są zapisywane w `localStorage`. Każdy uczeń korzystający z własnego urządzenia albo własnego profilu/przeglądarki ma osobny magazyn danych, więc postęp i ustawienia nie mieszają się z innymi uczniami. `localStorage` nie jest jednak kontem i nie synchronizuje danych między urządzeniami. Klucze są prefiksowane `planLekcji.`. Istniejące klucze nie są zmieniane bez migracji, a zapis progresu jest wersjonowany.

Reset całego postępu wymaga potwierdzenia i obejmuje również zapis Zwierzakowej Farmy oraz Gospodarstwa. Edycja planu może zostać wycofana osobno.

## Zasady techniczne

- brak backendu i zewnętrznych CDN-ów;
- wszystkie ścieżki zasobów są względne;
- brak `innerHTML` dla treści użytkownika;
- brak `eval` i `new Function`;
- dane użytkownika są tworzone przez DOM API i `textContent`;
- przyciski i akcje są dostosowane do urządzeń mobilnych;
- aplikacja działa bez konta i bez śledzenia.

## Publikowanie

Workflow GitHub Actions publikuje katalog główny po każdym pushu do `main`. W ustawieniach repozytorium GitHub Pages powinno korzystać ze źródła **GitHub Actions**.

```bash
git add -A
git commit -m "Opis zmiany"
git push origin main
```

Po pushu status wdrożenia można sprawdzić w zakładce **Actions** repozytorium.

## Licencja

Projekt jest prywatnym, edukacyjnym projektem użytkownika. Kod może być rozwijany zgodnie z ustawieniami repozytorium GitHub.
