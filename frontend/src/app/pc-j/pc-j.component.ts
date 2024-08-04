import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pc-j',
  standalone: true,
  imports: [RecentreviewsComponent,NgClass,NgFor,NgIf],
  templateUrl: './pc-j.component.html',
  styleUrl: './pc-j.component.css'
})
export class PcJComponent {
  reviews: any[] = [];
  filteredReviews: any[] = [];
  pcJewellyDetails: any;
  bankId: number = 554; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.getpcJewellyDetails();
    this.loadReviews();
  }

  getpcJewellyDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.pcJewellyDetails = data;
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
