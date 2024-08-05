import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewService } from '../review.service';

interface Review {
  name: string;
  review: string;
  rating: number;
  email: string;
  phoneNumber: string;
  website: string;
  address: string;
  profilePhoto: string;
  bank: string;
  item: string;
  category: string;
}
@Component({
  selector: 'app-recentreviews',
  standalone: true,
  imports: [FormsModule, NgFor, ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './recentreviews.component.html',
  styleUrl: './recentreviews.component.css'
})
export class RecentreviewsComponent {
  review: Review = { 
    name: '', 
    review: '', 
    rating: 0, 
    email: '', 
    phoneNumber: '', 
    website: '', 
    address: '', 
    profilePhoto: '', 
    bank: '',
    item: '',
    category: ''
  };
  showModal: boolean = false;
  banks: string[] = ['HDFC', 'ICICI', 'AXIS', 'INDIANBANK','Maruthisuzuki','Hyundai','Tatamotors','mahindra','Fabindia','Pantaloons','shopperStop','lifestyle','Tanishq','Kalayanjewelles','MalabarGold','Pcjewllers'];

  constructor(private reviewService: ReviewService) { }

  onSubmit() {
    this.reviewService.addReview(this.review).subscribe((response: any) => {
      console.log('Review submitted', response);
      this.review = { 
        name: '', 
        review: '', 
        rating: 0, 
        email: '', 
        phoneNumber: '', 
        website: '', 
        address: '', 
        profilePhoto: '', 
        bank: '',
        item: '',
        category: ''
      };
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
  

