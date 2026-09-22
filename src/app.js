import { featureFlags } from "./config/features.js";
import { getState, navigate, subscribe } from "./core/store.js";

// Bezpieczny punkt wejścia dla kolejnych modułów. Nie przejmuje jeszcze renderowania
// istniejącego index.html, dzięki czemu refaktoryzacja nie zmienia planu lekcji.
export function startModularRuntime() {
  window.PlanLekcji = window.PlanLekcji || {};
  window.PlanLekcji.features = featureFlags;
  window.PlanLekcji.state = getState;
  window.PlanLekcji.navigate = navigate;
  window.PlanLekcji.subscribe = subscribe;
  document.documentElement.dataset.modularRuntime = "ready";
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startModularRuntime, { once: true });
} else {
  startModularRuntime();
}
