import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-malabar-gold',
  standalone: true,
  imports: [RecentreviewsComponent,NgClass,NgIf,NgFor],
  templateUrl: './malabar-gold.component.html',
  styleUrl: './malabar-gold.component.css'
})
export class MalabarGoldComponent {
  reviews: any[] = [];
  filteredReviews: any[] = [];
  malabargobJewellyDetails: any;
  bankId: number = 553; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.getmalabargobJewellyDetails();
    this.loadReviews();
  }

  getmalabargobJewellyDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.malabargobJewellyDetails = data;
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
