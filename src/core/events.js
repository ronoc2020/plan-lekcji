export const APP_VIEWS = Object.freeze(["plan", "tasks", "games", "progress", "more"]);

export const EVENT_NAMES = Object.freeze({
  stateChanged: "planlekcji:state-changed",
  viewChanged: "planlekcji:view-changed",
  toast: "planlekcji:toast"
});

export function emit(name, detail = {}) {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}
