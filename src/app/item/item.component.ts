import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item: IItem = {
    id: -1,
    title: '',
    userId: -1,
    completed: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
