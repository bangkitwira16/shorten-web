import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenFormComponent } from './components/shorten-form/shorten-form.component';
import { StoryComponent } from './components/story/story.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { CardLinkComponent } from 'src/app/shared/components/card-link/card-link.component';
import { ShortenService } from 'src/app/cores/services/shorten.service';
import { Shorten } from 'src/app/cores/types/models/shorten.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ShortenFormComponent,
    StoryComponent,
    CardLinkComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  shortenList: Partial<Shorten>[] = [];
  isSubmitting = false;
  copyIndex: number | null = null;
  errorMessage = '';
  constructor(
    private shortenService: ShortenService
  ) {}

  ngOnInit(): void {
    this.shortenService.currentShortenList.subscribe(
      (data) => (this.shortenList = data)
    );
  }
  submitUrl(url: string): void {
    this.isSubmitting = true;
    this.shortenService.shortenUrl(url).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        const data = [
          ...this.shortenList,
          {
            original_link: res.result.original_link,
            short_link: res.result.short_link,
          },
        ];
        this.shortenService.addShorten(data);
      },
      error: (err) => {
        this.isSubmitting = false;
        if (err?.error?.error) this.errorMessage = err.error.error;
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      },
    });
  }
  onCopyUrl(i: number, url: string): void {
    this.copyIndex = i;
    setTimeout(() => {
      this.copyIndex = null;
    }, 3000);
    this.shortenService.copyUrl(url);
  }
}
