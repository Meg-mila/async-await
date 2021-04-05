import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    // eslint-disable-next-line no-console
    console.log(await GameSavingLoader.load());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
})();
