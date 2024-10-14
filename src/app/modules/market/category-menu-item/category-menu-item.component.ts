import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  templateUrl: './category-menu-item.component.html',
  styleUrls: ['./category-menu-item.component.css']
})
export class CategoryMenuItemComponent {
  @Input() category: string = '';   // Category name
  @Input() products: string[] = []; // Array of products
}
