import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardIconComponent } from 'src/app/shared/components/card-icon/card-icon.component';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule, CardIconComponent],
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent {}
