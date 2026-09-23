# Etap 2: gry i efekty

Na branchu dodano gotowe, niezależne moduły pod rozbudowę gier:

- `src/core/audio-manager.js` — lokalne efekty audio, odblokowanie po interakcji, głośność i wyciszenie;
- `src/core/game-clock.js` — wspólny zegar dla produkcji, energii i wypraw;
- `src/data/pets.js` — pupile i nastroje;
- `src/data/dialogues.js` — dialogi zależne od pupila i akcji;
- `src/features/games/pets/pets-state.js` — zapis i akcje pupili;
- `src/data/farm.js` — kury i ulepszenia gospodarstwa;
- `src/features/games/farm/farm-state.js` — zapis, jajka, karmienie i ulepszenia;
- `src/ui/effects/particles.js` — floating text i particle effects;
- `src/ui/effects/effects.css` — animacje i reduced motion.

Moduły nie nadpisują `index.html`, nie mają kopii planu lekcji i nie usuwają istniejących funkcji. Integracja z ekranem gier powinna być kolejnym, osobnym commitem po testach w przeglądarce.
