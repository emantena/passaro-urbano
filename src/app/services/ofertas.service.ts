import { Http, Response } from '@angular/http';
import { Oferta } from '../shared/oferta.model';
import { Injectable } from '@angular/core';
import { URL_API } from '../app.config';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class OfertasServices {
    //#region private attributes
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }
    public getOfertas(): Promise<Oferta[]> {
        return this._http
            .get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json());
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this._http
            .get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: Response) => resposta.json());
    }

    public getOfertaPorTitulo(oferta: string): Promise<Oferta> {
        return this._http
            .get(`${URL_API}/ofertas?titulo=${oferta}`)
            .toPromise()
            .then((resposta: Response) => resposta.json()[0]);
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this._http
            .get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: Response) => resposta.json()[0]);
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this._http
            .get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: Response) => resposta.json()[0].descricao);
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this._http
            .get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: Response) => resposta.json()[0].descricao);
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this._http
            .get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(
                retry(3),
                map((result: Response) => result.json())
            );
    }
}
