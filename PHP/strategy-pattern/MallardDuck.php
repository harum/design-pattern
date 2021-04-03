<?php

require_once './Duck.php';
require_once './Quack.php';
require_once './FlyWithWings.php';

class MallardDuck extends Duck {
  function __construct() {
    $this->quackBehavior = new Quack();
    $this->flyBehavior = new FlyWithWings();
  }

  public function display() {
    echo "I'am real Mallard duck\n";
  }
}
