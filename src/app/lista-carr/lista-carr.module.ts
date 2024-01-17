import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCarrPageRoutingModule } from './lista-carr-routing.module';

import { ListaCarrPage } from './lista-carr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCarrPageRoutingModule
  ],
  declarations: [ListaCarrPage]
})
export class ListaCarrPageModule {}
