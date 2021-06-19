import Command from './Command.js';

export default class StereoOnWithCDCommand extends Command {
  constructor(stereo) {
    super();
    this.stereo = stereo;
  }

  execute() {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }
}
