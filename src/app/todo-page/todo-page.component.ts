import { Component, OnInit } from '@angular/core';
import { IItem } from '../item.interface';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  items: IItem[] = [];
  users: IUser[] = [];

  constructor() {
    this.getAllItemsFromServer();
    this.getAllUsersFromServer();
  }

  ngOnInit(): void {}

  async getAllItemsFromServer() {
    await fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (response.status !== 200) throw new Error('Server is not availible');
        return response.json();
      })
      .then((json) => {
        this.items = json;
      })
      .catch((err) => console.error(err));
  }

  async getAllUsersFromServer() {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.status !== 200) throw new Error('Server is not availible');
        return response.json();
      })
      .then((json) => {
        this.users = json;
      })
      .catch((err) => console.error(err));

    this.users.push({ id: 11, name: 'Alexandra' });
  }

  getUsersItems(userId: number): IItem[] {
    return this.items.filter((item) => item.userId == userId);
  }
}
