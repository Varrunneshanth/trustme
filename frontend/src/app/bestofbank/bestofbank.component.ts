import { Component } from '@angular/core';
import { RecentreviewsComponent } from '../recentreviews/recentreviews.component';
import { NgFor } from '@angular/common';
import { CreditUnion, ReviewService } from '../review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bestofbank',
  standalone: true,
  imports: [RecentreviewsComponent,NgFor],
  templateUrl: './bestofbank.component.html',
  styleUrl: './bestofbank.component.css'
})
export class BestofbankComponent {
  // creditUnions: CreditUnion[] = [];

  // constructor(private creditUnionService: ReviewService) { }

  // ngOnInit(): void {
  //   this.creditUnionService.getCreditUnions().subscribe(data => {
  //     this.creditUnions = data;
  //   });
  // }

  // creditUnions: CreditUnion[] = [];

  // constructor(private creditUnionService: ReviewService, private router: Router) { }

  // ngOnInit(): void {
  //   this.creditUnionService.getCreditUnions().subscribe(data => {
  //     this.creditUnions = data;
  //   });
  // }

  // navigateToDetail(bankName: string): void {
  //   const routePath = `/allbanks/${bankName.toLowerCase()}`;
  //   console.log('Navigating to:', routePath);
  //   this.router.navigate([routePath]);
  // }




  creditUnions: CreditUnion[] = [];

  constructor(private creditUnionService: ReviewService, private router: Router) { }

  ngOnInit(): void {
    this.creditUnionService.getCreditUnions().subscribe(data => {
      this.creditUnions = data;
    });
  }

  navigateToDetail(bankId: number): void {
    const routePath = `/allbanks/${bankId}`;
    console.log('Navigating to:', routePath);
    this.router.navigate([routePath]);
  }
}
