import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashbord', component:  DashbordComponent, canActivate: [Boolean(localStorage.getItem('isAuth'))] },
  { path: 'about', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
