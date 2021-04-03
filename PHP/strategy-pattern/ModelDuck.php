<?php

require_once './Duck.php';
require_once './Quack.php';
require_once './FlyNoWay.php';

class ModelDuck extends Duck {
  function __construct() {
    $this->quackBehavior = new Quack();
    $this->flyBehavior = new FlyNoWay();
  }

  public function display() {
    echo "I'am a model duck\n";
  }
}
