import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup
  constructor() {
    this.feedbackForm = this.createFormGroup()
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl(),
      message: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.feedbackForm)
  }
}
