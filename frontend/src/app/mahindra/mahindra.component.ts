import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-mahindra',
  standalone: true,
  imports: [RecentreviewsComponent,NgClass,NgFor,NgIf],
  templateUrl: './mahindra.component.html',
  styleUrl: './mahindra.component.css'
})
export class MahindraComponent {
  reviews: any[] = [];
  mahindracardealerDetails: any;
  bankId: number = 334; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.mahindracardealerDetails();
    this.loadReviews();
  }


  getmahindraBankDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.mahindracardealerDetails = data;
    });
  }

  loadReviews(): void {
    this.reviewService.getReviewsByBankId(this.bankId).subscribe((data: any[]) => {
      this.reviews = data;
    });
  }

}
