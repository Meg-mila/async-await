import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const response = await read();
      return json(response);
    } catch (err) {
      return err;
    }
  }
}
