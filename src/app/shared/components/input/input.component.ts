import { Component, Input, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputOption } from 'src/app/cores/types/components/input';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
})
export class InputComponent {
  @Input() options: InputOption = {
    controlName: ''
  }
}
