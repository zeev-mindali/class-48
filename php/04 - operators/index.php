<?php

    $a=100;
    $b = 200;

    echo $a+$b; //300
    echo $a-$b; //-100
    echo $a*$b; //20,000
    echo $a/$b; //0.5

    //shorted
    $x = 100; 
    $x += 8; //$x=$x+8;
    $x -= 9;
    $x *= 10;
    $x /= 10; //$x = $x / 10;
    $x %= 8;

    $x++;
    $x--;

    //a=100, b=200
    echo ($a>$b); //""
    echo ($a<$b); //1
    echo ($a>=$b); //""
    echo ($a==$b); //""
    echo ($a!=$b); //1
    echo ($a===$b); //

    echo !($a>$b); //1
?>