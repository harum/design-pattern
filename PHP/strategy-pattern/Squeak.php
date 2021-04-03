<?php

require_once './QuackBehavior.php';

class Squeak implements QuackBehavior {
  public function quack(): void {
    echo "Squeak.\n";
  }
}
