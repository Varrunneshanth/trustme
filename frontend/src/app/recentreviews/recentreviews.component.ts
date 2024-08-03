import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Review, ReviewService } from '../review.service';
import { HdfcComponent } from "../hdfcs/hdfc.component";

@Component({
  selector: 'app-recentreviews',
  standalone: true,
  imports: [FormsModule, NgFor, ReactiveFormsModule, NgIf, FormsModule, HdfcComponent],
  templateUrl: './recentreviews.component.html',
  styleUrl: './recentreviews.component.css'
})
export class RecentreviewsComponent {

review: Review = { name: '', review: '', rating: 0, email: '', phoneNumber: '', website: '', address: '', profilePhoto: '', bank: '' };
  showModal: boolean = false;
  banks: string[] = ['HDFC', 'ICICI', 'UNION', 'SBI'];

  constructor(private reviewService: ReviewService) { }

  onSubmit() {
    this.reviewService.addReview(this.review).subscribe(response => {
      console.log('Review submitted', response);
      this.review = { name: '', review: '', rating: 0, email: '', phoneNumber: '', website: '', address: '', profilePhoto: '', bank: '' };
      this.showModal = true;
    });
  }

  closeModal() {
    this.showModal = false;
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.review.profilePhoto = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
  

