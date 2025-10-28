import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-about-component',
  imports: [DatePickerModule, InputTextModule],
  standalone: true,
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss'
})
export class AboutComponent {

}
