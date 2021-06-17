import Command from './Command.js';

export default class GarageDoorOpenCommand extends Command {
  constructor(garageDoor) {
    super();
    this.garageDoor = garageDoor;
  }

  execute() {
    this.garageDoor.up();
  }
}
