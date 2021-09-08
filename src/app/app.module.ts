import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { DockModule } from 'primeng/dock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { LicenseComponent } from './page/license/license.component';
import { KalkulatorComponent } from './page/kalkulator/kalkulator.component';
import { AboutComponent } from './page/about/about.component'
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LicenseComponent,
    KalkulatorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    DialogModule,
    GalleriaModule,
    ToastModule,
    DockModule,
    TreeModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    SelectButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
