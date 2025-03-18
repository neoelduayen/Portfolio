import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  personalInfo = {
    name: 'ELDUAYEN Néo',
    title: 'Développeur fullstack',
    email: 'neo.elduayen@gmail.com',
    phone: '+33 6 29 95 72 39',
    location: 'Bayonne, France',
    bio: 'Etudiant en 3ème année en alternance chez Satlantis. Spécialisé dans les technologies front-end modernes comme Angular et Tailwind CSS.'
  };

  experience = [
    {
      title: 'Stage/Alternance Développeur Full Stack',
      company: 'Satlantis',
      url: 'https://www.satlantis.com/',
      period: '2024 - 2025',
      description: 'Création du projet d’application web “GRD-Tool”, une application de simulation des équipements relatifs au capacité des cameras de l’entreprise'
    },
    {
      title: "Projet d'étude",
      url: 'https://github.com/ToxykAuBleu/Pixees',
      company: 'IUT de Bayonne et du Pays Basque - Pixees',
      period: '2023 - 2024',
      description: 'Conception d’une application de création/publication de Pixel Art en ligne'
    }
  ];

  education = [
    {
      degree: 'BUT Informatique',
      institution: 'IUT de Bayonne et du Pays Basque',
      year: '2022 - 2025',
      url: 'https://www.iutbayonne.univ-pau.fr/'
    },
    {
      degree: 'Bac général - Mention Bien',
      institution: 'Lycée de Borda - Dax',
      year: '2019 - 2022',
      url: 'https://lyceedeborda.fr/'
    }
  ];

  interests = [
    'Jeux vidéos', 'Pelote basque', 'Tir sportif', 'Musculation', 'Dessin', 
    '3D', 'Moto', 'Cinéma', 'Voyages'
  ];

  languages = [
    { name: 'Français', level: 'Natif' },
    { name: 'Anglais', level: 'Courant' },
    { name: 'Espagnol', level: 'Intermédiaire' }
  ];

  socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/neo-elduayen/' },
    { name: 'Instagram', url: 'https://www.instagram.com/neo.elduayen/' },
  ]
}
