import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public footerLinks = [
    {name: 'Home', link: 'home'},
    {name: 'About', link: 'about'},
    {name: 'Projects', link: 'project'},
    {name: 'Contact', link: 'contact'},
  ]
}
