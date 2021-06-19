import Command from './Command.js';

export default class GarageDoorUpCommand extends Command {
  garageDoor;

  constructor(garageDoor) {
    super();
    this.garageDoor = garageDoor;
  }

  execute() {
    this.garageDoor.up();
  }
}
