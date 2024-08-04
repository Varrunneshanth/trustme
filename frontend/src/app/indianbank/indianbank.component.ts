import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";

@Component({
  selector: 'app-indianbank',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, RecentreviewsComponent],
  templateUrl: './indianbank.component.html',
  styleUrl: './indianbank.component.css'
})
export class IndianbankComponent {
  reviews: any[] = [];
  indianBankDetails: any;
  filteredReviews: any[] = [];
  bankId: number = 224; // ID for HDFC Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getindianBankDetails();
    this.loadReviews();
  }

  getindianBankDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.indianBankDetails = data;
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
