import RemoteControl from './RemoteControl.js';
import Light from './Light.js';
import CeilingFan from './CeilingFan.js';
import GarageDoor from './GarageDoor.js';
import Stereo from './Stereo.js';

export default class RemoteLoader {
  static perform() {
    const remoteControl = new RemoteControl();

    const livingRoomLight = new Light('Living Room');
    const kitchenLight = new Light('Kitchen');
    const ceilingFan = new CeilingFan('Living Room');
    const garageDoor = new GarageDoor('Garage');
    const stereo = new Stereo('Living Room');

    remoteControl.setCommand(0, () => livingRoomLight.on(), () => livingRoomLight.off());
    remoteControl.setCommand(1, () => kitchenLight.on(), () => kitchenLight.off());
    remoteControl.setCommand(2, () => ceilingFan.high(), () => ceilingFan.off());
    remoteControl.setCommand(
      3,
      () => {
        stereo.on();
        stereo.setCD();
        stereo.setVolume(11);
      },
      () => stereo.off(),
    );
    remoteControl.setCommand(4, () => garageDoor.up(), () => garageDoor.down());

    console.log(`${remoteControl}`);

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
    remoteControl.onButtonWasPushed(2);
    remoteControl.offButtonWasPushed(2);
    remoteControl.onButtonWasPushed(3);
    remoteControl.offButtonWasPushed(3);
    remoteControl.onButtonWasPushed(4);
    remoteControl.offButtonWasPushed(4);
  }
}
