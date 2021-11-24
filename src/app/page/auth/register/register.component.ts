import { Component, OnInit } from '@angular/core';
import { 
  FormGroup, 
  FormControl
} from '@angular/forms';
import { AuthService } from '../../../service/auth/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(
    private service:AuthService
  ) {
    this.registerForm= this.registerFormGroup()
   }

  registerFormGroup(){
    return new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phone: new FormControl()
    })
  }

  
  ngOnInit(): void {
  }

  async onRegister(){
    this.service.sendRegister(this.registerForm.value)
    .subscribe((output:any) => {
      alert(output.msg)
      this.registerForm.reset();
    });

  }

}
