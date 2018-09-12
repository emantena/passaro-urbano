import { ItemCarrinho } from '../shared/item-carrinho.model';

export class CarrinhoService {
    public intensCarrinho: ItemCarrinho[] = [];

    public exibitItens(): ItemCarrinho[] {
        return this.intensCarrinho;
    }

    public adicionarItem(itemCarrinho: ItemCarrinho) {
        const itemCarrinhoExistente = this.intensCarrinho.find((item: ItemCarrinho) => item.itemCarrinhoId === itemCarrinho.itemCarrinhoId);

        if (itemCarrinhoExistente) {
            itemCarrinhoExistente.quantidade += 1;
            return;
        }

        this.intensCarrinho.push(itemCarrinho);
    }

    public totalCarrinho(): number {
        let total = 0;

        this.intensCarrinho.map((item: ItemCarrinho) => {
            total = total + (item.valor * item.quantidade);
        });

        return total;
    }

    public aumentarQuantidade(itemCarrinho: ItemCarrinho) {
        const itemCarrinhoExistente = this.intensCarrinho.find((item: ItemCarrinho) => item.itemCarrinhoId === itemCarrinho.itemCarrinhoId);

        if (itemCarrinhoExistente) {
            itemCarrinhoExistente.quantidade += 1;
        }
    }

    public diminuirQuantidade(itemCarrinho: ItemCarrinho) {
        const itemCarrinhoExistente = this.intensCarrinho.find((item: ItemCarrinho) => item.itemCarrinhoId === itemCarrinho.itemCarrinhoId);

        if (itemCarrinhoExistente) {
            itemCarrinhoExistente.quantidade -= 1;
        }

        if (itemCarrinhoExistente.quantidade < 1) {
            const itemPosicao = this.intensCarrinho.indexOf(itemCarrinho);
            this.intensCarrinho.splice(itemPosicao, 1);
        }
    }
}
