import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-obat',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormObatComponent implements OnInit {
  @Input() sowForm: Boolean;
  @Output() closeForm = new EventEmitter<string>();

  constructor() {
    this.sowForm = false;
  }

  ngOnInit(): void {
  }

}
