import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  template: `This is a test! :D`,
  styleUrls: []
})
export class TestComponent {
  constructor() {
    console.log('TestComponent - constructor');
  }
  ngOnInit(): void {
    console.log('TestComponent - ngOnInit');
  }
}
