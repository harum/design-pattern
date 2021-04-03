<?php

require_once './FlyBehavior.php';

class FlyNoWay implements FlyBehavior {
  public function fly(): void {
    echo "Can not fly!\n";
  }
}


