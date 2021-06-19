export default class SimpleRemoteControl {
  slot;

  setCommand(command) {
    this.slot = command;
  }

  buttonWasPressed() {
    this.slot.execute();
  }
}
