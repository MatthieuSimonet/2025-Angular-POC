import { Component } from '@angular/core';
import { SERVICE_TEST_TOKEN, DAO_TEST_TOKEN } from './injecteur';
import { serviceTest } from './services/serviceTest';
import { daoTest } from './dao/daoTest';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    RouterOutlet,RouterLink
  ],
  providers: [
    { provide: SERVICE_TEST_TOKEN, useClass: serviceTest },
    { provide: DAO_TEST_TOKEN, useClass: daoTest },
  ],
  styleUrl: './app.scss'
})
export class App {


  constructor(private router: Router) {
    
  }

  public Go() {
    this.router.navigateByUrl('menu');
  }
}
