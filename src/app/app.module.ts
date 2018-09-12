import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; // responsabel por permitir a tag router-outlet, que é responsavel pela navegação
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.route'; // arquivo onde estão configuradas as rotas

// pipe
import { DescricaoReduzidaPipe } from './util/descricao-reduzida.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

// global service
import { CarrinhoService } from './services/carrinho.service';


@NgModule({
    declarations: [
        AppComponent,
        TopoComponent,
        RodapeComponent,
        HomeComponent,
        DiversaoComponent,
        RestaurantesComponent,
        OfertaComponent,
        ComoUsarComponent,
        OndeFicaComponent,
        DescricaoReduzidaPipe,
        OrdemCompraComponent,
        OrdemCompraSucessoComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        // FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        CarrinhoService,
        { provide: LOCALE_ID, useValue: 'pt' },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

registerLocaleData(localePt);
