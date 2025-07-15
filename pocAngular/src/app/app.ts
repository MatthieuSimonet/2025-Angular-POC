import { Component } from '@angular/core';
import { TopMenu } from './components/top-menu/top-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    TopMenu
  ],
  styleUrl: './app.scss'
})
export class App {
}
