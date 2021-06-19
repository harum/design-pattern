import SimpleRemoteControl from './SimpleRemoteControl.js';
import Light from './Light.js';
import GarageDoor from './GarageDoor.js';

export default class RemoteControlTest {
  static perform() {
    const remote = new SimpleRemoteControl();

    const light = new Light();
    remote.setCommand(() => light.on());
    remote.buttonWasPressed();

    const garageDoor = new GarageDoor();
    remote.setCommand(() => garageDoor.up());
    remote.buttonWasPressed();
  }
}
