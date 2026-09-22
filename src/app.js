import { mountPetsGame } from './features/games/pets/pets-integration.js';
import { featureFlags } from './config/features.js';
import { getState, navigate, subscribe } from './core/store.js';

export function startModularRuntime() {
  window.PlanLekcji = window.PlanLekcji || {};
  window.PlanLekcji.features = featureFlags;
  window.PlanLekcji.state = getState;
  window.PlanLekcji.navigate = navigate;
  window.PlanLekcji.subscribe = subscribe;
  if (featureFlags.expandedPets) mountPetsGame();
  document.documentElement.dataset.modularRuntime = "ready";
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", startModularRuntime, { once: true });
else startModularRuntime();
