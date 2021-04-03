<?php

require_once './FlyBehavior.php';
require_once './QuackBehavior.php';

abstract class Duck {
  protected $flyBehavior;
  protected $quackBehavior;

  abstract public function display();

  public function setFlyBehavior($flyBehavior) {
    $this->flyBehavior = $flyBehavior;
  }

  public function setQuackBehavior($quackBehavior) {
    $this->quackBehavior = $quackBehavior;
  }

  public function performFly() {
    $this->flyBehavior->fly();
  }

  public function performQuack() {
    $this->quackBehavior->quack();
  }

  public function swim() {
    echo "All ducks float, even decoys!\n";
  }
}
