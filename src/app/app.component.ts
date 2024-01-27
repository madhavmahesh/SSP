import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EligibilityComponent } from './eligibility/eligibility.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EligibilityComponent,RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'self-service-portal';
}
