import SimpleRemoteControl from './SimpleRemoteControl.js';
import Light from './Light.js';
import LightOnCommand from './LightOnCommand.js';
import GarageDoor from './GarageDoor.js';
import GarageDoorOpenCommand from './GarageDoorOpenCommand.js';

class RemoteControlTest {
  static run() {
    const remote = new SimpleRemoteControl();

    const light = new Light();
    const lightOn = new LightOnCommand(light);
    remote.setCommand(lightOn);
    remote.buttonWasPressed();

    const garageDoor = new GarageDoor();
    const garageDoorOpen = new GarageDoorOpenCommand(garageDoor);
    remote.setCommand(garageDoorOpen);
    remote.buttonWasPressed();
  }
}

RemoteControlTest.run();
