import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menubarItems: any[];
  dockItems: any[];
  displayFinder: boolean;
  title: string;
  userComponent: boolean;

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
    this.title = 'ini title';

  }

  ngOnInit() {
    this.onSetMenubar()
    this.onSetDocItem()
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
            label: 'License',
            icon: 'pi pi-fw pi-file-pdf',
            command: () => {
              this.router.navigateByUrl('/license')
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
