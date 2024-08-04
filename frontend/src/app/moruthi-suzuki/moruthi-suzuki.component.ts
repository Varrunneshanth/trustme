import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-moruthi-suzuki',
  standalone: true,
  imports: [RecentreviewsComponent,NgIf,NgFor,NgClass],
  templateUrl: './moruthi-suzuki.component.html',
  styleUrl: './moruthi-suzuki.component.css'
})
export class MoruthiSuzukiComponent {
  reviews: any[] = [];
  moruthicardealerDetails: any;
  bankId: number = 331; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.moruthicardealerDetails();
    this.loadReviews();
  }


  getmoruthiBankDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.moruthicardealerDetails = data;
    });
  }

  loadReviews(): void {
    this.reviewService.getReviewsByBankId(this.bankId).subscribe((data: any[]) => {
      this.reviews = data;
    });
  }

}
