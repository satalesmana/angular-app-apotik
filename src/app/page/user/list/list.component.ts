import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { UsersService } from '../../../service/users/users.service'

@Component({
  selector: 'app-list-users',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() sowTable:boolean;
  @Output() closeTable = new EventEmitter<string>();

  usersdata:any;

  constructor(
    private service:UsersService
  ) {
    this.sowTable = false;
    this.usersdata = []
  }
   

  ngOnInit(): void {
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
}
