import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {
  categories: any[] = [];
  selectedCategory: any = null;  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch the categories from the JSON file
    this.http.get<any[]>('categories.json').subscribe(data => {
      this.categories = data;
    });
  }


  selectCategory(category: any): void {
    this.selectedCategory = category;
  }
}
