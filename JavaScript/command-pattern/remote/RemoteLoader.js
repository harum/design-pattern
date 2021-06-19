import RemoteControl from './RemoteControl.js';
import Light from './Light.js';
import CeilingFan from './CeilingFan.js';
import GarageDoor from './GarageDoor.js';
import Stereo from './Stereo.js';

import LightOnCommand from './LightOnCommand.js';
import LightOffCommand from './LightOffCommand.js';
import CeilingFanOnCommand from './CeilingFanOnCommand.js';
import CeilingFanOffCommand from './CeilingFanOffCommand.js';
import GarageDoorUpCommand from './GarageDoorUpCommand.js';
import GarageDoorDownCommand from './GarageDoorDownCommand.js';
import StereoOnWithCDCommand from './StereoOnWithCDCommand.js';
import StereoOffCommand from './StereoOffCommand.js';

export default class RemoteLoader {
  static perform() {
    const remoteControl = new RemoteControl();

    const livingRoomLight = new Light('Living Room');
    const kitchenLight = new Light('Kitchen');
    const ceilingFan = new CeilingFan('Living Room');
    const garageDoor = new GarageDoor('Garage');
    const stereo = new Stereo('Living Room');

    const livingRoomLightOn = new LightOnCommand(livingRoomLight);
    const livingRoomLightOff = new LightOffCommand(livingRoomLight);
    const kitchenLigthtOn = new LightOnCommand(kitchenLight);
    const kitchenLigthtOff = new LightOffCommand(kitchenLight);

    const ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
    const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

    const garageDoorUp = new GarageDoorUpCommand(garageDoor);
    const garageDoorDown = new GarageDoorDownCommand(garageDoor);

    const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
    const stereoOff = new StereoOffCommand(stereo);

    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLigthtOn, kitchenLigthtOff);
    remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
    remoteControl.setCommand(3, stereoOnWithCD, stereoOff);
    remoteControl.setCommand(4, garageDoorUp, garageDoorDown);

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
