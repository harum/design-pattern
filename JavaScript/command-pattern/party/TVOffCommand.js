import Command from './Command.js';

export default class TVOffCommand extends Command {
  tv;

  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.off();
  }

  undo() {
    this.tv.on();
  }
}
