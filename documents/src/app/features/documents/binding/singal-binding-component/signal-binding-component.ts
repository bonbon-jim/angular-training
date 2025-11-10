import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { CodexWrapper } from "../../../../components/codex-wrapper/codex-wrapper";

@Component({
  selector: 'doc-binding-singal-binding',
  imports: [FormsModule, InputTextModule, IftaLabelModule, ButtonModule, CodexWrapper],
  templateUrl: './signal-binding-component.html',
  styleUrl: './signal-binding-component.scss'
})
export class SignalBindingComponent {
  userName: string = '';
  counter = signal(0);

  inputDemoCode = `<input pInputText id="in_label" [(ngModel)]="userName" autocomplete="off" />`;
}
