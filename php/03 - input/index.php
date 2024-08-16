<?php
    // echo "please enter you full name: ";
    // $fullName = trim(fgets(STDIN));

    $fullName = readline("enter your name");

    // echo "enter your age:";
    // $age = (int)trim(fgets(STDIN));
    $age = (int)readline("Enter your age");

    $year = 2024-$age;
    echo "hello $fullName, you was born in $year";
?>