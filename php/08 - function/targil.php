<?php

    //the numbers will be between 0-100
    $min = 100;
    $max = 0;

    $grades=[95,87,90,90,100,10,50,89,70,80,90,90,100];

    calcAvgMinMax($grades);

    function calcAvgMinMax($grade){
        $avg=0;
        foreach ($grade as $item){
            // if ($item>$max){
            //     $max=$item;
            // }
            $max=$item>$max?$item:$max;
            $min=$item<$min?$item:$min;
            $avg+=$item;
        }
        $avg/=count($grade);

        echo "avg: $avg  min: $min   max: $max";
    }

?>