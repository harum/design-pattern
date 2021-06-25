import Command from './Command.js';

export default class HottubOnCommand extends Command {
  hottub;

  constructor(hottub) {
    super();
    this.hottub = hottub;
  }

  execute() {
    this.hottub.on();
    this.hottub.heat();
    this.hottub.bubblesOn();
  }
}
