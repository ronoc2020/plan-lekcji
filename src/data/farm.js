export const CHICKENS = Object.freeze([
  { id: 'tosia', name: 'Tosia', rarity: 'common', emoji: '🐔', productionMinutes: 10 },
  { id: 'pixel', name: 'Pixel', rarity: 'rare', emoji: '🐓', productionMinutes: 8 },
  { id: 'goldie', name: 'Złotka', rarity: 'epic', emoji: '🦃', productionMinutes: 6 }
]);

export const FARM_UPGRADES = Object.freeze([
  { id: 'nests', name: 'Więcej gniazd', cost: 100, effect: { capacity: 10 } },
  { id: 'feed', name: 'Lepsza pasza', cost: 180, effect: { productionMultiplier: 1.25 } },
  { id: 'auto-collect', name: 'Automatyczne zbieranie', cost: 300, effect: { autoCollect: true } }
]);
