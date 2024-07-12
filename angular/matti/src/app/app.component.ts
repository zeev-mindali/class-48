import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor,NgClass ,NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,NgClass,NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'matti';
  matti_children = ["girl","boy","girl","girl","boy","boy","gabriel"];
  boy = "boy";
  girl = "girl";
}
