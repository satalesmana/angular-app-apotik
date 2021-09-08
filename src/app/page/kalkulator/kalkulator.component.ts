import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.css']
})
export class KalkulatorComponent implements OnInit {

  stateOptions: any[];
  kalkulator = {
    mode: 'tambah',
    nilai_satu: 0,
    nilai_dua: 0
  }


  constructor() {

    this.stateOptions = [
      { label: 'Tambah', value: 'tambah' },
      { label: 'Kurang', value: 'kurang' }
    ];

  }

  ngOnInit(): void {
  }

}
