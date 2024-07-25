import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RecentreviewsComponent } from "../recentreviews/recentreviews.component";
import { Review, ReviewService } from '../review.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RecentreviewsComponent,NgIf,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // categories: { name: string, icon: string }[] = [
  //   { name: 'Bank', icon: 'assets/icons/bank.png' },
  //   { name: 'Car Dealer', icon: 'assets/icons/car-dealer.png' },
  //   { name: 'Jewelry Store', icon: 'assets/icons/jewelry-store.png' },
  //   { name: 'Clothing Store', icon: 'assets/icons/clothing-store.png' },
  // ];

  

//   reviews: any[] = [
//     // You can pre-populate with some reviews if needed
//   ];

//   addReview(review: any) {
//     this.reviews.unshift(review);
//   }


reviews: any[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getReviews().subscribe((data: any[]) => {
      this.reviews = data;
    });
  }
}
