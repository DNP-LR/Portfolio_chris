import {Component} from '@angular/core';
import {HeaderComponent} from './shared/component/header/header.component';
import {FooterComponent} from './shared/component/footer/footer.component';
import {BodyComponent} from './shared/component/body/body.component';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {ButtonComponent} from './shared/component/button/button.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NgOptimizedImage,
    ButtonComponent,
    NgStyle
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {


  public frontendSkills = [
    {title: 'HTML / CSS', progress: 95},
    {title: 'JavaScript / TypeScript', progress: 90},
    {title: 'Angular / React', progress: 85}
  ];

  public backendSkills = [
    {title: 'Node.js / Express', progress: 88},
    {title: 'NestJS', progress: 80},
    {title: 'MongoDB / SQL', progress: 75}
  ];

  public blogPosts = [
    {
      image: '/images/pixel.jpg',
      title: 'Mastering Angular',
      description: 'A journey through modern Angular development techniques.',
      authorImage: '/images/pixel.jpg',
      author: 'Jane Doe'
    },
    {
      image: '/images/pixel.jpg',
      title: 'Design Trends 2025',
      description: 'Stay updated with the freshest UI/UX trends.',
      authorImage: '/images/pixel.jpg',
      author: 'John Smith'
    },
    {
      image: '/images/pixel.jpg',
      title: 'Design Trends 2025',
      description: 'Stay updated with the freshest UI/UX trends.',
      authorImage: '/images/pixel.jpg',
      author: 'John Smith'
    },
    {
      image: '/images/pixel.jpg',
      title: 'Mastering Angular',
      description: 'A journey through modern Angular development techniques.',
      authorImage: '/images/pixel.jpg',
      author: 'Jane Doe'
    },
    {
      image: '/images/pixel.jpg',
      title: 'Design Trends 2025',
      description: 'Stay updated with the freshest UI/UX trends.',
      authorImage: '/images/pixel.jpg',
      author: 'John Smith'
    },
    {
      image: '/images/pixel.jpg',
      title: 'Design Trends 2025',
      description: 'Stay updated with the freshest UI/UX trends.',
      authorImage: '/images/pixel.jpg',
      author: 'John Smith'
    }
  ];

}
