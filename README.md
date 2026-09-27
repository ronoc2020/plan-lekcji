# Plan lekcji · Szlak Odkrywców

Darmowa, statyczna aplikacja edukacyjna dla ucznia. Łączy tygodniowy plan lekcji, bibliotekę ćwiczeń, minigry, system XP, odznaki, sezonowe motywy i rozwijającą się **Zwierzakową Farmę**.

Aplikacja działa bez konta, backendu, bazy danych, zewnętrznych bibliotek, CDN-ów i płatnych usług. Może działać offline po zapisaniu plików lokalnie albo online przez GitHub Pages.

## Demo i repozytorium

- **Aplikacja:** <https://ronoc2020.github.io/plan-lekcji/>
- **Repozytorium:** <https://github.com/ronoc2020/plan-lekcji>
- **Technologie:** HTML, CSS, vanilla JavaScript
- **Publikowanie:** GitHub Pages przez GitHub Actions

## Spis treści

- [Najważniejsze funkcje](#najważniejsze-funkcje)
- [Plan lekcji i blokada czasu](#plan-lekcji-i-blokada-czasu)
- [Biblioteka misji](#biblioteka-misji)
- [Gry](#gry)
- [Zwierzakowa Farma](#zwierzakowa-farma)
- [Ścieżki zainteresowań i kariery](#ścieżki-zainteresowań-i-kariery)
- [Postęp, XP i odznaki](#postęp-xp-i-odznaki)
- [Sezony, animacje i dźwięki](#sezony-animacje-i-dźwięki)
- [Dane ucznia i prywatność](#dane-ucznia-i-prywatność)
- [Uruchomienie lokalne](#uruchomienie-lokalne)
- [Struktura repozytorium](#struktura-repozytorium)
- [Testowanie](#testowanie)
- [Publikowanie](#publikowanie)
- [Ograniczenia projektu](#ograniczenia-projektu)

## Najważniejsze funkcje

- plan tygodniowy od poniedziałku do piątku;
- widok bieżącego dnia i następnej lekcji;
- godziny, nauczyciele, sale i ikony przedmiotów;
- opcjonalne pokazywanie lub ukrywanie religii;
- blokada odhaczania lekcji przed faktycznym końcem zajęć;
- biblioteka 42 zestawów zadań;
- trzy poziomy trudności: Łatwy, Średni i Trudny;
- 10 gier i trybów edukacyjnych;
- Zwierzakowa Farma z pupilami, akcjami, relacjami i wyprawami;
- Gospodarstwo z produkcją, koszykiem, sprzedażą i rozbudową;
- XP, poziomy, odznaki, rekordy i kolekcjonowanie zwierząt;
- automatyczne sezony oraz ręczny wybór motywu;
- animowane gradienty i lekkie efekty ruchu;
- lokalne dźwięki generowane przez Web Audio API;
- notatnik ucznia;
- formularz opinii przygotowujący wiadomość e-mail;
- responsywny interfejs mobile-first;
- brak kont i brak śledzenia użytkownika.

## Plan lekcji i blokada czasu

Zakładka **Plan** pokazuje dokładny tygodniowy rozkład. Każda lekcja ma:

- godzinę rozpoczęcia i zakończenia;
- przedmiot;
- nauczyciela;
- salę;
- ikonę wizualną;
- przycisk oznaczenia wykonania.

### Kiedy można odhaczyć lekcję?

Lekcję można oznaczyć jako wykonaną dopiero wtedy, gdy:

1. minie jej rzeczywista godzina zakończenia;
2. data i dzień tygodnia odpowiadają bieżącemu tygodniowi według zegara urządzenia;
3. aplikacja rozpozna, że lekcja już się zakończyła.

Przed tym momentem przycisk pozostaje zablokowany i pokazuje kłódkę. Próba wykonania wcześniejszego odhaczenia kończy się komunikatem, np.:

> Odhaczenie będzie możliwe po 09:35.

Po wykonaniu aplikacja zapisuje zarówno identyfikator lekcji, jak i datę wykonania. Można cofnąć oznaczenie zakończonej lekcji. Zasada dotyczy odhaczania lekcji, a nie edycji samego planu.

### Edycja planu

Przycisk **Edytuj** pozwala zmienić lokalnie nauczyciela, salę lub nazwę przedmiotu. Zmiany dotyczą tylko bieżącego urządzenia i nie modyfikują danych w repozytorium. Można przywrócić przykładowy plan bez kasowania XP i wyników gier.

## Biblioteka misji

Zakładka **Misje** zawiera **42 zestawy zadań**. Każdy zestaw ma trzy konkretne ćwiczenia:

- pole na własną odpowiedź;
- podpowiedź;
- oczekiwany wynik lub kryterium sprawdzenia, jeśli ma zastosowanie;
- czas orientacyjny;
- nagrodę XP;
- poziom trudności;
- przedmiot.

Bibliotekę można filtrować według:

- statusu: Wszystkie, Do zrobienia, Ukończone;
- przedmiotu;
- wyszukiwanej frazy;
- poziomu trudności widocznego na karcie.

Dostępne obszary obejmują między innymi:

- matematykę;
- język polski;
- język angielski;
- historię;
- przyrodę;
- geografię;
- informatykę;
- logikę;
- plastykę;
- muzykę;
- technikę;
- edukację zdrowotną;
- edukację społeczną.

Odpowiedzi do ćwiczeń są przeznaczone dla ucznia. Aplikacja nie wysyła ich na serwer i nie zapisuje treści odpowiedzi jako danych konta.

## Gry

Zakładka **Gry** zawiera dwie większe gry oraz krótsze tryby edukacyjne.

### Zwierzakowa Farma

Rozbudowany moduł opieki nad pupilami. Zawiera:

- 12 pupili zależnych od wybranego motywu profilu;
- energię, głód, szczęście, zdrowie i poziom relacji;
- karmienie;
- zabawę;
- odpoczynek;
- prezenty;
- leczenie;
- robienie zdjęć;
- kolekcję pupilów;
- wyprawy do lasu, jaskini, na plażę i w góry;
- sklep z przedmiotami;
- monety farmy;
- reakcje tekstowe pupila;
- animowane ruchy pupila i obiektów;
- przedmioty kolekcjonerskie związane ze ścieżką kariery.

Każda akcja może zmienić statystyki pupila, relację, monety, XP lub kolekcję.

### Gospodarstwo

Moduł zarządzania gospodarstwem zawiera:

- 8 typów zwierząt gospodarskich;
- produkcję jajek, piór, wełny i mleka;
- koszyk o ograniczonej pojemności;
- sprzedaż produktów;
- odblokowywanie kolejnych zwierząt;
- rozbudowę budynku;
- dzienny cykl zależny od godziny urządzenia;
- dziennik wydarzeń gospodarstwa.

Produkcja jest szybsza w dzień, a wolniejsza w nocy. Dane są przechowywane lokalnie.

### Pozostałe gry

- **Matematyczny Tropiciel** — pytania matematyczne, XP i odblokowywanie towarzyszy;
- **Leśny refleks** — szybkie wyszukiwanie właściwego symbolu wśród ruchomych kart;
- **Sortownia wiedzy** — rundy logiczne z pytaniami edukacyjnymi;
- **Misja: Quiz** — losowane pytania z wyjaśnieniami;
- **Laboratorium par** — Memory z ośmioma parami;
- **Fakt czy fikcja?** — rozpoznawanie prawdziwych i fałszywych zdań;
- **Słowny trop** — układanie słów z rozsypanych liter;
- **Szybki sprint** — krótkie działania matematyczne.

Wyniki gier są zapisywane lokalnie. Część gier przyznaje jednorazowy dzienny bonus XP, ale można grać ponownie, aby poprawiać rekord.

## Ścieżki zainteresowań i kariery

Aplikacja nie przypisuje zainteresowań sztywno do płci. Profil chłopca lub dziewczynki zmienia wyłącznie wybrane elementy wizualne i pulę startowych pupili. **Każdy uczeń może wybrać dowolną ścieżkę kariery.**

Dostępne ścieżki w Farmie:

| Ścieżka | Symbol | Główne zainteresowania | Przykładowa nagroda |
| --- | --- | --- | --- |
| Odkrywca świata | 🧭 | wyprawy, mapy, przyroda, zwierzęta | lornetka odkrywcy 🔭 |
| Pilot i konstruktor | ✈️ | samoloty, loty, maszyny, budowanie | model samolotu 🛩️ |
| Artysta i projektant | 🎨 | kolory, dekorowanie, muzyka, tworzenie | zestaw plastyczny 🎨 |
| Budowniczy wynalazca | 🛠️ | technika, eksperymenty, roboty, ulepszenia | robot pomocnik 🤖 |

Ścieżkę można zmienić w dowolnym momencie. Zmiana nie kasuje wcześniejszych nagród. Obiekty kolekcjonerskie są zapisywane w danych Farmy i mogą być wyświetlane na scenie jako animowane elementy.

## Postęp, XP i odznaki

XP można zdobywać przez:

- ukończenie zestawu zadań;
- granie w minigry;
- poprawne odpowiedzi;
- akcje opieki nad pupilem;
- wyprawy;
- produkcję i sprzedaż w Gospodarstwie;
- zbieranie obiektów i towarzyszy.

System zawiera:

- poziomy doświadczenia;
- rangi ucznia;
- historię sesji gier;
- najlepsze wyniki;
- album towarzyszy;
- odblokowywane zwierzęta;
- odznaki za regularną naukę;
- pasek postępu sezonowego;
- licznik ukończonych lekcji, misji i gier.

Przykładowe odznaki:

- **Pierwszy krok** — ukończenie pierwszego zestawu;
- **Czytelnik misji** — ukończenie 10 zestawów;
- **Plan na medal** — oznaczenie 10 lekcji;
- **Gracz wiedzy** — rozegranie 3 sesji;
- **W rytmie nauki** — zebranie 150 XP;
- **Przyjaciel szlaku** — odblokowanie 3 zwierząt;
- **Mistrz małych kroków** — ukończenie 25 zestawów;
- **Legenda szlaku** — zebranie 500 XP.

## Sezony, animacje i dźwięki

Motyw może być:

- wykrywany automatycznie na podstawie bieżącego miesiąca;
- ustawiony ręcznie przez ucznia.

Dostępne sezony:

- **Zimowa Przystań**;
- **Wiosenna Polana**;
- **Letnia Wyspa**;
- **Jesienny Szlak Wiedzy**.

Zmiana sezonu aktualizuje:

- kolorystykę;
- animowany gradient tła;
- komunikaty;
- emoji sceny;
- typ efektów ambientowych;
- krótką sygnaturę dźwiękową.

Efekty są lekkie i nieagresywne:

- jesienią pojawiają się liście;
- wiosną płatki i kwiaty;
- latem rozbłyski i ciepłe gradienty;
- zimą śnieżne elementy.

Dźwięki są tworzone lokalnie przy użyciu **Web Audio API**. Nie są pobierane z zewnętrznych serwerów. Można je wyłączyć przyciskiem głośnika. Aplikacja respektuje również ustawienie systemowe `prefers-reduced-motion` oraz własny przełącznik łagodnych animacji.

## Notatnik i opinie

### Notatnik

Notatnik pozwala zapisać:

- pomysły;
- zadania domowe;
- pytania do nauczyciela;
- krótkie przypomnienia.

Treść pozostaje w `localStorage` bieżącej przeglądarki.

### Formularz opinii

Formularz przygotowuje wiadomość `mailto:` do:

`ronoc2020@gmail.com`

Temat wiadomości:

`Aplikacja Plan Lekcji`

Aplikacja statyczna nie ma własnego serwera SMTP. Po wysłaniu formularza otwiera domyślny program pocztowy z przygotowanym odbiorcą, tematem i treścią. Uczeń lub opiekun musi jeszcze zatwierdzić wysyłkę w swoim programie pocztowym.

## Dane ucznia i prywatność

Aplikacja nie posiada kont, logowania ani backendu. Dane są przechowywane wyłącznie lokalnie w pamięci `localStorage` przeglądarki.

Zapisywane lokalnie są między innymi:

- ukończone lekcje;
- daty wykonania lekcji;
- własne zmiany planu;
- ukończone zestawy zadań;
- XP i poziom;
- historię gier;
- odznaki wynikające z postępu;
- wybrany profil wizualny;
- ustawienia sezonu;
- ustawienia animacji i dźwięku;
- treść notatnika;
- stan Zwierzakowej Farmy;
- stan Gospodarstwa;
- wybraną ścieżkę kariery i obiekty kolekcjonerskie.

Każdy uczeń korzystający z własnego urządzenia albo własnej przeglądarki ma oddzielny magazyn danych. Postępy nie mieszają się między urządzeniami, ale nie są też synchronizowane między urządzeniami.

To nie jest system kont użytkowników. Wyczyszczenie danych strony, tryb prywatny lub zmiana przeglądarki może usunąć lokalny postęp.

### Klucze i kompatybilność

Klucze `localStorage` mają prefiks `planLekcji.`. Istniejące klucze są zachowywane. Przy rozbudowie dane są łączone z wartościami domyślnymi zamiast bezpośredniego kasowania. Postęp główny ma wersjonowany zapis i funkcję migracji.

Reset całego postępu wymaga potwierdzenia i obejmuje również Farmę, Gospodarstwo, XP, gry, odznaki i ustawienia. Przywrócenie przykładowego planu jest osobną operacją.

## Uruchomienie lokalne

Projekt nie wymaga instalowania zależności.

### Opcja 1: otwarcie pliku

Otwórz `index.html` w przeglądarce.

### Opcja 2: lokalny serwer

W katalogu projektu uruchom:

```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

Następnie otwórz:

<http://localhost:8080/>

Lokalny serwer jest wygodniejszy do testowania ścieżek, odświeżania plików i zachowania podobnego do GitHub Pages.

## Struktura repozytorium

| Ścieżka | Przeznaczenie |
| --- | --- |
| `index.html` | Semantyczny układ aplikacji, zakładki, formularze i modale. |
| `styles.css` | Style mobile-first, responsywność, kolory, sezony, animacje i widoki gier. |
| `app.js` | Plan, dane misji, gry, Farmę, Gospodarstwo, XP, sezony, audio i zapis lokalny. |
| `.github/workflows/pages.yml` | Automatyczne wdrożenie katalogu głównego na GitHub Pages. |
| `.gitignore` | Wykluczenie lokalnych plików i sekretów. |
| `README.md` | Dokumentacja projektu. |

Bieżąca aplikacja nie korzysta z katalogów `src/`, `Old/` ani `docs/`.

## Testowanie

Podstawowa walidacja kodu:

```bash
node --check app.js
git diff --check
```

Kontrola zakazanych wzorców:

```bash
rg -n "innerHTML|eval\\(|new Function|@import|https?://" index.html app.js styles.css
```

Ręcznie należy sprawdzić:

1. otwarcie aplikacji na telefonie i komputerze;
2. wybór każdego dnia tygodnia;
3. blokadę lekcji przed godziną zakończenia;
4. możliwość odhaczenia lekcji po jej zakończeniu;
5. zmianę profilu wizualnego;
6. automatyczny i ręczny sezon;
7. przełącznik animacji i dźwięku;
8. otwarcie Farmy;
9. karmienie, zabawę, odpoczynek i zdjęcie pupila;
10. zmianę ścieżki kariery;
11. pojawienie się obiektu kolekcjonerskiego;
12. uruchomienie minigier;
13. zapis i odczyt notatnika;
14. przygotowanie wiadomości opinii;
15. brak błędów w konsoli przeglądarki.

## Publikowanie

Workflow GitHub Actions publikuje katalog główny po każdym pushu do `main`. W ustawieniach repozytorium GitHub Pages jako źródło należy wybrać **GitHub Actions**.

Standardowy proces:

```bash
git status
git add -A
git commit -m "Opis zmiany"
git push origin main
```

Po pushu status można sprawdzić w zakładce **Actions** repozytorium.

Wdrożenie nie wymaga serwera aplikacyjnego, API ani bazy danych.

## Ograniczenia projektu

- brak backendu;
- brak kont i logowania;
- brak synchronizacji między urządzeniami;
- brak zewnętrznych CDN-ów;
- brak płatnych narzędzi;
- brak ciężkich frameworków;
- brak sekretów w repozytorium;
- brak `eval` i `new Function`;
- brak `innerHTML` dla danych użytkownika;
- wysyłka opinii zależy od lokalnego programu pocztowego;
- czas lekcji zależy od poprawnego zegara urządzenia;
- `localStorage` może zostać wyczyszczony przez użytkownika lub przeglądarkę.

## Zasady rozwoju

1. Nie przepisywać działających funkcji bez potrzeby.
2. Zachowywać dotychczasowe klucze `localStorage`.
3. Dodawać migracje przy zmianie formatu danych.
4. Utrzymywać ścieżki względne, np. `./styles.css` i `./app.js`.
5. Tworzyć treści użytkownika przez DOM API i `textContent`.
6. Testować desktop, mobile i tryb offline.
7. Uwzględniać `prefers-reduced-motion`.
8. Nie blokować ścieżek zainteresowań wyborem płci.
9. Przed publikacją wykonywać kontrolę składni, `git diff --check` i test w przeglądarce.

## Licencja

Projekt jest prywatnym projektem edukacyjnym użytkownika. Kod jest rozwijany zgodnie z ustawieniami repozytorium GitHub.
