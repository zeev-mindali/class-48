<?php

    $a=10;

    if($a>5) {
        echo "$a is grater then 5";
    } elseif ($a<5) {
        echo "$a is less the 5";
    } else {
        echo ("the number is equal to 5");
    }


    $b = 666;
    switch ($a){
        case 1:
            echo "one";
            break;
        case 2:
            echo "two";
            break;
        case 3:
            echo "third";
            break;
        default:
            echo "hello to zeev mother in law";
    }

    $str="gabriel";
    switch ($str){
        case "Igor":
            echo "the smart one";
            break;
        case "Dima":
            echo "the borther one";
            break;
        case "Ilan":
            echo "the bravest one";
            break;
        case "Matti":
            echo "the hairiest one";
            break;
        defualt:
            echo "DIE DIE DIE !!!!";
    }

    $grade = 85;
    switch ($grade){
        case $grade>100:
            echo "no bouns in test, final is 100";
            break;
        case $grade>94;
            echo "A+";
            break;
        case $grade>90:
            echo "A";
            break;
        case $grade>85;
            echo "B+";
            break;
        default:
            echo "Hello Matti";      
    }

    $num1 = 10;
    $num2 = 20;

    //מצאו מי המספר הגבוה ביותר
    
?>