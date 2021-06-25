import RemoteControl from './RemoteControl.js';
import MacroCommand from './MacroCommand.js';
import Light from './Light.js';
import TV from './TV.js';
import Stereo from './Stereo.js';
import Hottub from './Hottub.js';

import LightOnCommand from './LightOnCommand.js';
import LightOffCommand from './LightOffCommand.js';
import TVOnCommand from './TVOnCommand.js';
import TVOffCommand from './TVOffCommand.js';
import HottubOnCommand from './HottubOnCommand.js';
import HottubOffCommand from './HottubOffCommand.js';
import StereoOnCommand from './StereoOnCommand.js';
import StereoOffCommand from './StereoOffCommand.js';

export default class RemoteLoader {
  static perform() {
    const remoteControl = new RemoteControl();

    const light = new Light('Living Room');
    const tv = new TV('Living Room');
    const stereo = new Stereo('Living Room');
    const hottub = new Hottub();

    const lightOn = new LightOnCommand(light);
    const lightOff = new LightOffCommand(light);
    const stereoOn = new StereoOnCommand(stereo);
    const stereoOff = new StereoOffCommand(stereo);
    const tvOn = new TVOnCommand(tv);
    const tvOff = new TVOffCommand(tv);
    const hottubOn = new HottubOnCommand(hottub);
    const hottubOff = new HottubOffCommand(hottub);

    const partyOn = [lightOn, stereoOn, tvOn, hottubOn];
    const partyOff = [lightOff, stereoOff, tvOff, hottubOff];

    const partyOnMacro = new MacroCommand(partyOn);
    const partyOffMacro = new MacroCommand(partyOff);

    remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

    console.log(remoteControl.toString());
    console.log('--- Pushing Macro On ---');
    remoteControl.onButtonWasPushed(0);
    console.log('--- Pushing Macro Off ---');
    remoteControl.offButtonWasPushed(0);
  }
}
