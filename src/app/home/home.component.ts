import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  users = [];
  userItem = '';
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.users;
  }
  addUser() {
    this.users.unshift({
      name: this.userItem
    });
    this.userItem = '';
  }
  deleteUser(item) {
    this.users.splice(item, 1);
    console.log(item);
  }

  deleteUsers() {
    this.users = [],
    this.userItem = '';
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/join']);
  }
}
