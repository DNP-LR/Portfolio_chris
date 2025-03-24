import {Component} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgIf
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public isMenuOpen: boolean = false;

  public headerLinks = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/projects'},
    {name: 'Contact', link: '/contact'},
  ]


  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
