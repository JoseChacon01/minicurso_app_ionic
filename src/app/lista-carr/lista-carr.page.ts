import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-lista-carr',
  templateUrl: './lista-carr.page.html',
  styleUrls: ['./lista-carr.page.scss'],
})
export class ListaCarrPage implements OnInit {

  Carros: any;

  constructor(
    private apiService: ApiService,
  ) { 
    this.todosOsCarros();
    this.EnviarDados();
  }

  ngOnInit() {
  }

    todosOsCarros() {
    this.apiService.ListarCars().subscribe((data: any) => {
      this.Carros = data;
    });
  }



  EnviarDados() {
    const date: any = {
      title: 'Minicurso',
      body: 'Ionic',
      userId: 10,
    };

    this.apiService.PublicarDados(date).subscribe(date => {
      console.log(date);
    });
  }
}
