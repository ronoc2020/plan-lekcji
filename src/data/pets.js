export const PETS = Object.freeze([
  { id: 'miautek', name: 'Miautek', species: 'cat', emoji: '🐱', personality: 'psotny', favoriteFood: 'fish', base: { energy: 80, hunger: 30, bond: 1 } },
  { id: 'hopsik', name: 'Hopsik', species: 'dog', emoji: '🐶', personality: 'energiczny', favoriteFood: 'bone', base: { energy: 95, hunger: 25, bond: 1 } },
  { id: 'puszek', name: 'Puszek', species: 'rabbit', emoji: '🐰', personality: 'nieśmiały', favoriteFood: 'carrot', base: { energy: 70, hunger: 35, bond: 1 } }
]);

export const PET_MOODS = Object.freeze({
  happy: { label: 'Szczęśliwy', bonus: 1.15, particle: 'heart' },
  hungry: { label: 'Głodny', bonus: 0.8, particle: 'food' },
  sleepy: { label: 'Śpiący', bonus: 0.9, particle: 'zzz' },
  excited: { label: 'Podekscytowany', bonus: 1.25, particle: 'star' }
});
