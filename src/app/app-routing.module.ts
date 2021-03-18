import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"prueba",
    pathMatch:"full"
  },
  {
    path:"prueba",
    component:PruebaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
