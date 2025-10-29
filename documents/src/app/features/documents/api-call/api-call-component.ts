import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-api-call-component',
  imports: [ButtonModule, JsonPipe],
  standalone: true,
  templateUrl: './api-call-component.html',
  styleUrl: './api-call-component.scss'
})
export class ApiCallComponent {
  data: any;

  async fetch() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    this.data = await response.json();
  }

}
