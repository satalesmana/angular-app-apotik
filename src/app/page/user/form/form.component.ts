import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../../../service/users/users.service'
@Component({
  selector: 'app-form-users',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() sowForm:boolean;
  @Output() closeForm = new EventEmitter<string>();

  userForm: FormGroup
  constructor(
    private service:UsersService
  ) { 
    this.sowForm = false;
    this.userForm = this.userFormGroup()
  }

  userFormGroup() {
    return new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })
  }


  ngOnInit(): void {
  }

  hideForm(){
    this.closeForm.next();
  }

  onCancel(){
    this.closeForm.next();
  }

  onSubmit(){
    console.log(this.userForm.value)
    this.service.add(this.userForm.value).subscribe((output:any) => {
      alert(output.name)
      this.userForm.reset();
    });
  }
}
