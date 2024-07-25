import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {
  email: string = '';
  verificationCode: string = '';
  password: string = '';
  confirmPassword: string = '';
  isVerificationStep: boolean = false;
  isResetStep: boolean = false;

  // constructor(private authService: ServiceService) {}
  verifyCode() {
    // this.authService.verifyCode(this.email, this.verificationCode).subscribe(
    //   response => {
    //     console.log(response);
    //     this.isVerificationStep = false;
    //     this.isResetStep = true;
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  }


  sendCode() {
  //   this.authService.sendCode(this.email).subscribe(
  //     response => {
  //       console.log(response);
  //       // Navigate to verification component or handle state change
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  }
}
