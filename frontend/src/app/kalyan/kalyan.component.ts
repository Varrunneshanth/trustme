import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-kalyan',
  standalone: true,
  imports: [RecentreviewsComponent,NgIf,NgClass,NgFor],
  templateUrl: './kalyan.component.html',
  styleUrl: './kalyan.component.css'
})
export class KalyanComponent {
  reviews: any[] = [];
  filteredReviews: any[] = [];
  kalyanJewellyDetails: any;
  bankId: number = 222; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.getkalyanJewellyDetails();
    this.loadReviews();
  }

  getkalyanJewellyDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.kalyanJewellyDetails = data;
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
