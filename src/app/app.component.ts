import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly http: HttpClient
  ) { }
  title = 'angular-project';
  user = null;

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    // this.http.get('/user/findAll').subscribe(res => {
    //   this.user = res;
    //   console.log(this.user);
    // })
  }
}
