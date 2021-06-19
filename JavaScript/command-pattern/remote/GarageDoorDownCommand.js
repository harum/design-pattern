import Command from './Command.js';

export default class GarageDoorDownCommand extends Command {
  garageDoor;

  constructor(garageDoor) {
    super();
    this.garageDoor = garageDoor;
  }

  execute() {
    this.garageDoor.down();
  }
}
