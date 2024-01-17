import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  items: any[] = [     
    { 
      name: 'BUG CANDY APPLE RED', 
      ano:'1954', 
      descricao:'Eeste é um verdadeiro bug da janela oval de números correspondentes de 1954. carroceria e chassi (pan) são originais 1954.',
      imageUrl:'https://th.bing.com/th/id/R.add0e757af607acc5f93d077ed78a102?rik=3ZXp1RcaaURwbw&pid=ImgRaw&r=0' 
    },    
    { 
      name: 'STEEL BODY', 
      ano:'1948',
      descricao:' A potência vem de uma construção suave de um Ford 351 CID Windsor na frente do C-4 Automatic com um kit de câmbio.', 
      imageUrl:'https://th.bing.com/th/id/R.9d237529ed9fcf14fd0ea666b4e446e6?rik=yb9%2f3rWd3VzhDw&riu=http%3a%2f%2ftopclassiccarsforsale.com%2fuploads%2fphotoalbum%2f1948-ford-anglia-steel-body-street-rod-awsome-1.jpg&ehk=03XXX8ymjosb8mOaVkiJueLsaRJojDQ0Y4sRgymXGaM%3d&risl=&pid=ImgRaw&r=0'
    }, 
    { 
      name: 'WINDOW CUSTOM', 
      ano:'1950', 
      descricao:'Estado atribuído VIN, motor 350 CI V-8, Direção hidráulica, Potência freios, Ar condicionado, Mustang II dianteiro',
      imageUrl:'https://i.pinimg.com/originals/d4/c3/b9/d4c3b99b74434588792d2aba038516a9.jpg' 
    },
    { 
      name: 'TOWN SEDAN', 
      ano:'1930', 
      descricao:'Este modelo de carro antigo pode ser considerado o carro mais luxuoso da Ford em seu ano de fabricação. ',
      imageUrl:'https://th.bing.com/th/id/R.7f2cffe9044591c52cb3c4f9b953e031?rik=LvQZ%2fOlW1e7EYg&riu=http%3a%2f%2fwww.llcarrosantigos.com.br%2fuploads%2ff029c04b4a7430c009a1ceb27dd1e423.JPG&ehk=xD9AX%2bmeSTcN2KVmFbTqF3sIssDzTpWRgeHoGCEC89k%3d&risl=&pid=ImgRaw&r=0' 
    },
  ];

  filteredItems: any[] = [];
  searchTerm: string = "";
  searchCategory: string = "";
  constructor(
    private toastController: ToastController,
    private router: Router,
    private renderer: Renderer2,
  ) {
    this.filteredItems = this.items; 
  }

  searchItems() {
    this.filteredItems = this.items.filter((item) => {
      const searchTermLower = this.searchTerm.toLowerCase(); 
      const nameMatch = item.name.toLowerCase().includes(searchTermLower);
      const anoMatch = item.ano.toLowerCase().includes(searchTermLower);
      return nameMatch || anoMatch;
    });
  }

  ngOnInit() {
    this.mensagem();
  }

  async mensagem() {
    const toast = await this.toastController.create({
      message: 'Seja Bem-vindo(a).',
      duration: 2200,
      color: 'light',
      icon: 'shield-checkmark',
    });
    toast.present();
  }



  
  logout() {
    this.router.navigate(['login']);
  }









  mudarTemaDark() {
    this.renderer.setAttribute(document.body, 'color-theme', 'dark');
  }

}
