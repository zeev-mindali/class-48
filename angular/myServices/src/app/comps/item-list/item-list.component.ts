import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FruitsService } from '../../services/fruits.service';
import { UpperCasePipe,CurrencyPipe,PercentPipe,DecimalPipe,DatePipe } from '@angular/common';
import _ from 'lodash';


@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [NgFor,NgbModule,UpperCasePipe,CurrencyPipe,PercentPipe,DecimalPipe,DatePipe],
  
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit{
    listFruits_ar = ["apple","kiwi"];
    drinks_ar:any [] = [];

    constructor(private fruitService:FruitsService){
        this.listFruits_ar = this.fruitService.getFruits();
        this.drinks_ar = this.fruitService.drinks_ar;
        this.drinks_ar = _.sortBy(this.drinks_ar,"expired");
    }

    ngOnInit(): void {
       
    }
    
}
