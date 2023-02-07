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
