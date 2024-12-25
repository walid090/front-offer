import { Component } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { User } from '../../Entity/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private myService: MyserviceService, private router: Router) {}
  username: string = '';
  password: string = '';
  user1: User = { username: '', password: '', id: 0, role: '' }; // Initialize with default values
  loginFailed: boolean = false;
  Login() {
    this.user1 = {
      username: this.username,
      password: this.password,
      id: 0,
      role: '',
    };
    console.log(this.user1);
    this.myService.Auth(this.user1).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          if (response.role == 'fournisseur') {
            this.router.navigate(['/dashbord']);
          }
        } else {
          this.loginFailed = true;
        }
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
  }
}
