import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  src1: string = "../../../assets/imgs/poert1.png";
  src2: string = "../../../assets/imgs/port2.png";
  src3: string = "../../../assets/imgs/port3.png";
  showFixed: boolean = false;
  targetSrc: string = "";
  getSrc(event: Event): void{
    this.showFixed = true;
    this.targetSrc = (event.target as any).dataset.src;
    console.log(this.targetSrc);
    
  }
  hide(event: Event): void{
    event.stopPropagation();
    this.showFixed = false;
    
  }
}
