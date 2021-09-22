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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './page/feedback/feedback.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from "primeng/panel";
import { RippleModule } from "primeng/ripple";
import { TessatuComponent } from './latihan/tessatu/tessatu.component';
import { TesduaComponent } from './latihan/tesdua/tesdua.component';

@NgModule({
  declarations: [
    AppComponent,
    LicenseComponent,
    KalkulatorComponent,
    AboutComponent,
    FeedbackComponent,
    TessatuComponent,
    TesduaComponent
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
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    InputNumberModule,
    PanelModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
