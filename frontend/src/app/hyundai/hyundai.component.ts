import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";

@Component({
  selector: 'app-hyundai',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, RecentreviewsComponent],
  templateUrl: './hyundai.component.html',
  styleUrl: './hyundai.component.css'
})
export class HyundaiComponent {
  reviews: any[] = [];
  hyundaicardealerDetails: any;
  filteredReviews: any[] = [];
  bankId: number = 332; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.hyundaicardealerDetails();
    this.loadReviews();
  }


  gethyundaiBankDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.hyundaicardealerDetails = data;
    });
  }

  loadReviews(): void {
    this.reviewService.getReviewsByBankId(this.bankId).subscribe((data: any[]) => {
      this.reviews = data;
      this.filterReviews();
    });
  }

  filterReviews(): void {
    this.filteredReviews = this.reviews.filter(review => review.bank_id === this.bankId);
  }
}
