import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/main/home',
      icon: 'home-outline'
    },
    {
      title: 'Profile',
      url: '/main/profile',
      icon: 'person-outline'
    },
    {
      title: 'Settings',
      url: '/main/settings',
      icon: 'settings'
    },
  ];

  router = inject(Router)
  currentPath: string = '';
  ngOnInit() {
    this.router.events.subscribe((event:any) => {
      if(event?.url) this.currentPath = event.url;


    })
  }

}
