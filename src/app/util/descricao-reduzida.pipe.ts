import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'descricaoReduzida'
})

export class DescricaoReduzidaPipe implements PipeTransform {
    transform(texto: string, totalCaracteres: number): string {
        if (texto.length > totalCaracteres) {
            return texto.substr(0, totalCaracteres) + '...';
        }

        return texto;
    }
}
