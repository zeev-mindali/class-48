import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './mainLayout/header/header.component';
import { FormsModule } from '@angular/forms';
import { MarkAttributeDirective } from './dir/mark-attribute.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FormsModule,MarkAttributeDirective,NgIf], //telling angular, which components we shell use....
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    classNumber = "Class 48";
    classSlogan = "The best that lecturer can get"

    bossName = "Ofir";
    bossComputer = "macbook air"; //little boss

    userPlaceHolder = "tell me how do you feel";

    userResponse = "";

    userAge=0;

    tellLies = true;

    youInTheArmyNow=false;

    showWhoIsYourBoss(){
        return `hello ${this.bossName} congrts for buying ${this.bossComputer}`;
    }
    // //primitive
    // num:number = 5;
    // num2:number = 4.3;
    // num3:number = 0xff0000;

    // word:string = "Hello";
    // //כל מידע שנרצה להכניס, כי אנחנו לא החלטיים
    // wordNum:any = "5";

    // //מערכים

    // //מערך שכל תא חייב להיות סטרינג
    // word_ar:string[]  = ["jordan","dead sea","Meditarian"];
    // //אפשרות נוספת להגדרת מערך של סטרינגים
    // words2_arr:Array<string> = ["Ilan","Ben","Haim"];

    // //מערך שנקבע לו את סוג התא, וכמות התאים
    // //hybridAr:[string,number] = ["scrren_data_x",1024];
    // //hybridAr:["scrren_data_x",1024] = "255,0,0,0";

    // //פונקציה שחייב להחזיר מספר
    // multi(x:number,y:number):number{
    //     return x*y;
    // }

    onFeelingsUpdate(event:any){
        console.log(event.target.value)
        this.userResponse = event.target.value;
    }
}
