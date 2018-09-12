import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../services/ofertas.service';
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css'],
    providers: [OfertasServices]
})
export class TopoComponent implements OnInit {
    // #region privates
    private _ofertaService: OfertasServices;
    public _carrinhoService: CarrinhoService;

    private subjectPesquisa: Subject<string> = new Subject<string>();
    // #endregion

    public ofertas: Observable<Oferta[]>;

    constructor(ofertaService: OfertasServices, carrinhoService: CarrinhoService) {
        this._ofertaService = ofertaService;
        this._carrinhoService = carrinhoService;
    }

    ngOnInit() {
        this.ofertas = this.subjectPesquisa.pipe(
            debounceTime(1000),
            distinctUntilChanged(),
            switchMap((termo: string) => {
                if (termo.trim() === '') {
                    return of<Oferta[]>([]);
                }
                return this._ofertaService.pesquisaOfertas(termo);
            })
        ),
        catchError ((error) => {
            console.log(error);
            return of<Oferta[]>([]);
        });

        // this.ofertas.subscribe((ofertas: Oferta[]) => {
        //     this.ofertas2 = ofertas;
        // });
    }

    public pesquisa(termoPesquisa: string): void {
        this.subjectPesquisa.next(termoPesquisa);
    }

    public limparPesquisa(): void {
        this.subjectPesquisa.next('');
    }
}
