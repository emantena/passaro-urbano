import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasServices]
})
export class RestaurantesComponent implements OnInit {
    private _ofertasServices: OfertasServices;
    public ofertas: Oferta[];

    constructor(ofertasServices: OfertasServices) {
        this._ofertasServices = ofertasServices;
    }

    ngOnInit() {
        this._ofertasServices.getOfertasPorCategoria('restaurante')
            .then((ofertas: Oferta[]) => {
                this.ofertas = ofertas;
            })
            .catch((param: any) => {
                console.log(param);
            });
    }

}
