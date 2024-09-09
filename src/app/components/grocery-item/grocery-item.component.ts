import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grocery-item',
  standalone: true,
  imports: [],
  templateUrl: './grocery-item.component.html',
  styleUrl: './grocery-item.component.css'
})
export class GroceryItemComponent {
  @Input() item: string = '';

}
