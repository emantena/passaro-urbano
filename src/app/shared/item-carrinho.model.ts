import { Imagem } from './imagem.model';

export class ItemCarrinho {
    public itemCarrinhoId: number;
    public img: Imagem;
    public titulo: string;
    public descricao_oferta: string;
    public valor: number;
    public quantidade: number;

    constructor() {}
}
