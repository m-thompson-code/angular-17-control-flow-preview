import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // Ignore error message involving "EOF" :)
  template: `
    @if (true) {
      True if content
    } @else {
      Else if content
    }
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
