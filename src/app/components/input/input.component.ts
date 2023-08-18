import { Component, Input, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOption } from 'src/app/types/components/input';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
