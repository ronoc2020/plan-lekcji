import { APP_VIEWS, EVENT_NAMES, emit } from "../core/events.js";
import { loadState, saveState } from "../core/state.js";

let state = loadState();

export function getState() { return state; }

export function setState(patch) {
  state = { ...state, ...patch };
  saveState(state);
  emit(EVENT_NAMES.stateChanged, { state });
  return state;
}

export function navigate(view) {
  if (!APP_VIEWS.includes(view)) return state;
  state = { ...state, activeView: view };
  saveState(state);
  emit(EVENT_NAMES.viewChanged, { view });
  return state;
}

export function subscribe(callback) {
  const handler = event => callback(event.detail.state);
  window.addEventListener(EVENT_NAMES.stateChanged, handler);
  return () => window.removeEventListener(EVENT_NAMES.stateChanged, handler);
}
