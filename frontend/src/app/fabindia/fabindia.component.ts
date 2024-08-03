import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-fabindia',
  standalone: true,
  imports: [RecentreviewsComponent,NgIf,NgFor,NgClass],
  templateUrl: './fabindia.component.html',
  styleUrl: './fabindia.component.css'
})
export class FabindiaComponent {
  reviews: any[] = [];
  fabindiaclothingDetails: any;
  filteredReviews: any[] = [];
  bankId: number = 225; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.fabindiaclothingDetails();
    this.loadReviews();
  }


  getfabindiaclothingDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.fabindiaclothingDetails = data;
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
