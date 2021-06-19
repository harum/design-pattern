import Command from './Command.js';

export default class StereoOffCommand extends Command {
  constructor(stereo) {
    super();
    this.stereo = stereo;
  }

  execute() {
    this.stereo.off();
  }
}
