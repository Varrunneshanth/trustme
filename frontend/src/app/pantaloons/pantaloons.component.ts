import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pantaloons',
  standalone: true,
  imports: [RecentreviewsComponent,NgIf,NgFor,NgClass],
  templateUrl: './pantaloons.component.html',
  styleUrl: './pantaloons.component.css'
})
export class PantaloonsComponent {
  reviews: any[] = [];
  pantaloonsaclothingDetails: any;
  filteredReviews: any[] = [];
  bankId: number = 225; // ID for Axis Bank

  constructor(private creditUnionService: ReviewService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.pantaloonsaclothingDetails();
    this.loadReviews();
  }


  getpantaloonsclothingDetails(): void {
    this.creditUnionService.getBankDetails(this.bankId).subscribe(data => {
      this.pantaloonsaclothingDetails = data;
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
