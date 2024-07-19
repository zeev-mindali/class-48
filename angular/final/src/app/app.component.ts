import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkerDirective } from './dir/marker.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarkerDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final';
}
