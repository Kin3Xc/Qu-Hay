import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPageOfertaPage } from './modal-page-oferta';

@NgModule({
  declarations: [
    ModalPageOfertaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPageOfertaPage),
  ],
  exports: [
    ModalPageOfertaPage
  ]
})
export class ModalPageOfertaPageModule {}
