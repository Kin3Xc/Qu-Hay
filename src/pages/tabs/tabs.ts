import { Component } from '@angular/core';

import { OfertaPage } from '../oferta/oferta';
import { EventoPage } from '../evento/evento';
import { NoticiaPage } from '../noticia/noticia';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OfertaPage;
  tab2Root = EventoPage;
  tab3Root = NoticiaPage;
  tab4Root = PerfilPage;

  constructor() {

  }
}
