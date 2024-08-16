<?php

    sayHi();

    teacherPunish("i will do my homework every time",500);

    function sayHi(){
        echo "Hello class 48 - the best that lecturer can get";
    }


    function teacherPunish($message,$times=100){
        for ($counter=0;$counter<$times;$counter++){
            echo $message."<br/>";
        }
    }

    //תרגיל כיתה
    //צרו פונקציה המקבל מספר לא ידוע של מספרים
    //ומציגה את המספר הגדול ביותר, הקטן ביותר והממוצע

?>