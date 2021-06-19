import Command from './Command.js';

export default class CeilingFanOnCommand extends Command {
  ceilingFan;

  constructor(ceilingFan) {
    super();
    this.ceilingFan = ceilingFan;
  }

  execute() {
    this.ceilingFan.high();
  }
}
