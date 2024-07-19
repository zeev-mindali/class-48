import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './comps/item-list/item-list.component';
import { InputUserComponent } from './comps/input-user/input-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ItemListComponent,InputUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myServices';
}
