import Command from './Command.js';

export default class TVOnCommand extends Command {
  tv;

  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.on();
  }

  undo() {
    this.tv.off();
  }
}
