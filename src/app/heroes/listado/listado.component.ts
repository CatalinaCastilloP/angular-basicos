import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman','Ironman','Hulk', 'Thor','Capitán Amércica'];
  heroeBorrado: string='';
 
  borrarHeroe(){

    // this.heroes =[];
    this.heroeBorrado = this.heroes.shift() || '';
    
  }
}


