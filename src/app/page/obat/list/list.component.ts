import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ObatService } from 'src/app/service/obat/obat.service'
import { MessageService } from 'primeng/api'
@Component({
  selector: 'app-list-obat',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [MessageService]
})
export class ListObatComponent implements OnInit {
  @Input() sowTable: Boolean;
  @Output() closeTable = new EventEmitter();

  dataObat: any;
  loading: boolean;

  constructor(
    private obatService: ObatService,
    private msgService: MessageService
  ) {
    this.sowTable = false
    this.dataObat = [];
    this.loading = false;
  }

  hideTable() {
    this.closeTable.next()
  }

  onLoadDataObat() {
    this.loading = true;
    this.obatService.get({}).toPromise()
      .then(res => {
        this.dataObat = res
      }).catch(error => {

        this.msgService.add({
          severity: 'Warning',
          summary: 'Gagal',
          detail: error.error.msg ? error.error.msg : error.error
        });
      }).finally(() => {
        this.loading = false
      })
  }

  ngOnInit(): void {
    this.onLoadDataObat();
  }

  onEdit(id: any) {

  }
  onDelete(id: any) {

  }

}
