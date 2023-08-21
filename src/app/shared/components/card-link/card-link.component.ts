import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { CardLink } from 'src/app/cores/types/components/card-link';

@Component({
  selector: 'app-card-link',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.scss'],
})
export class CardLinkComponent {
  @Input() options: CardLink = {
    link: '',
    shortLink: '',
  };
  @Input() copyIndex: null | number = null; 
  @Output() copyClick = new EventEmitter();
}
