import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tata-motors',
  standalone: true,
  imports: [RecentreviewsComponent,NgIf,NgFor,NgClass],
  templateUrl: './tata-motors.component.html',
  styleUrl: './tata-motors.component.css'
})
export class TataMotorsComponent {
  reviews: any[] = [];
  tatamotorscardealerDetails: any;
  bankId: number = 225; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.tatamotorscardealerDetails();
    this.loadReviews();
  }


  gettatamotorsBankDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.tatamotorscardealerDetails = data;
    });
  }

  loadReviews(): void {
    this.reviewService.getReviewsByBankId(this.bankId).subscribe((data: any[]) => {
      this.reviews = data;
    });
  }

}
