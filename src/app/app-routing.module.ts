import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
