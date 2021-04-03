<?php

require_once './QuackBehavior.php';

class MuteQuack implements QuackBehavior {
  public function quack(): void {
    echo "Silence\n";
  }
}
