import NoCommand from './NoCommand.js';

export default class RemoteControllWithUndo {
  onCommands;

  offCommands;

  undoCommand;

  constructor() {
    this.onCommands = new Array(7);
    this.offCommands = new Array(7);

    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i += 1) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }

    this.undoCommand = noCommand;
  }

  setCommand(slot, onCommand, offCommand) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  offButtonWasPushed(slot) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  undoButtonWasPushed() {
    this.undoCommand.undo();
  }

  toString() {
    let string = '';
    string += '\n----- Remote Control -----\n';
    for (let i = 0; i < 7; i += 1) {
      string += `[slot ${i}] ${this.onCommands[i].constructor.name}   ${this.offCommands[i].constructor.name}\n`;
    }
    return string;
  }
}
