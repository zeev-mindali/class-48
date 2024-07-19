import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FruitsService {
    fruits_ar: string[] = [];
    drinks_ar:any [] = [];

    constructor() {
        this.fruits_ar = ["melon", "mango", "orange"];
        this.drinks_ar =[
            {name:"beer",price: 3,alcohol:0.05, expired:"2022-05-10"},
            {name:"cola",price: 2.5, alcohol:0.00, expired:"2025-01-01"}
        ];
    }

    getFruits(){
        return this.fruits_ar;
    }

    addFruits(userVal:string){
        this.fruits_ar.push(userVal);
    }
}
