import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardIconOption } from 'src/app/cores/types/components/card-icon';

@Component({
  selector: 'app-card-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss'],
})
export class CardIconComponent {
  @Input() options: CardIconOption = {
    title: '',
    description: '',
    image: '',
  };
}
