import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasServices]
})
export class DiversaoComponent implements OnInit {

    public ofertas: Oferta[];

  constructor(private _ofertasServices: OfertasServices) { }

  ngOnInit() {
      this._ofertasServices.getOfertasPorCategoria('diversao')
        .then((ofertas: Oferta[]) => {
            this.ofertas = ofertas;
        })
        .catch((error: any) => {
            console.log(error);
        });
  }

}
