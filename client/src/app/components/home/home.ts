import { Component } from '@angular/core';
import {UsersServices} from  '../../services/users/users.service'

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  providers: [UsersServices]
})
export class HomeComponent {
  someVar = 'Something';
  constructor(private usersServices: UsersServices) {
    //console.log(usersServices.getUsers());
    //this.usersServices.getUsers().subscribe(user => {
    //  console.log(user);
    //});
    this.someVar = 'ded';
  }
}