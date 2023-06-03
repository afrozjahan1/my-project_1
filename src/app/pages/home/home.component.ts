import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 public productDetails: any; 
  
public getProductDetail(product: any){
  console.log(product);
this.productDetails = product;

}
  

  public products = [
    {
      id: 1,
      name: 'product 1',
      price: '100',
      description:
      'This is a wider range card',
    },
    {
      id: 2,
      name: 'product 2',
      price: '200',
      description:
      'This is a wider range card',
    },
    {
      id: 3,
      name: 'product 3',
      price: '300',
      description:
      'This is a wider range card',
      imgUrl: 'assets/images/home/placeing_640_480_any.png',
    },
    {
      id: 4,
      name: 'product 4',
      price: '400',
      description:
      'This is a wider range card',
    },
    {
      id: 5,
      name: 'product 5',
      price: '50000',
      description:
      'This is a wider range card',
    },
  ]

}
