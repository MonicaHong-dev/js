function makeFriedEgg() {
  return getChicken()
    .catch(() => '🐔')
    .then(fetchEgg)
    .then(fryEgg);
}
