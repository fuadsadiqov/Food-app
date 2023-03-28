import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Vegan salad',
        cookTime: '3-5',
        price: 5,
        favorite: false,
        origins: ['europe'],
        starts: 4.5,
        imageUrl: '/assets/img/food/food-1.jpg',
        tags: ['Vegan', 'Salad', 'Lunch']
      },
      {
        id: 2,
        name: 'Pizza',
        cookTime: '10-20',
        price: 15,
        favorite: true,
        origins: ['italy'],
        starts: 4.0,
        imageUrl: '/assets/img/food/food-2.jpg',
        tags: ['Pizza', 'Fast-food', 'Lunch']
      },
      {
        id: 3,
        name: 'Breakfast',
        cookTime: '8-10',
        price: 12,
        favorite: false,
        origins: ['turkey'],
        starts: 3.0,
        imageUrl: '/assets/img/food/food-3.jpg',
        tags: ['Breakfast', 'Egg']
      },
      {
        id: 4,
        name: 'Steak',
        cookTime: '10-20',
        price: 20,
        favorite: true,
        origins: ['Nusr-et'],
        starts: 4.5,
        imageUrl: '/assets/img/food/food-4.jpg',
        tags: ['Steak', 'Meat', 'Dinner']
      },
      {
        id: 5,
        name: 'Burger',
        cookTime: '6-8',
        price: 8,
        favorite: true,
        origins: ['london'],
        starts: 5.0,
        imageUrl: '/assets/img/food/food-5.jpg',
        tags: ['Burger', 'Fast-food', 'Lunch']
      },
      {
        id: 6,
        name: 'Pankek',
        cookTime: '15-17',
        price: 3,
        favorite: false,
        origins: ['india'],
        starts: 5.0,
        imageUrl: '/assets/img/food/food-6.jpg',
        tags: ['Pankek', 'Breakfast']
      }
    ]
  }

}
