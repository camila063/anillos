import { Item }from '../../models/item';
import { Component } from '@angular/core';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  items:Item [] = [];
  constructor(){

  }
  ngOnInit(): void{
    this.items = [
      {
        id: 0,
        title: 'Anillo mariposa',
        price: 10.5,
        quantity: 4,
        completed: false,

      },
      {
        id: 1,
        title: 'Anillo flor',
        price: 10.5,
        quantity: 4,
        completed: false,

      }
    ];


  }

}
