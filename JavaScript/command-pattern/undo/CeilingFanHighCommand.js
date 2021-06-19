import Command from './Command.js';
import CeilingFan from './CeilingFan.js';

export default class CeilingFanHighCommand extends Command {
  ceilingFan;

  prevSpeed;

  constructor(ceilingFan) {
    super();
    this.ceilingFan = ceilingFan;
  }

  execute() {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.high();
  }

  undo() {
    if (this.prevSpeed === CeilingFan.HIGH) {
      this.ceilingFan.high();
    } else if (this.prevSpeed === CeilingFan.MEDIUM) {
      this.ceilingFan.medium();
    } else if (this.prevSpeed === CeilingFan.LOW) {
      this.ceilingFan.low();
    } else if (this.prevSpeed === CeilingFan.OFF) {
      this.ceilingFan.off();
    }
  }
}
