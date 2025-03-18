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
    { name: 'Projet 1', category: 'Web Design', description: 'Description de l\'image', date: '12/03/2025' },
    { name: 'Projet 2', category: 'Graphic Design', description: 'Description de l\'image', date: '12/03/2025' },
    { name: 'Projet 3', category: 'Web Design', description: 'Description de l\'image', date: '12/03/2025' },
    { name: 'Projet 4', category: 'Graphic Design', description: 'Description de l\'image', date: '12/03/2025' },
    { name: 'Projet 5', category: 'UI/UX', description: 'Description de l\'image', date: '12/03/2025' }
  ];
  
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: false,
    adaptiveHeight: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  nextSlide() {
    this.slickModal.slickNext();
    }
  prevSlide() {
    this.slickModal.slickPrev();
  }
}
