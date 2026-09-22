import { read, write } from '../../core/storage.js';

const KEY = 'farm-state';
const DEFAULT = { coins: 0, eggs: [], level: 1, capacity: 10, upgrades: [], feed: 0 };

export function loadFarm() {
  return { ...DEFAULT, ...read(KEY, {}) };
}

export function saveFarm(state) {
  write(KEY, state);
  return state;
}

export function collectEgg(state, eggId) {
  const egg = state.eggs.find(item => item.id === eggId);
  if (!egg) return state;
  return saveFarm({ ...state, eggs: state.eggs.filter(item => item.id !== eggId), coins: state.coins + egg.value });
}

export function feedChickens(state) {
  if (state.coins < 5) return state;
  return saveFarm({ ...state, coins: state.coins - 5, feed: state.feed + 1 });
}

export function upgradeFarm(state, upgrade) {
  if (!upgrade || state.coins < upgrade.cost || state.upgrades.includes(upgrade.id)) return state;
  return saveFarm({ ...state, coins: state.coins - upgrade.cost, upgrades: [...state.upgrades, upgrade.id], capacity: state.capacity + (upgrade.effect.capacity || 0) });
}
