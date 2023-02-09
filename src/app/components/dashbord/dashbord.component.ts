import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {

  constructor(
    private userService: UserService,
    private router: Router,
  ){}

  logOut(): void {
    this.userService.logOut();
    this.router.navigate(['regist']);
  }

}
