export default class CdPlayer {
  description;

  currentTrack;

  amplifier;

  title;

  constructor(description, amplifier) {
    this.description = description;
    this.amplifier = amplifier;
  }

  on() {
    console.log(`${this.description} on`);
  }

  off() {
    console.log(`${this.description} off`);
  }

  eject() {
    this.title = null;
    console.log(`${this.description} eject`);
  }

  play(identifier) {
    if (typeof identifier === 'string') {
      this.title = identifier;
      this.currentTrack = 0;
      console.log(`${this.description} playing "${this.title}"`);
    } else if (typeof identifier === 'number') {
      if (this.title === undefined) {
        console.log(`${this.description} can't play track "${identifier}", no cd inserted`);
      } else {
        this.currentTrack = identifier;
        console.log(`${this.description} playing track "${this.currentTrack}"`);
      }
    }
  }

  stop() {
    this.currentTrack = 0;
    console.log(`${this.description} stop`);
  }

  pause() {
    console.log(`${this.description} paused "${this.title}"`);
  }

  toString() {
    return this.description;
  }
}
