import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tessatu',
  templateUrl: './tessatu.component.html',
  styleUrls: ['./tessatu.component.css']
})
export class TessatuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showdialog(source: string) {
    alert('alert ini dipanggil oleh ' + source)
  }

}
