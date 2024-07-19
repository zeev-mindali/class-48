import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-input-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-user.component.html',
  styleUrl: './input-user.component.css'
})
export class InputUserComponent {
    fruit_input = "melon";

    constructor(private fruitService:FruitsService){}

    addFruit(){
        this.fruitService.addFruits(this.fruit_input);
    }
}
