import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchQuery: string = '';
  
  constructor(private router: Router) {}
  
  searchProjects(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/projets'], { 
        queryParams: { search: this.searchQuery } 
      });
    }
  }
  
  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
  
  navigateToProjects(): void {
    this.router.navigate(['/projets']);
  }
}
