import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AvailableComponent } from './components/available/available.component';
import { UnavailableComponent } from './components/unavailable/unavailable.component';
import { BrandComponent } from './components/brand/brand.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'available',
    component: AvailableComponent,
  },
  {
    path: 'unavailable',
    component: UnavailableComponent,
  },
  {
    path: 'brands/:brand',
    component: BrandComponent,
  },
  {
    path: 'error404',
    component: Error404Component,
  },
  {
    path: '**',
    redirectTo: 'error404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
