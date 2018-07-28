import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //private name: string;
  //private cost: string;
 // private pic: string;
  private product :any ={};
  private products: any[] = [
   // { name: 'Refrigerator', cost: 1700, pic: '' },
    { name: 'Television', cost: 4500, pic: '' }
  ];

  saveProduct() {

    //var product = {
    // name: this.name,
     // cost: this.cost,
     // pic: this.pic
    //}
    this.products.push(this.product);
   // this.name='',
    this.product={};
  }
  deleteProduct(index){
    this.products.splice(index,1);

  }
  editProduct(product){
console.log("record is ",product);
this.product=product;
  }

}
