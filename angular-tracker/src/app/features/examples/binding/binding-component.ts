import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-binding-component',
  imports: [FormsModule, InputTextModule, IftaLabelModule, ButtonModule],
  standalone: true,
  templateUrl: './binding-component.html',
  styleUrl: './binding-component.scss'
})
export class BindingComponent {
  userName: string = '';
  counter = signal(0);
}
