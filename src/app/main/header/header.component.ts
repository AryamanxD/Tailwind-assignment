import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent {
  menuVisible = false;

  
  

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  // check mobile device
  isMobile(): boolean {
    return window.innerWidth < 768;
  }
}
