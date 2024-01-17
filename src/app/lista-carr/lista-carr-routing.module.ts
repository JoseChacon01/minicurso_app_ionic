import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCarrPage } from './lista-carr.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCarrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCarrPageRoutingModule {}
