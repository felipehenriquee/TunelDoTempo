import { ItensService } from './../../services/itens.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
  listaObjetos:any = ["./assets/gif/facebook.gif", "./assets/gif/twitter.gif", "./assets/gif/google.gif","./assets/gif/youtube.gif"];
  listaNomeObjetos:any = ["facebook", "twitter", "google","youtube"];
  escolhido = "";
  tituloEscolhido = "";
  constructor(private objetos: ItensService) { }

  ngOnInit(): void {
    const numeroEscolhido = Math.floor(Math.random() * 4 + 1) - 1;
    this.escolhido = this.listaObjetos[numeroEscolhido];
    this.tituloEscolhido = this.listaNomeObjetos[numeroEscolhido]
  }

  atualizarPagina(){
    window.location.reload();
  }

}
