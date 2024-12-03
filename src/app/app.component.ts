import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from "./components/cabecalho/cabecalho.component";
import { SeparadorComponent } from './components/separador/separador.component';
import { ContatoComponent } from './components/contato/contato.component';
import agenda from "./agenda.json"
import { FormsModule } from '@angular/forms';

interface Contato {
  id: number
  nome: string
  telefone: string
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    ContainerComponent, 
    CommonModule, 
    CabecalhoComponent,  
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = agenda;

  filtroPorTexto: string = ''

  filtrarContatosPorTexto () : Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
    
  }

  filtrarContatosPorLetraInicial(letra:string) : Contato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    })
  }
}
