import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component.component';
import { RegistComponent } from './components/regist/regist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'regist', component: RegistComponent },
  { path: 'about', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
