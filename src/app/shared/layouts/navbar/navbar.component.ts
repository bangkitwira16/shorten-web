import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('menuAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hide',
        style({
          height: 0,
          padding: 0,
          opacity: 0,
          transform: 'translateY(-20px)',
        })
      ),
      transition('hide => show', animate('300ms ease-in')),
      transition('show => hide', animate('300ms ease-out')),
    ]),
  ],
})
export class NavbarComponent {
  showMenu = false;
}
