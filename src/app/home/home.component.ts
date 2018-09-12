import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [OfertasServices]
})
export class HomeComponent implements OnInit {
    private _ofertasServices: OfertasServices;
    public ofertas: Oferta[];

    constructor(ofertasServices: OfertasServices) {
        this._ofertasServices = ofertasServices;
    }

    ngOnInit() {
        // retorno utilizando promise
        this._ofertasServices.getOfertas()
            .then((ofertas: Oferta[]) => {
                this.ofertas = ofertas;
            })
            .catch((param: any) => {
                console.log(param);
            });
    }
}
