import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent {
  plants:any
  showError=false
  errorMessage=""

  oszlopok=[
    {key:"ar",text:"Ár", type:"number"},
    {key:"kepUrl",text:"Kép", type:"image"},
    {key:"leiras",text:"Leírás", type:"textarea"},
    {key:"megnevezes",text:"Név", type:"text"},
  ]


  constructor(
    private base:BaseService, 
    private kosar:BasketService
    ){
    this.base.getPlants().subscribe({
      next: (adatok)=>{this.showError=false; this.plants=adatok},
      error: (e)=> {this.showError=true; this.errorMessage=e.message
      }
     } )

  }

  kosarba(id:any,db:any){
    this.kosar.addTetel(id,db)
  }

}
