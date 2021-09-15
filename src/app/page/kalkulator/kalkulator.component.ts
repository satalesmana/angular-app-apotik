import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  providers: [MessageService],
  styleUrls: ['./kalkulator.component.css']
})
export class KalkulatorComponent implements OnInit {

  stateOptions: any[];
  kalkulator = {
    mode: 'tambah',
    nilai_satu: 0,
    nilai_dua: 0
  }
  hasilHitung = 0


  constructor(private messageService: MessageService) {
    this.stateOptions = [
      { label: 'Tambah', value: 'tambah' },
      { label: 'Kurang', value: 'kurang' }
    ];

  }

  ngOnInit(): void {
  }

  hitung() {
    if (this.kalkulator.mode === 'tambah') {
      this.hasilHitung = Number(this.kalkulator.nilai_satu) + Number(this.kalkulator.nilai_dua);
    }

    if (this.kalkulator.mode === 'kurang') {
      this.hasilHitung = Number(this.kalkulator.nilai_satu) - Number(this.kalkulator.nilai_dua);
    }
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'Data berhasil di ' + this.kalkulator.mode
    });

    console.log(this.kalkulator)
  }

}
