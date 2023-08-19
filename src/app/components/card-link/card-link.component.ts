import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card-link',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.scss'],
})
export class CardLinkComponent {}
