import { Item }from '../../models/item';
import { Component } from '@angular/core';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  items:Item [] = [];
  total:number = 0;
  constructor(){}
  ngOnInit(): void{
    this.items = [
      {
        id: 0,
        title: 'Anillo mariposa',
        price: 800,
        quantity: 4,
        completed: false,

      },
      {
        id: 1,
        title: 'Anillo flor',
        price: 900,
        quantity: 4,
        completed: true,

      },
      {
        id: 3,
        title: 'Anillo sol',
        price: 1000,
        quantity: 4,
        completed: false,

      },
    ];
    this.getTotal();
  }
  deleteItem(item: Item){
    this.items =  this.items.filter(x => x.id != item.id);
    this.getTotal();
  }
  getTotal(){
    this.total = this.items
                .filter(x =>!x.completed)
                .map(x => x.quantity * this.items.price)
                .reduce((acc, item)=>acc += item,0);
  }

}
