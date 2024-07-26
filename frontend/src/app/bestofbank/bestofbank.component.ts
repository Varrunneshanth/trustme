import { Component } from '@angular/core';
import { RecentreviewsComponent } from '../recentreviews/recentreviews.component';
import { NgFor } from '@angular/common';
import { CreditUnion, ReviewService } from '../review.service';

@Component({
  selector: 'app-bestofbank',
  standalone: true,
  imports: [RecentreviewsComponent,NgFor],
  templateUrl: './bestofbank.component.html',
  styleUrl: './bestofbank.component.css'
})
export class BestofbankComponent {
  creditUnions: CreditUnion[] = [];

  constructor(private creditUnionService: ReviewService) { }

  ngOnInit(): void {
    this.creditUnionService.getCreditUnions().subscribe(data => {
      this.creditUnions = data;
    });
  }
}
