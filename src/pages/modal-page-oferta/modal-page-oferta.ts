import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPageOfertaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-page-oferta',
  templateUrl: 'modal-page-oferta.html',
})
export class ModalPageOfertaPage {

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  ionViewWillLoad() {
    const profile = this.navParams.get('data');
    console.log(profile);
  }

  closeModal(){
  	this.view.dismiss();
  }

}
