import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Destaques', url: '/folder', icon: 'car-sport' },
    { title: 'Anunciar', url: '#', icon: 'megaphone' },
    { title: 'Listagem', url: '/lista-carr', icon: 'layers' },
    { title: 'Perfis', url: '#', icon: 'people-circle' },
    { title: 'Clássicos', url: '#', icon: 'diamond' },
    { title: 'Sair', url: '/login', icon: 'return-up-back' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  url : String | undefined;

  constructor(private router: Router) {

    router.events.subscribe(event => {

      if (event instanceof NavigationEnd){
        this.url = event.url;

        console.log(this.url); //Apresenta no console em qual url estou no projeto.
      }
    });
  }
}
