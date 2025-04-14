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
    { name: 'Pixees', category: 'Web app', description: 'Application de création et de Pixels art avec une communauté en ligne', image: 'images/pixees.png'},
    { name: 'Greenscore', category: 'Web app/plugin', description: 'Plugin Green qui permet de visualiser son émission de CO2 et de la réduire.', image: 'images/greenscore.png'},
    { name: 'Ovcrkazov', category: 'Web app', description: "Projet pour la Nuit de l'Info 2023 qui demande à dire le vrai du faux concernant l'environnement", image: 'images/ovcrkazov.png'},
    { name: 'Corpean', category: 'Web app', description: "Projet pour la Nuit de L'Info 2024 qui met en lien les parties du corps humain avec l'océan.", image: 'images/corpean.png'},
    { name: 'Portfolio', category: 'Portfolio', description: 'Mon portfolio personnel pour présenter mes projets et mes compétences.', image: 'images/portfolio.png'}
  ];
  
  slideConfig = {
    slidesToShow: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
