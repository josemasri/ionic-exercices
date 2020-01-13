import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Ejercicio 1',
      url: '/ejercicio1',
      icon: 'code'
    },
    {
      title: 'Ejercicio 2',
      url: '/ejercicio2',
      icon: 'code'
    },
    {
      title: 'Ejercicio 3',
      url: '/ejercicio3',
      icon: 'code'
    },
    {
      title: 'Ejercicio 4',
      url: '/ejercicio4',
      icon: 'code'
    },
    {
      title: 'Ejercicio 5',
      url: '/ejercicio5',
      icon: 'code'
    },
    {
      title: 'Ejercicio 6',
      url: '/ejercicio6',
      icon: 'code'
    },
    {
      title: 'Ejercicio 7',
      url: '/ejercicio7',
      icon: 'code'
    },
    {
      title: 'Ejercicio 8',
      url: '/ejercicio8',
      icon: 'code'
    },
    {
      title: 'Ejercicio 9',
      url: '/ejercicio9',
      icon: 'code'
    },
    {
      title: 'Ejercicio 10',
      url: '/ejercicio10',
      icon: 'code'
    },
    {
      title: 'Ejercicio 11',
      url: '/ejercicio11',
      icon: 'code'
    },
    {
      title: 'Ejercicio 12',
      url: '/ejercicio12',
      icon: 'code'
    },
    {
      title: 'Problema Final',
      url: '/problema-final',
      icon: 'code'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
