import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {
  food!: Food

  constructor(private activatedRoute: ActivatedRoute, 
              private foodService: FoodService, 
              private cartService: CartService,
              private router: Router)
  {
    activatedRoute.params.subscribe(param => {
      if(param['id']){
        this.food = foodService.getFoodById(param['id'])        
      }
    })
  }
  addToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
