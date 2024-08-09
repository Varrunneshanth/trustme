import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor,NgIf,NgClass,RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: any[] = [];
  selectedCategoryCompanies: any[] = [];
  selectedCategoryName: string = '';

  @ViewChildren('categoryBox') categoryBoxes!: QueryList<ElementRef>;

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  loadCategoryCompanies(category: any): void {
    this.selectedCategoryName = category.name;
    this.categoryService.getCategoryCompanies(category.categoryid).subscribe(
      (data) => {
        this.selectedCategoryCompanies = data;
      },
      (error) => {
        console.error('Error fetching category companies', error);
      }
    );

    this.scrollToCategory(category.name);
  }

  scrollToCategory(categoryName: string): void {
    const categoryBox = this.categoryBoxes.find(box => box.nativeElement.querySelector('.category-title').innerText.trim() === categoryName);
    if (categoryBox) {
      categoryBox.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
