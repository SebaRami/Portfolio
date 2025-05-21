import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { MoreinfoComponent } from './components/moreinfo/moreinfo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutmeComponent, MoreinfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-seba';
}
