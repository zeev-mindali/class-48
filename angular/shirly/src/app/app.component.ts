import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass} from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shirly';
  classArray = ["red","yellow","green","orange"];
  pointer = 0;

  changeClass_gabriel(){
    console.log(this.pointer);
    if (this.pointer==this.classArray.length-1){
        this.pointer=0;
    } else {
        this.pointer++;
    }
  }

  changeClass(){
    console.log(this.pointer);
    this.pointer++;
  }
}


/*
צרו 3 קלאסים בקומפננט עיצוב, ובתוך הפקודות צרו מערך המכיל את 3 המחלקות שייצרתם
בתצוגה, צרו כפתור הבא שבכל פעם שנלחץ עליו הוא יעבור למחלקה הבאה תשפיע על אלמנט מכיל כלשהוא
ותגרום לו בכל פעם להיות מושפע ממחלקת עיצוב אחרת לפי הסדר במערך
כאשר נהיה בתא השני (האחרון) ונלחץ הבא, הוא יחזור לתא 0
*/