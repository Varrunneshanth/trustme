import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-shoppers-stop',
  standalone: true,
  imports: [RecentreviewsComponent,NgClass,NgFor,NgIf],
  templateUrl: './shoppers-stop.component.html',
  styleUrl: './shoppers-stop.component.css'
})
export class ShoppersStopComponent {
  reviews: any[] = [];
  shoppersclothingDetails: any;
  filteredReviews: any[] = [];
  bankId: number = 443; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.shoppersclothingDetails();
    this.loadReviews();
  }


    getshoppersclothingDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.shoppersclothingDetails = data;
    });
  }

  loadReviews(): void {
    this.reviewService.getReviewsByBankId(this.bankId).subscribe((data: any[]) => {
      this.reviews = data;
      this.filterReviews()
    });
  }

  filterReviews(): void {
    this.filteredReviews = this.reviews.filter(review => review.bank_id === this.bankId);
  }

}
