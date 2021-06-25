export default class MacroCommand {
  commands;

  constructor(commands) {
    this.commands = commands;
  }

  execute() {
    for (let i = 0; i < this.commands.length; i += 1) {
      this.commands[i].execute();
    }
  }
}
