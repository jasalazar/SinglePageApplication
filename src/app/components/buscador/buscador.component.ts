import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  nombre:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private router:Router ) {

  }

  ngOnInit(){

    this.activatedRoute.params.subscribe( params => {
        this.nombre = params['nombre'];
        this.heroes = this._heroesService.buscarHeroes( params['nombre'] );
    });

  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] )
  }

}
