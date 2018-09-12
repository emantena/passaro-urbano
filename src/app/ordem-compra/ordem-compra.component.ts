import { Component, OnInit } from '@angular/core';
import { Pedido } from '../shared/pedido.model';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemCarrinho } from '../shared/item-carrinho.model';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
    selector: 'app-ordem-compra',
    templateUrl: './ordem-compra.component.html',
    styleUrls: ['./ordem-compra.component.css'],
    providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

    public pedido: Pedido;
    public itensPedido: ItemCarrinho[] = [];

    public formulario: FormGroup = new FormGroup({
        'endereco': new FormControl(null, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(120)
        ]),
        'numero': new FormControl(null, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(5)
        ]),
        'complemento': new FormControl(null),
        'formaPagamento': new FormControl(null, [
            Validators.required
        ])
    });

    private _ordemCompraService: OrdemCompraService;
    public _carrinhoService: CarrinhoService;

    constructor(ordemCompraService: OrdemCompraService, carrinhoService: CarrinhoService) {
        this._ordemCompraService = ordemCompraService;
        this._carrinhoService = carrinhoService;
    }

    ngOnInit() {
        this.itensPedido = this._carrinhoService.exibitItens();
    }



    public confirmarCompra(): void {
        this.pedido = new Pedido(
            this.formulario.get('endereco').value,
            this.formulario.get('numero').value,
            this.formulario.get('complemento').value,
            this.formulario.get('formaPagamento').value,
            this.itensPedido
        );

        this._ordemCompraService.efetivarCompra(this.pedido)
            .subscribe((resp: number) => {
                this.pedido.pedidoId = resp;
                this.itensPedido = [];
            });
    }

    public aumentar(itemCarrinho: ItemCarrinho) {
        this._carrinhoService.aumentarQuantidade(itemCarrinho);
    }

    public diminuir(itemCarrinho: ItemCarrinho) {
        this._carrinhoService.diminuirQuantidade(itemCarrinho);
    }
}
