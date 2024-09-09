import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GroceryListComponent } from './components/grocery-list/grocery-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroceryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grocery-list-app';
}
