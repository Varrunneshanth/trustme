import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Review, ReviewService } from '../review.service';

@Component({
  selector: 'app-recentreviews',
  standalone: true,
  imports: [FormsModule,NgFor,ReactiveFormsModule,NgIf],
  templateUrl: './recentreviews.component.html',
  styleUrl: './recentreviews.component.css'
})
export class RecentreviewsComponent {
  // @Output() newReview = new EventEmitter<any>();

  // name = '';
  // photoUrl = '';
  // mobileNumber = '';
  // rating = 5;
  // comment = '';

  // submitReview() {
  //   this.newReview.emit({
  //     name: this.name,
  //     photoUrl: this.photoUrl || 'https://example.com/default-avatar.jpg',
  //     rating: this.rating,
  //     comment: this.comment,
  //     serviceName: 'Service Name' // You might want to make this dynamic
  //   });

  //   // Reset form
  //   this.name = '';
  //   this.photoUrl = '';
  //   this.mobileNumber = '';
  //   this.rating = 5;
  //   this.comment = '';
  // }

//   reviewForm: FormGroup;
//   stars: number[] = [1, 2, 3, 4, 5];
//   selectedRating: number = 0;

//   constructor(private fb: FormBuilder) {
//     this.reviewForm = this.fb.group({
//       rating: [null, Validators.required],
//       title: ['', Validators.required],
//       review: ['', [Validators.required, Validators.minLength(10)]],
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]]
//     });
//   }

//   setRating(rating: number) {
//     this.selectedRating = rating;
//     this.reviewForm.patchValue({ rating: rating });
//   }

//   submitReview() {
//     if (this.reviewForm.valid) {
//       console.log(this.reviewForm.value);
//       // Here you would typically send the review to your backend
//       // Reset form after submission
//       this.reviewForm.reset();
//       this.selectedRating = 0;
//     }
//   }
// }


review: Review = { name: '', review: '', rating: 0, email: '', phoneNumber: '', website: '', address: '', profilePhoto: '' };
  showModal: boolean = false; // For modal display

  constructor(private reviewService: ReviewService) { }

  onSubmit() {
    this.reviewService.addReview(this.review).subscribe(response => {
      console.log('Review submitted', response);
      this.review = { name: '', review: '', rating: 0, email: '', phoneNumber: '', website: '', address: '', profilePhoto: '' };
      this.showModal = true; // Show modal on success
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
  

