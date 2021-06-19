import Command from './Command.js';

export default class CeilingFanOffCommand extends Command {
  ceilingFan;

  constructor(ceilingFan) {
    super();
    this.ceilingFan = ceilingFan;
  }

  execute() {
    this.ceilingFan.off();
  }
}
