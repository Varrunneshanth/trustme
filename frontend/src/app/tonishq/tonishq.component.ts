import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tonishq',
  standalone: true,
  imports: [RecentreviewsComponent,NgFor,NgIf,NgClass],
  templateUrl: './tonishq.component.html',
  styleUrl: './tonishq.component.css'
})
export class TonishqComponent {
  reviews: any[] = [];
  filteredReviews: any[] = [];
  TanishqJewellyDetails: any;
  bankId: number = 222; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.getTanishqJewellyDetails();
    this.loadReviews();
  }

  getTanishqJewellyDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.TanishqJewellyDetails = data;
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
