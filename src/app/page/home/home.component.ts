import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menubarItems: any[];
  dockItems: any[];
  displayFinder: boolean;
  title: string;
  userComponent: boolean;
  userListComponent: boolean;
  feedbackDialog: boolean;
  isShowUserlist: boolean;
  isShowObatForm: boolean;
  isShowObatList: boolean;

  dialog = {
    showDialog: false,
    component: 'kalkulator',
    width: '80vw',
    height: '18rem'
  }

  constructor(
    private router: Router
  ) {
    this.menubarItems = [];
    this.dockItems = [];
    this.displayFinder = false;
    this.userComponent = false;
    this.feedbackDialog = false;
    this.userListComponent = false;
    this.title = 'ini title';
    this.isShowUserlist = false;
    this.isShowObatForm = false;
    this.isShowObatList = false;

  }

  ngOnInit() {
    this.onSetMenubar()
    this.onSetDocItem()
  }

  onCloseUsersList() {
    this.isShowUserlist = false;
  }

  onCloseUsers() {
    this.userComponent = false
  }

  onCloseObat() {
    this.isShowObatForm = false;
  }

  onCloseObatList() {
    this.isShowObatList = false;
  }

  cekIsHome() {
    if (this.router.url !== "/") {
      return false;
    }
    return true;
  }

  //----Function handler --------
  onSetMenubar() {
    this.menubarItems = [
      {
        label: 'Sata Lesmana',
        className: 'menubar-root'
      },
      {
        label: 'Users',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
            command: () => {
              this.userComponent = true;
            }
          },
          {
            label: 'List Data',
            icon: 'pi pi-fw pi-user-plus',
            command: () => {
              this.isShowUserlist = true;
            }
          }
        ]
      },
      {
        label: 'Obat',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
            command: () => {
              this.isShowObatForm = true;
            }
          },
          {
            label: 'List Data',
            icon: 'pi pi-fw pi-user-plus',
            command: () => {
              this.isShowObatList = true;
            }
          }
        ]
      },
      {
        label: 'Quit'
      },
      {
        label: 'Tools',
        items: [
          {
            label: 'Kalkulator',
            icon: 'pi pi-fw pi-book',
            command: () => {
              this.dialog.showDialog = true;
              this.dialog.component = 'kalkulator';
              this.dialog.width = '30vw'
              this.dialog.height = '30rem'
            }
          },
          {
            label: 'About Us',
            icon: 'pi pi-fw pi-info-circle',
            command: () => {
              this.dialog.showDialog = true;
              this.dialog.component = 'about';
              this.dialog.height = '30rem'
            }
          },
          {
            label: 'Feedback',
            icon: 'pi pi-fw pi-info-circle',
            command: () => {
              this.feedbackDialog = true;
            }
          },
          {
            label: 'License',
            icon: 'pi pi-fw pi-file-pdf',
            command: () => {
              this.router.navigateByUrl('/license')
            }
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-file-pdf',
            command: () => {
              localStorage.clear()
              this.router.navigateByUrl('/login')
            }
          },
        ]
      }
    ];
  }

  onSetDocItem() {
    this.dockItems = [
      {
        label: 'Finder',
        tooltipOptions: {
          tooltipLabel: "Finder",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000
        },
        icon: "assets/finder.svg",
        command: () => {
          this.displayFinder = true;
        }
      }
    ];
  }

}
