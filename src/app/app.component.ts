import {Component} from '@angular/core';
import {HeaderComponent} from './shared/component/header/header.component';
import {FooterComponent} from './shared/component/footer/footer.component';
import {BodyComponent} from './shared/component/body/body.component';
import {NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from './shared/component/button/button.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NgOptimizedImage,
    ButtonComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Portfolio';
}
