import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarScroll: boolean = false;
@HostListener('window:scroll',['$event'])onScroll(): void{
  if (window.scrollY > 100) {
    this.navbarScroll = true;
  } else {
    this.navbarScroll = false;
    
  }
  
}
}
