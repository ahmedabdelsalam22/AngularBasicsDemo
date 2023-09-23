import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  categoryList:ICategory[];
  selectedCatId:number=0;

 constructor() {
  this.categoryList = 
  [
    {id:1,name:"labtop"},
    {id:2,name:"mobile"}
  ];
  
 }
}
