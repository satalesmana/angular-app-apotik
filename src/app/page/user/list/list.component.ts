import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { UsersService } from '../../../service/users/users.service'
import {ConfirmationService, MessageService, PrimeNGConfig} from 'primeng/api';

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
  user:any;

  constructor(
    private confirmationService: ConfirmationService,
    private service:UsersService,
    private primengConfig: PrimeNGConfig,
    private msgService:MessageService
  ) {
    this.sowTable = false;
    this.usersdata = [];
    this.isShowForm = false;
    this.user={
      id:'',
      name:'',
      email:'',
      password:''
    }
  }
   
  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.onLoadUserDataTable()
  }

  async onLoadUserDataTable(){
    try{
      const res = await this.service.get().toPromise()
      this.usersdata = res;
    }catch(error){
      console.debug(error)
    }
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
      console.debug(error)
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
