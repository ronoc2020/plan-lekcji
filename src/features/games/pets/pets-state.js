import { PETS } from '../../../data/pets.js';
import { read, write } from '../../../core/storage.js';

const KEY = 'pets-state';

const defaults = () => ({ selectedPet: PETS[0].id, pets: Object.fromEntries(PETS.map(pet => [pet.id, { ...pet.base, level: 1, mood: 'happy', stats: { strength: 1, agility: 1, charm: 1 } }])) });

export function loadPets() {
  const saved = read(KEY, {});
  const initial = defaults();
  return { ...initial, ...saved, pets: { ...initial.pets, ...(saved.pets || {}) } };
}

export function savePets(state) {
  write(KEY, state);
  return state;
}

export function selectPet(state, petId) {
  if (!PETS.some(pet => pet.id === petId)) return state;
  return savePets({ ...state, selectedPet: petId });
}

export function interactWithPet(state, action) {
  const id = state.selectedPet;
  const pet = state.pets[id];
  if (!pet) return state;
  const next = { ...pet };
  if (action === 'feed') next.hunger = Math.min(100, next.hunger + 20);
  if (action === 'play' && next.energy >= 10) { next.energy -= 10; next.bond += 1; next.mood = 'excited'; }
  if (action === 'rest') { next.energy = Math.min(100, next.energy + 25); next.mood = 'sleepy'; }
  return savePets({ ...state, pets: { ...state.pets, [id]: next } });
}
