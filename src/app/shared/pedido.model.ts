import { ItemCarrinho } from './item-carrinho.model';

export class Pedido {
    public pedidoId: number;
    public endereco: string;
    public numero: string;
    public complemento: string;
    public formaPagamento: string;
    public itemPedido: ItemCarrinho[];

    constructor(endereco: string, numero: string, complemento: string, formaPagamento: string, itemPedido: ItemCarrinho[]) {
        this.complemento = complemento;
        this.endereco = endereco;
        this.formaPagamento = formaPagamento;
        this.numero = numero;
        this.itemPedido = itemPedido;
    }
}
