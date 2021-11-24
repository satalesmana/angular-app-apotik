import { Component, Input, OnInit, EventEmitter, Output, ChangeDetectorRef} from '@angular/core';
import { UsersService } from '../../../service/users/users.service'
import {ConfirmationService, MessageService, PrimeNGConfig} from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-list-users',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ListComponent implements OnInit {
  @Input() sowTable:boolean;
  @Output() closeTable = new EventEmitter<string>();
  
  usersdata:any;
  isShowForm:boolean;
  loading:boolean;
  user:any;
  totalRow:number;

  constructor(
    private confirmationService: ConfirmationService,
    private service:UsersService,
    private primengConfig: PrimeNGConfig,
    private msgService:MessageService,
    private cdref: ChangeDetectorRef
  ) {
    this.sowTable = false;
    this.usersdata = [];
    this.isShowForm = false;
    this.loading = false;
    this.user={
      id:'',
      name:'',
      email:'',
      password:''
    }
    this.totalRow= 0;
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
   
  ngOnInit(): void {
    this.primengConfig.ripple = true;

    //this.onLoadUserDataTable()
  }

  onLoadUserDataTable(event: LazyLoadEvent){
    this.loading = true;
    this.service.get(event).toPromise()
    .then(res=>{ 
      this.totalRow = 50;
      this.usersdata = res;
      this.loading = false;
    }).catch(err=>{
      this.msgService.add({
        severity: 'Warning',
        summary: 'Gagal',
        detail: err.error.msg ? err.error.msg : err.error
      });
    })
    .finally(()=>{
      this.loading = false;
    })
  }

  hideTable(){
    this.closeTable.next();
  }

  async onEdit(id:string){
    try{
      const res = await this.service.getById(id).toPromise();
      this.user = res;
      this.isShowForm = true;

    }catch(error){
      this.msgService.add({
        severity: 'info',
        summary: 'Gagal',
        detail: 'Data Gagal dihapus' + error
      });
    }
  }

  onDelete(id:string){
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept:async () => {
          try{
            const res = await this.service.delete(id).toPromise()  

            this.msgService.add({
              severity: 'info',
              summary: 'Success',
              detail: 'Data berhasil dihapus'
            });

            //this.onLoadUserDataTable();
          }catch (error){
            this.msgService.add({
              severity: 'warning',
              summary: 'Gagal',
              detail: 'Data Gagal dihapus' + error
            });
          }
          
      },
      reject: () => {
          return false;
      }
  });
  }

  onCloseFormUsers(){
    this.isShowForm = false;
  }
}
