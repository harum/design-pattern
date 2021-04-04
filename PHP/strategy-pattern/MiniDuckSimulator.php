<?php

require_once './Duck.php';
require_once './MallardDuck.php';
require_once './ModelDuck.php';
require_once './FlyRocketPowered.php';

class MiniDuckSimulator {
  private $mallard;
  private $model;

  public function perform() {
    $this->mallard = new MallardDuck();
    $this->mallard->performFly();
    $this->mallard->performQuack();

    $this->model = new ModelDuck();
    $this->model->performFly();
    $this->model->setFlyBehavior(new FlyRocketPowered());
    $this->model->performFly();
  }
}

$duck = new MiniDuckSimulator();
$duck->perform();
