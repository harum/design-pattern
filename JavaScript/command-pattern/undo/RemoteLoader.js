import RemoteControlWithUndo from './RemoteControlWithUndo.js';
import Light from './Light.js';
import CeilingFan from './CeilingFan.js';

import LightOnCommand from './LightOnCommand.js';
import LightOffCommand from './LightOffCommand.js';
import CeilingFanHighCommand from './CeilingFanHighCommand.js';
import CeilingFanMediumCommand from './CeilingFanMediumCommand.js';
import CeilingFanOffCommand from './CeilingFanOffCommand.js';

export default class RemoteLoader {
  static perform() {
    const remoteControl = new RemoteControlWithUndo();

    const livingRoomLight = new Light('Living Room');
    const ceilingFan = new CeilingFan('Living Room');

    const livingRoomLightOn = new LightOnCommand(livingRoomLight);
    const livingRoomLightOff = new LightOffCommand(livingRoomLight);
    const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);
    const ceilingFanMedium = new CeilingFanMediumCommand(ceilingFan);
    const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, ceilingFanHigh, ceilingFanOff);
    remoteControl.setCommand(2, ceilingFanMedium, ceilingFanOff);

    console.log(`${remoteControl}`);

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.undoButtonWasPushed(0);

    remoteControl.onButtonWasPushed(1);
    remoteControl.onButtonWasPushed(2);
    remoteControl.undoButtonWasPushed(0);
  }
}
