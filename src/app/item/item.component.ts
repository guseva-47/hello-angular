import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {
  toDoItem: Item;

  constructor() {
    this.toDoItem = new Item(1, 'Name', false);
  }

  ngOnInit(): void {}
}
