export default class RemoteControll {
  onCommands;

  offCommands;

  constructor() {
    this.onCommands = new Array(7);
    this.offCommands = new Array(7);

    for (let i = 0; i < 7; i += 1) {
      this.onCommands[i] = () => {};
      this.offCommands[i] = () => {};
    }
  }

  setCommand(slot, onCommand, offCommand) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot) {
    this.onCommands[slot]();
  }

  offButtonWasPushed(slot) {
    this.offCommands[slot]();
  }

  toString() {
    let string = '';
    string += '\n----- Remote Control -----\n';
    for (let i = 0; i < 7; i += 1) {
      string += `[slot ${i}] ${this.onCommands[i].name}   ${this.offCommands[i].name}\n`;
    }
    return string;
  }
}
