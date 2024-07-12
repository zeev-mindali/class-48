import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
    @Output() addProdEvent = new EventEmitter();

    fruit_input="melon";
    addProduct(){
        this.addProdEvent.emit(this.fruit_input);
      }
}
