import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasServices } from '../../services/ofertas.service';

@Component({
    selector: 'app-onde-fica',
    templateUrl: './onde-fica.component.html',
    styleUrls: ['./onde-fica.component.css' ]
})
export class OndeFicaComponent implements OnInit {
    private _route: ActivatedRoute;
    private _ofertaService: OfertasServices;
    public ondeFica: string;

    constructor(route: ActivatedRoute, ofertaService: OfertasServices) {
        this._route = route;
        this._ofertaService = ofertaService;
    }

    ngOnInit() {
        this._route.parent.params.subscribe((parametros: Params) => {
            this._ofertaService
                .getOndeFicaOfertaPorId(parametros.id)
                .then((result: string) => {
                    this.ondeFica = result;
                })
                .catch((error: any) => {
                    console.log(error);
                });
        });
    }
}
