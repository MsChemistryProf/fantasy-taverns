import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../common/auth/auth.service';
import { registerLocaleData } from '@angular/common';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  roleID = '';
  TavernID = '';
  userName = '';
  password = '';



  constructor(private authService: AuthService, private router: Router){}

  register(): void {
    const user = {UserName: this.userName, Password: this.password}
    console.log(this.userName);
    console.log(this.password);
    this.authService.create(user).subscribe((answer)=>{
      // need to display "You have been registered. Please log in."
    this.router.navigateByUrl('/login')
    });
  }
  
  cancel(): void {  
    this.router.navigateByUrl('/login'); 
  }

  ngOnInit() {
  }

}
