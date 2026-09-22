import { AudioManager } from '../../core/audio-manager.js';
import { getDialogue } from '../../data/dialogues.js';
import { loadPets, savePets, selectPet, interactWithPet } from './pets-state.js';
import { spawnParticles, spawnFloatingText } from '../../../ui/effects/particles.js';

const audio = new AudioManager();
let petsState = loadPets();
let active = false;
let cleanup = [];

function $(selector, root = document) { return root.querySelector(selector); }
function $$(selector, root = document) { return [...root.querySelectorAll(selector)]; }
function selectedPet() { return petsState.pets[petsState.selectedPet]; }

function updatePetUi() {
  const pet = selectedPet();
  if (!pet) return;
  const panel = $('[data-game-panel="pets"], [data-games-panel="pets"]');
  if (!panel) return;
  const energy = $('[data-pet-energy], .pet-energy-fill', panel);
  const hunger = $('[data-pet-hunger], .pet-hunger-fill', panel);
  const bond = $('[data-pet-bond], .pet-bond', panel);
  const mood = $('[data-pet-mood], .pet-mood', panel);
  if (energy) energy.style.width = `${pet.energy}%`;
  if (hunger) hunger.style.width = `${pet.hunger}%`;
  if (bond) bond.textContent = `💛 Więź ${pet.bond}`;
  if (mood) mood.textContent = pet.mood === 'sleepy' ? '💤 Śpiący' : pet.mood === 'excited' ? '✨ Podekscytowany' : '😊 Szczęśliwy';
  $$('.pet-card, [data-pet-id]', panel).forEach(card => card.classList.toggle('selected', card.dataset.petId === petsState.selectedPet));
}

function performPetAction(action, source) {
  audio.unlock();
  const before = selectedPet();
  const next = interactWithPet(petsState, action);
  if (next === petsState) return;
  petsState = next;
  updatePetUi();
  const pet = selectedPet();
  const target = source?.closest('.pet-card, [data-pet-id], [data-pet-action]') || source;
  if (target) spawnParticles(action === 'rest' ? 'zzz' : 'heart', { target, count: 4 });
  if (source) spawnFloatingText(getDialogue(petsState.selectedPet, action), { x: source.clientX || innerWidth / 2, y: source.clientY || innerHeight / 2 });
  if (pet !== before) savePets(petsState);
}

function handleClick(event) {
  audio.unlock();
  const petCard = event.target.closest('[data-pet-id]');
  if (petCard) {
    petsState = selectPet(petsState, petCard.dataset.petId);
    updatePetUi();
    return;
  }
  const action = event.target.closest('[data-pet-action]');
  if (action) performPetAction(action.dataset.petAction, action);
}

function start() {
  if (active) return;
  active = true;
  const panel = $('[data-game-panel="pets"], [data-games-panel="pets"]');
  if (!panel) return;
  panel.addEventListener('click', handleClick);
  cleanup.push(() => panel.removeEventListener('click', handleClick));
  updatePetUi();
}

function stop() {
  cleanup.splice(0).forEach(fn => fn());
  active = false;
}

export function mountPetsGame() { start(); return { stop }; }
export function getPetsState() { return petsState; }
export { audio };

window.PlanLekcji = window.PlanLekcji || {};
window.PlanLekcji.games = window.PlanLekcji.games || {};
window.PlanLekcji.games.pets = { mount: mountPetsGame, start, stop, getState: getPetsState };
