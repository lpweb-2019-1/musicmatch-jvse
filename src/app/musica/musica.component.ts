import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../disco.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
  musica = null;
  listaRelacionada = null;
  constructor(private disco: DiscoService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.musica = this.disco.encontrarMusica(parseInt(id));
    this.disco.preencherObjetoMusica(this.musica);
    
  }

  gostar(){
    this.disco.gostarMusica(this.musica);
    this.listaRelacionada = this.disco.musicasRelacionadas(this.musica);
  }

  naoGostar(){
    this.disco.naoGostarMusica(this.musica);
    this.listaRelacionada = this.disco.musicasRelacionadas(this.musica);
  }
}
