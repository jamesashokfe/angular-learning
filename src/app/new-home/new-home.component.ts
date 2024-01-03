import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarPipe } from '../star.pipe';

@Component({
  selector: 'app-new-home',
  standalone: true,
  imports: [FormsModule, DatePipe, DecimalPipe, CurrencyPipe, StarPipe],
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.scss'
})
export class NewHomeComponent {
  houseName: string = '';
  registrationDate = new Date();
}
