import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CenterDirective } from './diriectives/center.directive';
import { MyWifeDirective } from './diriectives/my-wife.directive';
import { OutOfBoundsDirective } from './diriectives/out-of-bounds.directive';
import { NgIf} from '@angular/common'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CenterDirective,MyWifeDirective,OutOfBoundsDirective,FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'takeMeYeruslav';
  girlYear = 0;
}
