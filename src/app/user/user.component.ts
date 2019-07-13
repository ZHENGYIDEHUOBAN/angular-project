import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
   this.userService.getUsers().subscribe(res => {
    this.users = res;
   });
  }

}
