import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent {

  userDataForm : FormGroup;
  userLoginForm : FormGroup;
  choise: boolean = true;
  stateOptions: any[];

  constructor(
    private userService: UserService,
    private router: Router,
  ){
    this.userDataForm = new FormGroup({
      "userName": new FormControl("", Validators.required),
      "userEmail": new FormControl("", [
        Validators.required, 
        Validators.email
      ]),
      "userLogin": new FormControl("", Validators.required),
      "userPassword": new FormControl("", Validators.required),
    });
    this.userLoginForm = new FormGroup({
      "userLogin": new FormControl("", Validators.required),
      "userPassword": new FormControl("", Validators.required),
    });
    this.stateOptions = [{label: 'Войти', value: true}, {label: 'Регистрация', value: false}];
  }

  sentAuthForm(): void {
    this.userService.authUser(this.userLoginForm.value).subscribe(data => {
      if(!data.success) {
        console.log('ERROR');
        console.log(data);
      } else {
        this.userService.storeUser(data.token, data.user);
        this.router.navigate(['/dashbord']);
      }
    })
  }

  sentForm(): void {
    this.userService.addUser(this.userDataForm.value).subscribe(data => {
      if(!data.success) {
        console.log('ERROR');
        console.log(data);
      } else {
        console.log('DONE')
        this.router.navigate(['/']);
      }
    })
  }

}
