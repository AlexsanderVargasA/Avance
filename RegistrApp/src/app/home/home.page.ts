import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private Api: ApiService, private router: Router) {}

  logIn(){
    this.Api.getData().subscribe (data => {
      this.logIn = data
      console.log(this.logIn)});
      this.router.navigate(['alumno'])

  }

}
