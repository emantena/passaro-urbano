import { Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido.model';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { URL_API } from '../app.config';
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }

    public efetivarCompra(pedido: Pedido): Observable<any> {
        const headers: Headers = new Headers();
        headers.append('content-type', 'application/json');

        const options = new RequestOptions({headers: headers});

        return this._http
            .post(`${URL_API}/pedidos`, JSON.stringify(pedido), options)
            .pipe(
                // map((resposta: Response) => resposta.json().id)
                map((resp: Response) => resp.json().id)
            );
    }
}
