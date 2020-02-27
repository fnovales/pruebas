import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Observable<any>;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getAllDb();
  }

}
