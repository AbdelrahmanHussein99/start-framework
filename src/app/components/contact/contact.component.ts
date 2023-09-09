import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  //flags
  nameLabel: boolean = false;
  ageLabel: boolean = false;
  emailLabel: boolean = false;
  passLabel: boolean = false;
  // values
  nameValue: string = '';
  ageValue: string = '';
  emailValue: string = '';
  passValue: string = '';
  // name
  showNameLabel(): void {
    if (this.nameValue === '') {
      this.nameLabel = false;
    } else {
      this.nameLabel = true;
      
    }
  }
  // age
  showAgeLabel(): void {
    if (this.ageValue === '') {
      this.ageLabel = false;
    } else {
      this.ageLabel = true;
      
    }
  }
  // email
  showEmailLabel(): void {
    if (this.emailValue === '') {
      this.emailLabel = false;
    } else {
      this.emailLabel = true;
      
    }
  }
  // password
  showPassLabel(): void {
    if (this.passValue === '') {
      this.passLabel = false;
    } else {
      this.passLabel = true;
      
    }
  }
}
