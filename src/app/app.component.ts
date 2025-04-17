import {Component} from '@angular/core';
import {HeaderComponent} from './shared/component/header/header.component';
import {FooterComponent} from './shared/component/footer/footer.component';
import {BodyComponent} from './shared/component/body/body.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {


}
