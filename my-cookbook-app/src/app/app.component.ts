import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  feature = 'recipes'; // Default feature

  onNavigate(feature: string) {
    this.feature = feature;
  }

}
