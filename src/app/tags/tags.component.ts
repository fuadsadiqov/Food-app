import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tags } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit{
  tags: Tags[] = []

  constructor(private foodService: FoodService){}

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags()
  }
}
