import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // for using ngIf, ngFor, etc.
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css',
  
})
export class GroceryListComponent {
  groceryItems: string[] = [];
  newItem: string = '';

  // Add a new item to the grocery list
  addItem() {
    if (this.newItem) {
      this.groceryItems.push(this.newItem);
      this.newItem = '';
    }
  }

  // Remove an item from the grocery list
  removeItem(item: string) {
    this.groceryItems = this.groceryItems.filter(i => i !== item);
  }
}
