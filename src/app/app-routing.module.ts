import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenseComponent } from './page/license/license.component';
import { TessatuComponent } from './latihan/tessatu/tessatu.component'
import { LoginComponent } from './page/auth/login/login.component'
import { RegisterComponent } from './page/auth/register/register.component'
import { ActivateComponent } from './page/auth/activate/activate.component'
import { HomeComponent } from './page/home/home.component'
import { AuthGuard } from './helper/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'license', component: LicenseComponent },
  { path: 'latihan', component: TessatuComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'activate', component: ActivateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
