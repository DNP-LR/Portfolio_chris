import {Component} from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  public projects = [
    {
      image: '/images/pixel.jpg',
      title: 'Mastering Angular',
      description: 'A journey through modern Angular development techniques.',
      authorImage: '/images/pixel.jpg',
      author: 'Jane Doe'
    },
    {
      image: '/images/pixel.jpg',
      title: 'Mastering Angular',
      description: 'A journey through modern Angular development techniques.',
      authorImage: '/images/pixel.jpg',
      author: 'Jane Doe'
    },
  ];

}
