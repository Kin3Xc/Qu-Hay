import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-oferta',
  templateUrl: 'oferta.html'
})
export class OfertaPage {

  constructor(public modal: ModalController) {

  }

  openModalOferta(){

  	let data = {
  		name: "Elkin Urango",
  		cargo: "Developer"
  	};

  	const modalOferta = this.modal.create('ModalPageOfertaPage', {data : data});

  	modalOferta.present();
  }

}
