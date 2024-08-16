<?php

    header('Content-type: txt/plain');
    $arr1 = array(10,20,30,"hi");

    //#1 way simple for
    for ($index=0;$index<count($arr1);$index++){
        echo $arr1[index];
    }

    ///list and first item
    $lastItem = count($arr1)-1;
    echo "first item $arr1[0] and last item $arr1[$lastItem]";


    //#2 - create array
    $arr2=[10,20,30,"hi"];

    //#3 - insert data
    for ($index=0;$index<10;$index++){
        $arr3[index]=$index+1;
    }

    //#4 - insert data to last place, like push in js
    for ($index=0;$index<10;$index++){
        $arr3[] = $index+1;
    }

    //matrix
    //to insert a value in row 2 , col 2 
    $arr4[2][2] = 4;

    //תרגיל כיתה
    //הכניסו את לוח הכפל לתוך מטריצה


    $student = ["Yarden","Ilan","Shirly","Igor"];
    foreach ($arr1 as $item){
        echo $item."<br/>";
    }

    $student2 = ["Gabriel"=>"samoylov","ilan"=>"Ben haim","Matti"=>"Laufer", "Yaroslav"=>"Tarkevich"];
    foreach ($student2 as $value){
        echo $value." ";
    }

    foreach($student2 as $key=>$value){
        echo $key." from family ".$value;
    }

    $student["bestStudent"]="Ilan ben Haim";
    $student["theStudent"]="Matti Laufer";

    echo $sudent["theStudent"];
    
?>