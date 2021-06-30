export default class Projector {
  description;

  player;

  constructor(description, player) {
    this.description = description;
    this.player = player;
  }

  on() {
    console.log(`${this.description} on`);
  }

  off() {
    console.log(`${this.description} on`);
  }

  wideScreenMode() {
    console.log(`${this.description} in widescreen mode (16x9 aspect ratio)`);
  }

  tvMode() {
    console.log(`${this.description} in tv mode (4x3 aspect ratio)`);
  }

  toString() {
    return this.description;
  }
}
