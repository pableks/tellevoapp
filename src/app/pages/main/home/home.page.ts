import { Component, OnInit, inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {





  
  darkMode: boolean = false;


  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: light)');
    this.darkMode = prefersDark.matches;
}


cambio() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
}
  

  ngOnInit() {
    
  }
  
  signOut() {
    this.firebaseSvc.signOut();
  }
  

}
