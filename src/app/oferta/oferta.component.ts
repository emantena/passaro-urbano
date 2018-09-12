import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasServices } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { ItemCarrinho } from '../shared/item-carrinho.model';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
    selector: 'app-oferta',
    templateUrl: './oferta.component.html',
    styleUrls: ['./oferta.component.css'],
    providers: [OfertasServices]
})
export class OfertaComponent implements OnInit {
    private _route: ActivatedRoute;
    private _ofertaService: OfertasServices;
    private _carrinhoService: CarrinhoService;

    public oferta: Oferta;

    constructor(route: ActivatedRoute, ofertaService: OfertasServices, carrinhoSerice: CarrinhoService) {
        this._route = route;
        this._ofertaService = ofertaService;
        this._carrinhoService = carrinhoSerice;
    }

    ngOnInit() {
        this._route.params.subscribe((parametros: Params) => {
            // const ofertaRota = this._route.snapshot.params['id'];

            this._ofertaService
                .getOfertaPorId(parametros.id)
                .then((oferta: Oferta) => {
                    this.oferta = oferta;
                })
                .catch((param: any) => {
                    console.log(param);
                });
        });
    }

    public adicionarItemCarrinho(): void {
        const item = new ItemCarrinho();
        item.itemCarrinhoId = this.oferta.id;
        item.descricao_oferta = this.oferta.descricao_oferta;
        item.img = this.oferta.imagens[0];
        item.quantidade = 1,
        item.titulo = this.oferta.titulo,
        item.valor = this.oferta.valor;

        this._carrinhoService.adicionarItem(item);
    }
}
