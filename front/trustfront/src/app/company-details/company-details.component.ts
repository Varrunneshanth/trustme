// import { Component } from '@angular/core';
// import { CategoriesService } from '../categories.service';
// import { NgClass, NgFor, NgIf } from '@angular/common';
// import { ReviewService,Review } from '../review.service';
// import { ActivatedRoute } from '@angular/router';
// import { FormsModule } from '@angular/forms';


// @Component({
//   selector: 'app-company-details',
//   standalone: true,
//   imports: [NgIf,NgClass,NgFor,FormsModule],
//   templateUrl: './company-details.component.html',
//   styleUrl: './company-details.component.css'
// })
// export class CompanyDetailsComponent {
  // selectedCompany: any = {}; // Initialize to an empty object

  // constructor(
  //   private route: ActivatedRoute,
  //   private categoriesService: CategoriesService
  // ) { }

  // ngOnInit(): void {
  //   const companyId = this.route.snapshot.paramMap.get('id');
  //   if (companyId) {
  //     this.categoriesService.getCompanyDetails(companyId).subscribe(
  //       (data) => {
  //         this.selectedCompany = data;
  //       },
  //       (error) => {
  //         console.error('Error fetching company details', error);
  //       }
  //     );
  //   }
  // }


  
// }





// company-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { ReviewService, Review } from '../review.service';
import { NgIf, NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [NgIf, NgClass, NgFor, FormsModule],
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  // selectedCompany: any = {};
  // review: Review = { 
  //   comment: '', 
  //   rating: 0
  // };
  // showModal: boolean = false;

  // constructor(
  //   private route: ActivatedRoute,
  //   private categoriesService: CategoriesService,
  //   private reviewService: ReviewService
  // ) { }

  // ngOnInit(): void {
  //   const companyId = this.route.snapshot.paramMap.get('id');
  //   if (companyId) {
  //     this.categoriesService.getCompanyDetails(companyId).subscribe(
  //       (data) => {
  //         this.selectedCompany = data;
  //       },
  //       (error) => {
  //         console.error('Error fetching company details', error);
  //       }
  //     );
  //   }
  // }

  // onSubmit() {
  //   // Use companyId from selectedCompany
  //   const companyId = this.selectedCompany.companyid; // Ensure this matches the property name from your data

  //   if (companyId) {
  //     this.reviewService.addReview(companyId, this.review).subscribe(response => {
  //       console.log('Review submitted', response);
  //       this.review = { 
  //         comment: '', 
  //         rating: 0
  //       };
  //       this.showModal = true;
  //     });
  //   } else {
  //     console.error('Company ID is missing');
  //   }
  // }

  // closeModal() {
  //   this.showModal = false;
  // }




  selectedCompany: any = {};
  review: Review = { 
    comment: '', 
    rating: 0
  };
  reviews: Review[] = [];
  showModal: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    if (companyId) {
      this.categoriesService.getCompanyDetails(companyId).subscribe(
        (data) => {
          this.selectedCompany = data;
          this.loadReviews(companyId); // Load reviews when company details are fetched
        },
        (error) => {
          console.error('Error fetching company details', error);
        }
      );
    }
  }

  loadReviews(companyId: string) {
    this.reviewService.getReviews(companyId).subscribe(
      (data) => {
        this.reviews = data;
      },
      (error) => {
        console.error('Error fetching reviews', error);
      }
    );
  }

  onSubmit() {
    const companyId = this.selectedCompany.companyid; // Ensure this matches the property name

    if (companyId) {
      this.reviewService.addReview(companyId, this.review).subscribe(response => {
        console.log('Review submitted', response);
        this.review = { 
          comment: '', 
          rating: 0
        };
        this.showModal = true;
        this.loadReviews(companyId); // Reload reviews after submitting a new one
      });
    } else {
      console.error('Company ID is missing');
    }
  }

  closeModal() {
    this.showModal = false;
  }
  
}

