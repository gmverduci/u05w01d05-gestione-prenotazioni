import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  allUsers!: User[];


  constructor (private userSrv: UsersService){}

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe((users) => {
      this.allUsers = users;
    })
  }
}
