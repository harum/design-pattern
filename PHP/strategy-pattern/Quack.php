<?php

require_once './QuackBehavior.php';

class Quack implements QuackBehavior {
  public function quack(): void {
    echo "Quack.\n";
  }
}
