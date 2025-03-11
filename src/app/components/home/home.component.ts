import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchQuery: string = '';
  @ViewChild('slickModal', { static: true }) slickModal!: SlickCarouselComponent;
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

  projects = [
    { name: 'Projet 1', category: 'Web Design', description: 'Description de l\'image', date: 'Date de création' },
    { name: 'Projet 2', category: 'Graphic Design', description: 'Description de l\'image', date: 'Date de création' },
    { name: 'Projet 3', category: 'Web Design', description: 'Description de l\'image', date: 'Date de création' },
    { name: 'Projet 4', category: 'Graphic Design', description: 'Description de l\'image', date: 'Date de création' },
    { name: 'Projet 5', category: 'UI/UX', description: 'Description de l\'image', date: 'Date de création' }
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: false,
    dots: true,
  };
  nextSlide() {
    this.slickModal.slickNext();
    }
  prevSlide() {
    this.slickModal.slickPrev();
  }
}
