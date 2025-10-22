import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-about-component',
  imports: [DatePickerModule],
  standalone: true,
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss'
})
export class AboutComponent {

}
