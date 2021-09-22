import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tesdua',
  templateUrl: './tesdua.component.html',
  styleUrls: ['./tesdua.component.css']
})
export class TesduaComponent implements OnInit {
  @Output() callparentDialog = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  callParent(): void {
    this.callparentDialog.next('tes dua');
  }

}
