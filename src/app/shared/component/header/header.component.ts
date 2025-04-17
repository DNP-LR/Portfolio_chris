import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'

})
export class HeaderComponent {
  public isMenuOpen: boolean = false;

  public headerLinks = [
    {name: 'Home', link: '/home'},
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/project'},
    {name: 'Contact', link: '/contact'},
  ]


  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
