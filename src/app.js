import { featureFlags } from "./config/features.js";
import { getState, navigate, subscribe } from "./core/store.js";
import { AudioManager } from "./core/audio-manager.js";
import { GameClock } from "./core/game-clock.js";
import { CHICKENS, FARM_UPGRADES } from "./data/farm.js";
import { PETS, PET_MOODS } from "./data/pets.js";
import { mountPetsGame } from "./features/games/pets/pets-integration.js";
import { loadFarm } from "./features/games/farm/farm-state.js";
import "./ui/effects/effects.css";

const audio = new AudioManager();
const clock = new GameClock();

export function startModularRuntime() {
  window.PlanLekcji = window.PlanLekcji || {};
  window.PlanLekcji.features = featureFlags;
  window.PlanLekcji.state = getState;
  window.PlanLekcji.navigate = navigate;
  window.PlanLekcji.subscribe = subscribe;
  window.PlanLekcji.audio = audio;
  window.PlanLekcji.gameClock = clock;
  window.PlanLekcji.catalog = { pets: PETS, moods: PET_MOODS, chickens: CHICKENS, farmUpgrades: FARM_UPGRADES };
  window.PlanLekcji.farm = loadFarm();

  if (featureFlags.expandedPets) window.PlanLekcji.games = { ...(window.PlanLekcji.games || {}), pets: mountPetsGame() };
  document.documentElement.dataset.modularRuntime = "ready";
}

function boot() {
  if (window.PlanLekcji?.modularRuntimeStarted) return;
  window.PlanLekcji = window.PlanLekcji || {};
  window.PlanLekcji.modularRuntimeStarted = true;
  startModularRuntime();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
else boot();
