export default class StreamingPlayer {
  description;

  currentChapter;

  amplifier;

  movie;

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

  play(identifier) {
    if (typeof identifier === 'string') {
      this.movie = identifier;
      this.currentChapter = 0;
      console.log(`${this.description} playing "${this.movie}"`);
    } else if (typeof identifier === 'number') {
      if (this.movie === undefined) {
        console.log(`${this.description} can't play chapter "${identifier}", no movie inserted`);
      } else {
        this.currentChapter = identifier;
        console.log(`${this.description} playing chapter "${this.currentChapter}" of "${this.movie}"`);
      }
    }
  }

  stop() {
    this.currentChapter = 0;
    console.log(`${this.description} stopped "${this.movie}"`);
  }

  pause() {
    console.log(`${this.description} paused "${this.movie}"`);
  }

  setTwoChannelAudio() {
    console.log(`${this.description} set two channel audio`);
  }

  setSurroundAudio() {
    console.log(`${this.description} set surround audio`);
  }

  toString() {
    return this.description;
  }
}
