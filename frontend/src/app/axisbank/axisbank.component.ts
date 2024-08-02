import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";

@Component({
  selector: 'app-axisbank',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, RecentreviewsComponent],
  templateUrl: './axisbank.component.html',
  styleUrl: './axisbank.component.css'
})
export class AxisbankComponent {
  reviews: any[] = [];
  axisBankDetails: any;
  bankId: number = 222; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getaxisBankDetails();
    this.loadReviews();
  }


  getaxisBankDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.axisBankDetails = data;
    });
  }

  loadReviews(): void {
    this.reviewService.getReviewsByBankId(this.bankId).subscribe((data: any[]) => {
      this.reviews = data;
    });
  }
}
