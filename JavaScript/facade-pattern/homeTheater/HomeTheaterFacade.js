export default class HomeTheaterFacade {
  amp;

  tuner;

  player;

  cd;

  projector;

  lights;

  screen;

  popper;

  constructor(amp, tuner, player, projector, screen, lights, popper) {
    this.amp = amp;
    this.tuner = tuner;
    this.player = player;
    this.projector = projector;
    this.screen = screen;
    this.lights = lights;
    this.popper = popper;
  }

  watchMovie(movie) {
    console.log('Get ready to watch a movie...');
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setStreamingPlayer(this.player);
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.player.on();
    this.player.play(movie);
  }

  endMovie() {
    console.log('Shutting movie theater down...');
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.player.stop();
    this.player.off();
  }

  listenToRadio(frequency) {
    console.log('Tuning in the airwaves...');
    this.tuner.on();
    this.tuner.setFrequency(frequency);
    this.amp.on();
    this.amp.setVolume(5);
    this.amp.setTuner(this.tuner);
  }

  endRadio() {
    console.log('Shutting down the tuner...');
    this.tuner.off();
    this.amp.off();
  }
}
