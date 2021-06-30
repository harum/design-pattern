export default class Amplifier {
  description;

  tuner;

  player;

  constructor(description) {
    this.description = description;
  }

  on() {
    console.log(`${this.description} on`);
  }

  off() {
    console.log(`${this.description} off`);
  }

  setStereoSound() {
    console.log(`${this.description} stereo mode on`);
  }

  setSurroundSound() {
    console.log(`${this.description} surround sound on (5 speakers, 1 subwoofer)`);
  }

  setVolume(level) {
    console.log(`${this.description} setting volume to ${level}`);
  }

  setTuner(tuner) {
    console.log(`${this.description} setting volume to ${tuner}`);
    this.tuner = tuner;
  }

  setStreamingPlayer(player) {
    console.log(`${this.description} setting Streaming player to ${player}`);
    this.player = player;
  }

  toString() {
    return this.description;
  }
}
