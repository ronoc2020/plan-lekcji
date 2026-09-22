export const dialogues = Object.freeze({
  miautek: { feed: ['Mniam! To moje ulubione!', 'Jeszcze kawałek?'], play: ['Złap mnie!', 'Ale zabawa!'], rest: ['Mruczę sobie cichutko...'] },
  hopsik: { feed: ['Dobry kąsek!', 'Ale pyszne!'], play: ['Biegniemy!', 'Rzuć jeszcze raz!'], rest: ['Chwila odpoczynku.'] },
  puszek: { feed: ['Dziękuję...', 'To było smaczne.'], play: ['To było miłe!', 'Jeszcze raz?'], rest: ['Zzz...'] }
});

export function getDialogue(petId, action) {
  const options = dialogues[petId]?.[action] || ['Hej!'];
  return options[Math.floor(Math.random() * options.length)];
}
