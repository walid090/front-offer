import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../Entity/user';
import { MyserviceService } from '../../service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private router: Router, private myService: MyserviceService) {}
  user: User = {
    id: 0,
    username: '',
    password: '',
    phone_number: '',
    role: 'customer',
    email: '',
  };
 
  

  usernamePattern = /^[a-zA-Z0-9]{3,}$/;  // At least 3 alphanumeric characters
  passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;  // At least 6 characters, with a letter and a number
  phonePattern = /^[0-9]{8}$/;  // 8 digits for phone number
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // Simple email pattern

  register() {
    console.log('User registered:', this.user);
    this.myService.AddUser(this.user).subscribe(
      (Response) => {
        console.log('Offer created successfully:', Response);
        this.router.navigate(['']);
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }
}
