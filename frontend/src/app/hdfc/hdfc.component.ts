import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-hdfc',
  standalone: true,
  imports: [RecentreviewsComponent,NgFor,NgIf,NgClass],
  templateUrl: './hdfc.component.html',
  styleUrl: './hdfc.component.css'
})
export class HdfcComponent {
  reviews: any[] = [];
  hdfcBankDetails: any;
  bankId: number = 221; // ID for HDFC Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.gethdfcBankDetails();
    this.loadReviews();
  }

  gethdfcBankDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.hdfcBankDetails = data;
    });
  }

  loadReviews(): void {
    this.reviewService.getReviewsByBankId(this.bankId).subscribe((data: any[]) => {
      this.reviews = data;
    });
  }

}
