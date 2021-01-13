import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPage } from './lista.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
