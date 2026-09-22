import { read, write } from "./storage.js";

const DEFAULT_STATE = {
  version: 1,
  activeView: "plan",
  completedLessons: [],
  completedMissions: [],
  games: {},
  settings: { showReligion: false, sounds: true, animations: true },
  profile: { name: "", avatar: "⭐" }
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

export function loadState() {
  const saved = read("app-state", {});
  return {
    ...clone(DEFAULT_STATE),
    ...saved,
    settings: { ...DEFAULT_STATE.settings, ...(saved.settings || {}) },
    profile: { ...DEFAULT_STATE.profile, ...(saved.profile || {}) }
  };
}

export function saveState(state) {
  return write("app-state", state);
}

export function updateState(state, patch) {
  const next = { ...state, ...patch };
  saveState(next);
  return next;
}

export { DEFAULT_STATE };
