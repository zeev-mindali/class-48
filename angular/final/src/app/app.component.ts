import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkerDirective } from './dir/marker.directive';
import { SalaryPointerDirective } from './dir/salary-pointer.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarkerDirective,SalaryPointerDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final';
}
