import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";

@Component({
  selector: 'app-lifestyle',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RecentreviewsComponent],
  templateUrl: './lifestyle.component.html',
  styleUrl: './lifestyle.component.css'
})
export class LifestyleComponent {
  reviews: any[] = [];
  lifestyleclothDetails: any;
  filteredReviews: any[] = [];
  bankId: number = 225; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.lifestyleclothDetails();
    this.loadReviews();
  }


  getlifestyleclothDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.lifestyleclothDetails = data;
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
