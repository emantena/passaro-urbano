import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasServices } from '../../services/ofertas.service';

@Component({
    selector: 'app-como-usar',
    templateUrl: './como-usar.component.html',
    styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {
    private _route: ActivatedRoute;
    private _ofertaService: OfertasServices;
    public comoUsar: string;

    constructor(route: ActivatedRoute, ofertaService: OfertasServices) {
        this._route = route;
        this._ofertaService = ofertaService;
    }

    ngOnInit() {
        this._route.parent.params.subscribe((parametros: Params) => {
            this._ofertaService
                .getComoUsarOfertaPorId(parametros.id)
                .then((result: string) => {
                    this.comoUsar = result;
                })
                .catch((error: any) => {
                    console.log(error);
                });
        });
    }
}
