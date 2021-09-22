import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenseComponent } from './page/license/license.component';
import { TessatuComponent } from './latihan/tessatu/tessatu.component'

const routes: Routes = [
  { path: 'license', component: LicenseComponent },
  { path: 'latihan', component: TessatuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
