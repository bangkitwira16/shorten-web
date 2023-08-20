import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonOption } from 'src/app/cores/types/components/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() options: ButtonOption = {
    text: '',
    rounded: 'md',
  };
  @Output() onClick = new EventEmitter();
}
