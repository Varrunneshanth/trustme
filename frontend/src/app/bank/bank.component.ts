import { Component } from '@angular/core';
import { CreditUnion, ReviewService } from '../review.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {
  
  hdfcBankDetails: any;
  creditUnions: CreditUnion[] = [];

  constructor(private creditUnionService: ReviewService) { }

  ngOnInit(): void {
    this.creditUnionService.getHdfcBankDetails().subscribe(data => {
      this.hdfcBankDetails = data;
    });
  }

  
}
