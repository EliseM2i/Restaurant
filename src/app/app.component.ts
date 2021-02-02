import { Component } from '@angular/core';
import { Plat } from './plat';



@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Restaurant';

listeEntree:Array<Plat> = [];
listePlat:Array<Plat> = [];
listeDessert:Array<Plat> = [];

ngOnInit(){
  let entree1 = new Plat(1, "Foie gras");
  let entree2 = new Plat(2, "Saumon fumé");
  let plat1 = new Plat(3, "Tartiflette");
  let plat2 = new Plat(4, "Carbonade");
  let dessert1 = new Plat(5, "Moelleux au chocolat");
  let dessert2 = new Plat(6, "Tarte aux pommes");

  this.listeEntree.push(entree1);
  this.listeEntree.push(entree2);
  this.listePlat.push(plat1);
  this.listePlat.push(plat2);
  this.listeDessert.push(dessert1);
  this.listeDessert.push(dessert2);
}


}





