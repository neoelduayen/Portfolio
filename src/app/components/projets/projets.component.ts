import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  demoLink: string;
  codeLink: string;
}

@Component({
  selector: 'app-projets',
  standalone: false,
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.scss'
})

export class ProjetsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Pixees',
      description: 'Application de création et de Pixels art avec une communauté en ligne',
      tags: ['Angular', 'Tailwind CSS', 'MySQL', 'PHP'],
      images: ['images/pixees.png', 'images/pixees2.png', 'images/pixees3.png'],
      demoLink: 'https://pixees.art/',
      codeLink: 'https://github.com/ToxykAuBleu/Pixees'
    },
    {
      id: 2,
      title: 'Greenscore',
      description: 'Plugin Green qui permet de visualiser son émission de CO2 et de la réduire.',
      tags: ['Symfony', 'Tailwind', 'Chart.js'],
      images: ['images/greenscore.png', 'images/greenscore2.png', 'images/greenscore3.png'],
      demoLink: 'https://greenscoreweb.alwaysdata.net/',
      codeLink: 'https://github.com/GreenScoreWebPlugin/GreenScorePlugin'
    },
    {
      id: 3,
      title: 'Ovcrkazov',
      description: "Projet pour la Nuit de l'Info 2023 qui demande à dire le vrai du faux concernant l'environnement",
      tags: ['Angular', 'PHP', 'API REST'],
      images: ['images/ovcrkazov.png', 'images/ovcrkazov2.png'],
      demoLink: 'https://ovcrkazov.fr/',
      codeLink: 'https://github.com/ovcrkazov'
    },
    {
      id: 4,
      title: 'Corpean',
      description: "Projet pour la Nuit de L'Info 2024 qui met en lien les parties du corps humain avec l'océan.",
      tags: ['Angular', 'Tailwind', 'PHP'],
      images: ['images/corpean.png', 'images/corpean2.png', 'images/corpean3.png'],
      demoLink: 'https://nuit-info-2024.valbion.com/',
      codeLink: 'https://github.com/ToxykAuBleu/NuitInfo24'
    },
    {
      id: 5,
      title: 'Portfolio',
      description: 'Mon portfolio personnel pour présenter mes projets et mes compétences.',
      tags: ['Angular', 'Tailwind'],
      images: ['images/portfolio.png', 'images/portfolio2.png', 'images/portfolio3.png'],
      demoLink: 'localhost:4200',
      codeLink: 'https://github.com/neoelduayen/Portfolio'
    },
  ];

  ngAfterViewInit(): void {
    this.initCarousels();
  }

  private initCarousels(): void {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
      const slides = carousel.querySelectorAll('.carousel-item');
      const indicators = carousel.querySelectorAll('.carousel-indicators button');
      const inner = carousel.querySelector('.carousel-inner') as HTMLElement;
      let currentIndex = 0;
      const slideWidth = 100;
      let intervalId: number | null = null;
      
      // Set initial active indicator
      if (indicators.length > 0) {
        indicators[0].classList.add('opacity-100');
      }
      
      // Setup indicators
      indicators.forEach((indicator, idx) => {
        indicator.addEventListener('click', () => {
          goToSlide(idx);
        });
      });
      
      // Auto slide function
      function autoSlide(): void {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
      }
      
      // Go to specific slide
      function goToSlide(idx: number): void {
        inner.style.transform = `translateX(-${idx * slideWidth}%)`;
        
        // Update indicators
        indicators.forEach((ind, i) => {
          if (i === idx) {
            ind.classList.add('opacity-100');
            ind.classList.remove('opacity-50');
          } else {
            ind.classList.add('opacity-50');
            ind.classList.remove('opacity-100');
          }
        });
        
        currentIndex = idx;
      }
      
      // Start automatic slideshow on hover
      carousel.addEventListener('mouseenter', () => {
        intervalId = window.setInterval(autoSlide, 1500);
      });
      
      // Stop slideshow when not hovering
      carousel.addEventListener('mouseleave', () => {
        if (intervalId !== null) {
          clearInterval(intervalId);
          intervalId = null;
        }
        
        // Reset to first slide when mouse leaves
        goToSlide(0);
      });
    });
  }
}
