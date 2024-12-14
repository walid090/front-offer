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

  login() {
    /*if (this.username === 'admin' && this.password === 'admin') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }*/
      this.router.navigate(['/dashbord']);

  }
}
