import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";

@Component({
  selector: 'app-icicbank',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RecentreviewsComponent],
  templateUrl: './icicbank.component.html',
  styleUrl: './icicbank.component.css'
})
export class IcicbankComponent {
  reviews: any[] = [];
  icicBankDetails: any;
  bankId: number = 224; // ID for HDFC Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.geticicBankDetails();
    this.loadReviews();
  }

  geticicBankDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.icicBankDetails = data;
    });
  }

  loadReviews(): void {
    this.reviewService.getReviewsByBankId(this.bankId).subscribe((data: any[]) => {
      this.reviews = data;
    });
  }
}
