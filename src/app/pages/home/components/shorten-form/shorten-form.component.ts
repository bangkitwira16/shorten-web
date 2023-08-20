import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-shorten-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './shorten-form.component.html',
  styleUrls: ['./shorten-form.component.scss'],
})
export class ShortenFormComponent {
  @Input() submitting = false;
  @Input() errorMessage = '';
  @Output() submitForm = new EventEmitter();
  formSearch: FormGroup = new FormGroup({
    link: new FormControl('', [Validators.required]),
  });

  get link() {
    return this.formSearch.get('link');
  }

  submit(): void {
    this.submitForm.emit(this.link?.value);
  }
}
