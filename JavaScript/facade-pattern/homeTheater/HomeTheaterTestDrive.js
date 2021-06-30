import Amplifier from './Amplifier.js';
import Tuner from './Tuner.js';
import StreamingPlayer from './StreamingPlayer.js';
import Projector from './Projector.js';
import TheaterLights from './TheaterLights.js';
import Screen from './Screen.js';
import PopcornPopper from './PopcornPopper.js';
import HomeTheaterFacade from './HomeTheaterFacade.js';

export default class HomeTheaterTestDrive {
  static perform() {
    const amp = new Amplifier('Amplifier');
    const tuner = new Tuner('AM/FM Tuner', amp);
    const player = new StreamingPlayer('Streaming Player', amp);
    const projector = new Projector('Projector', player);
    const lights = new TheaterLights('Theater Ceiling Lights');
    const screen = new Screen('Theater Screen');
    const popper = new PopcornPopper('Popcorn Popper');

    const homeTheater = new HomeTheaterFacade(
      amp, tuner, player, projector, screen, lights, popper,
    );

    homeTheater.watchMovie('Raiders of the Lost Ark');
    homeTheater.endMovie();
  }
}
