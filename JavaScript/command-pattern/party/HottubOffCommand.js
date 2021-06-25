import Command from './Command.js';

export default class HottubOffCommand extends Command {
  hottub;

  constructor(hottub) {
    super();
    this.hottub = hottub;
  }

  execute() {
    this.hottub.cool();
    this.hottub.off();
  }
}
