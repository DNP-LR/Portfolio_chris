import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public footerLinks = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/projects'},
    {name: 'Contact', link: '/contact'},
  ]
}
